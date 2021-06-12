var express = require("express");
var router = express.Router();
const { Paniers } = require("../models");
const verifyToken = require("./auth/verifyToken");
const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};
//ADD PRODUCT TO CART






module.exports = router;
