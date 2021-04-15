var express = require("express");
var router = express.Router();
const { Client } = require("../models");

const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};
// Client list
router.get("/listClient", async function (req, res, next) {
  prepareResponse(res, 200, { success: true }, "application/json");
});
///create
router.post("/create", function (req, res, next) {
  Client.findOne({
    where: {
      email: req.body.email,
    },
  }).then((Client) => {
    if (Client) {
      const response = {
        success: false,
        message: "Email already exist !",
      };
      prepareResponse(res, 500, response, "application/json");
    } else {
      let { username, password, role, email } = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          let new_user = await Client.create({
            username,
            password: hash,
            role,
            email,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        });
      });
    }
  });
});
