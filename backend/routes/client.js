var express = require('express');
var router = express.Router();
const { Client } = require('../models');


const prepareResponse = (response, status, body, type) =>
{
  console.log(body);
    response.set('Content-Type', type);
    response.status(status).send(body);
};

