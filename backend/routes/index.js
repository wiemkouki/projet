var express = require('express');
var router = express.Router();
const app = require('./app');
const app = express();
const verifySignup = require("./verifySignup");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
module.exports = app;
module.exports = verifySignup;