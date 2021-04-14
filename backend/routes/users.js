var express = require('express');
var router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const storeToken = require('./auth/storeToken');
const nodemailer = require("nodemailer");
var Email = require('email-templates');
var path = require('path');


const saltRounds = 10;

const prepareResponse = (response, status, body, type) => {
  response.set('Content-Type', type);
  response.status(status).send(body);
};

const prepareEmailSending = () => {
  let transporter = nodemailer.createTransport({
    host: "mail.aroundorder.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@aroundorder.com',
      pass: 'Transp0rt1!',
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  const email = new Email(
    {
      message:
      {
        from: '"Daijara" <info@aroundorder.com>'
      },

      send: true,
      transport: transporter,
      views: {
        options: {
          extension: 'jade'
        }
      },
      juice: true,
      juiceSettings:
      {
        tableElements: ['TABLE']
      },
      juiceResources:
      {
        preserveImportant: true,
        webResources:
        {
          relativeTo: path.join(__dirname, '..', 'emails', 'email'),
          images: true
        }
      }
    });

  return email;
};





//////////
router.get('/', async function (req, res, next) {
  prepareResponse(res, 200, { success: true }, 'application/json');
});
//////
/* GET users listing. */
router.get('/:id', async function (req, res, next) {
  let id = req.params.id;

  const user = await User.findByPk(id);

  prepareResponse(res, 200, user, 'application/json');
});




//SIGN IN API WITH JWT USING COOKIES
router.post('/signin', function (req, res, next) {
  const { username, password, email } = req.body;

  User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password).then(result => {
        if (result) {
          jwt.sign({ id: user.email, createdAt: user.createdAt }, process.env.SECRET,
            { expiresIn: parseInt(process.env.EXPIRATION) },

            async function (error, token) {
              if (error) {
                const response = {
                  success: false,
                  message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
                };

                prepareResponse(res, 500, response, 'application/json');
              }
              else {
                await storeToken(res, token);

                const current = {
                  id: user.id,
                  username: user.username,
                  lastSignIn: user.lastSignIn,
                  role: user.role
                };

                const response = {
                  success: true,
                  message: "You have signed in successfully.",
                  user: current,
                };

                user.update({ lastSignIn: new Date() }, {})
                  .then(() => {
                    prepareResponse(res, 200, response, 'application/json');
                  })
                  .catch(() => {
                    const response = {
                      success: false,
                      message:
                        "Some internal server error has occured while attempting to proceed "
                        + "with your request, please try again."
                    };

                    prepareResponse(res, 500, response, 'application/json');
                  });
              }
            })
        }
        else {
          const response = {
            success: false,
            message: "The password provided is incorrect, please try again with another password."
          };

          prepareResponse(res, 500, response, 'application/json');
        }
      });
    }
    else {
      const response = {
        success: false,
        message: "No User was found with the provided username, please try again with another username."
      };

      prepareResponse(res, 500, response, 'application/json');
    }
  })
});

//SIGNUP
router.post('/signup', function (req, res, next) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      const response = {
        success: false,
        message: "Email already exist !"
      };
      prepareResponse(res, 500, response, 'application/json')

    } else {

      let { username, password, role, email } = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          let new_user = await User.create({
            username,
            password: hash,
            role,
            email,
            createdAt: new Date(),
            updatedAt: new Date(),
          });

          try {
            const token = await jwt.sign({ email: req.body.email }, process.env.SECRET,
              { expiresIn: parseInt(process.env.EXPIRATION) });

            const emailSender = prepareEmailSending();
            emailSender.send(
              {
                template: 'email',
                message: {
                  to: 'rahma.kalai0@gmail.com',
                  attachments: [{
                    path: `${__dirname}/../emails/email/images/daijara.png`,
                    cid: 'logo'
                  }],
                  //   html: `
                  //  <p>${process.env.CLIENT_URL}/signup/${token} </p> `
                },
                locals: {

                  username: username,
                  password: password,
                  role: role,
                  email: email,
                  token

                }


              });

            const response = {
              success: true,
              token,
              message: "User created successfully."
            };
            prepareResponse(res, 200, response, 'application/json');
          }
          catch (error) {
            prepareResponse(res, 500, { success: false }, 'application/json');
          }
        });
      });
    };
  });
 });


  //Forget PWD
  router.post('/forgotpwd', function (req, res, next) {
    let { username } = req.body;
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        try {
          const token = jwt.sign({ email: req.body.email }, process.env.SECRET,
            { expiresIn: '1H' });

          const emailSender = prepareEmailSending();
          emailSender.send(
            {
              template: 'forgetpwd',
              message: {
                to: 'rahma.kalai0@gmail.com',
                attachments: [{
                  path: `${__dirname}/../emails/forgetpwd/images/daijara.png`,
                  cid: 'logo'
                }],
                //   html: `
                //  <p>${process.env.RESET_PWD_KEY}/resetpwd/${token} </p> `
              },
              locals: {
                id: user.id,
                token,
                username

              }
            });

          const response = {
            success: true,

            message: "Email sent!!"
          };

          prepareResponse(res, 200, response, 'application/json');
        }
        catch (error) {
          console.log(error)
          prepareResponse(res, 500, { success: false }, 'application/json');
        }
      }
    });
  });



  // RESET pwd
  router.post('/resetpassword', function (req, res) {
    const id = req.body.id;
    console.log(req.body);
    User.findByPk(id).then(user =>
      {

      try {
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash( req.body.password, salt, async function (err, hash) {
            user.update({
              password: hash,
            }).then(user => prepareResponse(res, 200, { success: true }, 'application/json')).catch(error => console.log(error))
          });
        });

      }
      catch (error) {
        console.log(error)
        prepareResponse(res, 500, { success: false }, 'application/json');

      };
    });
  });
///change
 router.post('/changepwd', function (req, res) {
    const { password, email } = req.body;
    User.findOne({ where: { email: email } }).then(user =>
      {
        bcrypt.compare(password, user.password).then(result =>
          {
          if (result)
          {
            try {

              bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash( req.body.newpassword, salt, async function (err, hash) {
                  user.update({
                    password: hash,
                  }).then(user => prepareResponse(res, 200, { success: true }, 'application/json')).catch(error => console.log(error))
                });
              });

            }
            catch (error) {
              console.log(error)
              prepareResponse(res, 500, { success: false }, 'application/json');

            };

          }
          else
          {
            prepareResponse(res, 500, { success: false }, 'application/json');
          }
        });
    })
    .catch(error => console.log(error));
  });




  //UPDATE PROFIL
router.put('/updateP',(req ,res, next) => {

  const { password, email } = req.body;
  User.findOne({ where: { email: email } }).then(user =>
    {

      user.update({
        username,


    
        createdAt: new Date(),
        updatedAt: new Date(),


      })
    });


});




  //LOGOUT
  router.get('/logout', (req, res, next) => {
    try {
      res.clearCookie("jwt");
      console.log("logout successfully");

      prepareResponse(res, 200, response, 'application/json');

    } catch (error) {
      res.status(500).send(error);
    }
  });

  module.exports = router;
