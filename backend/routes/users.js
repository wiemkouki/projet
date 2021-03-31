var express = require('express');
var router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const storeToken = require('./auth/storeToken');



const saltRounds = 10;

const prepareResponse = (response, status, body, type) =>
{
    //response.set('Content-Type', type);
    response.status(status).send(body);
};

router.get('/', async function(req, res, next) 
{
  prepareResponse(res, 200, { success: true }, 'application/json');
});

/* GET users listing. */
router.get('/:id', async function(req, res, next) 
{
  let id = req.params.id;

  const user = await User.findByPk(id);

  prepareResponse(res, 200, user, 'application/json');
});




router.post('/login', async function(req, res, next) 
{
  let { username, password } = req.body;

  let user = await User.findOne({ where: { username: username } });

  bcrypt.compare(password, user.password, function(err, result) {
    if (result)
    {
      prepareResponse(res, 200, {success: true, user }, 'application/json');
    }
    else 
    {
      prepareResponse(res, 500, { success: false }, 'application/json');
    }
  });

//SIGNUP JWT
router.post('/signup', function(req, res, next) 
{
  let { username, password, role } = req.body;

  bcrypt.genSalt(saltRounds, function(err, salt) 
  {
    bcrypt.hash(password, salt, async function(err, hash) 
    {
        let new_user = await User.create({ username, 
          password: hash, 
          role, 
          createdAt: new Date(),
          updatedAt: new Date() });

        prepareResponse(res, 200, { success: true }, 'application/json');
    });
  });
});

});


//SIGN IN API WITH JWT USING COOKIES 
router.post('/signin', function(req, res, next)
{
    const { username, password } = req.body;

    User.findOne({ where: {username: username} }).then(user =>
    {
        if (user)
        {
            bcrypt.compare(password, user.password).then(result =>
            {
                if (result)
                {
                    jwt.sign({id: user.username, createdAt: user.createdAt}, process.env.SECRET,
                        {expiresIn: parseInt(process.env.EXPIRATION)},

                        async function (error, token)
                        {
                            if (error)
                            {
                                const response = {
                                    success: false,
                                    message: "Some internal server error has occured while attempting to proceed " +
                                        "with your request, please try again."
                                };

                                prepareResponse(res, 500, response, 'application/json');
                            }
                            else 
                            {
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

                            user.update({ lastSignIn: new Date()}, {})
                                .then(() =>
                                {
                                    prepareResponse(res, 200, response, 'application/json');
                                })
                                .catch(() =>
                                {
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
                else
                {
                    const response = {
                        success: false,
                        message: "The password provided is incorrect, please try again with another password."
                    };

                    prepareResponse(res, 500, response, 'application/json');
                }
            });
        }
        else
        {
            const response = {
                success: false,
                message: "No User was found with the provided username, please try again with another username."
            };

            prepareResponse(res, 500, response, 'application/json');
        }
    })
});


module.exports = router;
