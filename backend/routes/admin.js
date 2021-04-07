var express = require('express');
var router = express.Router();
const { Admin } = require('../models');



const prepareResponse = (response, status, body, type) =>
{
  console.log(body);
    response.set('Content-Type', type);
    response.status(status).send(body);
};

// Admins list
router.get('/listAdmin', async function (req, res, next) {
  prepareResponse(res, 200, { success: true }, 'application/json');
});
