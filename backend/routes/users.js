var express = require('express');
var router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const storeToken = require('./auth/storeToken');
const emailCheck = require('email-check');


const saltRounds = 10;

const prepareResponse = (response, status, body, type) => {
  //response.set('Content-Type', type);
  response.status(status).send(body);
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
  const { username, password } = req.body;

  User.findOne({ where: { username: username } }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password).then(result => {
        if (result) {
          jwt.sign({ id: user.username, createdAt: user.createdAt }, process.env.SECRET,
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
    // emailCheck(email).then(() => {
      //   User.create(req.body).then(() => {
      //     res.send(req.body);
      //   })
      //     .catch((error) =>
      //       res.json({ serverErrorDublicateEmail: "The email address is already subscribed. Please try to use another one or simply Log in" }));
      // })
      // .catch((error) => {
      //   res.json({ serverErrorEmailExistence: "The email address doesn't exist. Please try the valid one" });
      // });


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
          
      // User.findOne({ where: { email: email } }).then(user => {
      //   if (user) {
          
      //       const response = {
      //         success: false,
      //         message: "email exits ! "
      //       }

      //       prepareResponse(res, 500, response, 'application/json');
      //   }
      //    else {
            let new_user =  User.create({
              username,
              password: hash,
              role,
              email,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          
            try {
              const token =  jwt.sign({ email: req.body.email }, process.env.SECRET,
                { expiresIn: parseInt(process.env.EXPIRATION) });

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


  
