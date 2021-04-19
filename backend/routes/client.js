var express = require("express");
var router = express.Router();
const { client } = require("../models");


const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};
// Client list
router.get("/listClient", async function (req, res, next) {
  prepareResponse(res, 200, { success: true }, "application/json");
});
///get client
router.get("/:id", async function (req, res, next) {
  let id = req.params.id;

  const client = await client.findByPk(id);

  prepareResponse(res, 200, client, "application/json");
});
// create client
router.post("/create", function (req, res, next) {
  client
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((client) => {
      if (client) {
        const response = {
          success: false,
          message: "client already exist !",
        };
        prepareResponse(res, 500, response, "application/json");
      } else {
        let { nom, prenom, tel, email, adresse } = req.body;
        client.create({
          nom,
          prenom,
          tel,
          email,
          adresse,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        const response = {
          success: true,

          message: "client created successfully.",
        };
        prepareResponse(res, 200, response, "application/json");
      }
    });
});
//get ALL CLient

router.get("/", function (req, res, next) {
  client
    .findAll({ attributes: ["nom", "prenom", "email", "tel"] })
    .then((client) => {
      prepareResponse(res, 200, client, { success: true }, "application/json");
    })
    .catch((error) => {
      const response = {
        success: false,
        message:
          "Some internal server error has occured while attempting to proceed " +
          "with your request, please try again.",
      };

      prepareResponse(res, 500, response, "application/json");
    });
});
//UPDATE

router.post("/updateC", function (req, res) {
  const id = req.body.id;
  console.log(req.body);
  client.findByPk(id).then((client) => {
    try {
      let { nom, prenom, tel, email, adresse } = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
          client
            .update({
              nom,
              prenom,
              tel,
              email,
              adresse,
              createdAt: new Date(),
              updatedAt: new Date(),
            })
            .then((client) =>
              prepareResponse(res, 200, { success: true }, "application/json")
            )
            .catch((error) => console.log(error));
        });
      });
    } catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});
//DELETE USER

router.delete("/delete/:id", function (req, res) {
  let id = req.params.id;
  client.findByPk(id).then((User) => {
    try {
      client.destroy(id)
      prepareResponse(res, 200, { success: true }, "application/json");
    } catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});
module.exports =router;
