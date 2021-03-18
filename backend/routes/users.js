var express = require('express');
var router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const prepareResponse = (response, status, body, type) =>
{
  console.log(body);
    response.set('Content-Type', type);
    response.status(status).send(body);
};

/* GET users listing. */
router.get('/:id', async function(req, res, next) 
{
  let id = req.params.id;

  const user = await User.findByPk(id);

  prepareResponse(res, 200, user, 'application/json');
});

router.post('/', function(req, res, next) 
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
});

module.exports = router;
