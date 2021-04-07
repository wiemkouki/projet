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
  //response.set('Content-Type', type);
  response.status(status).send(body);
};
 
const prepareEmailSending = () =>
{
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
  


router.get('/', async function (req, res, next) {
  prepareResponse(res, 200, { success: true }, 'application/json');
});

/* GET users listing. */
router.get('/:id', async function (req, res, next) {
  let id = req.params.id;

  const user = await User.findByPk(id);

  prepareResponse(res, 200, user, 'application/json');
});




router.post('/login', async function (req, res, next) {
  let { username, password } = req.body;

  let user = await User.findOne({ where: { username: username } });

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      prepareResponse(res, 200, { success: true, user }, 'application/json');
    }
    else {
      prepareResponse(res, 500, { success: false }, 'application/json');
    }
  });

});


//SIGN IN API WITH JWT USING COOKIES 
router.post('/signin', function (req, res, next) {
  const { username, password ,email } = req.body;

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
  let { username, password, role, email } = req.body;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
        }
        else{
          
 
            let new_user = User.create({
              username ,
              password:hash,
              role ,
              email,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          
            try {
              const token =  jwt.sign({ email: req.body.email }, process.env.SECRET,
                { expiresIn: parseInt(process.env.EXPIRATION) });
                 
        const emailSender = prepareEmailSending();
        emailSender.send(
        {
            template: 'email',
            message: {
              to: 'rahma.elkalai01@gmail.com',
                attachments: [{
                    path: `${__dirname}/../emails/email/images/daijara.png`,
                    cid: 'logo'
                }]
            },
            locals: {
 
              username: username,
              password: password,
              role:role, 
              email: email
 
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
            };
        
      }
    
     });
    });
   });
 });
module.exports = router;

router.post('/Forgot-password', function (req, res) {
  const email = req.body.email
  User
      .findOne({
          where: {email: email}, //checking if the email address sent by client is present in the db(valid)
      })
      .then(function (user) {
          if (!user) {
            prepareResponse(res, 500, { success: false }, 'application/json');
          }
//           ResetPassword
//               .findOne({
//                   where: {username: user.username, status: 0},
//               }).then(function (resetPassword) {
//               if (resetPassword)
//                   resetPassword.destroy({
//                       where: {
//                         username: resetPassword.username
//                       }
//                   })
          
//               bcrypt.hash(token, null, null, function (err, hash) {
//                   ResetPassword.create({
//                       username: user.username,
//                       paasword: hash,
//                       expire: moment.utc().add(config.tokenExpiry, 'seconds'),
//                   }).then(function (item) {
//                       if (!item)
//                           return throwFailed(res, 'Oops problem in creating new password record')
//                       let mailOptions = {
//                           from: '"<jyothi pitta>" jyothi.pitta@ktree.us',
//                           to: user.email,
//                           subject: 'Reset your account password',
//                           html: '<h4><b>Reset Password</b></h4>' +
//                           '<p>To reset your password, complete this form:</p>' +
                          
//                           '<p>--Team</p>'
//                       }
//                       let mailSent = sendMail(mailOptions)
//                       if (mailSent) {
//                           return res.json({success: true, message: 'Check your mail to reset your password.'})
//                       } else {
//                           return throwFailed(error, 'Unable to send email.');
//                       }
//                   })
//               })
//           });
//       })
// })

//LOGOUT
// router.get('/logout', (req, res, next) => {
//       try {
//         res.clearCookie("jwt");
//         console.log("logout successfully");

//         prepareResponse(res, 200, response, 'application/json');

//       } catch (error) {
//         res.status(500).send(error);
//       }
//     });


  
