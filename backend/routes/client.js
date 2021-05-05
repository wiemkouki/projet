var express = require("express");
var router = express.Router();
const { Client } = require("../models");

const saltRounds = 10;
const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};

///get client
router.get("/getClient/:id", async function (req, res, next) {
  let id = req.params.id;

  const client = await Client.findByPk(id);

  prepareResponse(res, 200, client, "application/json");
});
// create client
router.post("/create", function (req, res, next) {
  Client.findOne({
    attributes: ["nom"],
    where: {
      nom: req.body.nom,
    },
  })
    .then( async function (client) {
      if (client) {
        const response = {
          success: false,
          message: "client already exist !",
        };
        prepareResponse(res, 500, response, "application/json");
      } else {
        let { nom, prenom, tel, email, adresse, id_user, id_panier } = req.body;
        let new_clt = await Client.create({
          nom,
          prenom,
          tel,
          email,
          adresse,
          id_panier,
          id_user,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        const response = {
          success: true,
          message: "client created successfully.",
        };
        prepareResponse(res, 200, response, "application/json");
      }
    })
    .catch((error) => console.log(error));
});
//get ALL CLient

router.get("/getAll", function (req, res, next) {
  Client.findAll({ attributes: ["nom", "prenom", "email", "tel"] })
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

router.post("/updateC/:id", function (req, res) {
  let id = req.params.id;
  console.log(req.body);
  Client.findByPk(id).then((client) => {
    let { nom, prenom, tel, adresse } = req.body;
    client.update({
      nom,
      prenom,
      tel,
      adresse,
      updatedAt: new Date(),
    })
      .then((client) => prepareResponse(res, 200, client, "application/json"))
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
});

// router.post("/updateC", function (req, res) {
//   const id = req.body.id;
//   console.log(req.body);
//   Client.findByPk(id).then((clt) => {
//     try {
//       let { password, role, email } = req.body;

//       clt.update({
//         password: hash,
//         role,
//         email,

//         createdAt: new Date(),
//         updatedAt: new Date(),
//       })
//         .then((clt) =>
//           prepareResponse(res, 200, { success: true }, "application/json")
//         )
//         .catch((error) => console.log(error));
//     } catch (error) {
//       console.log(error);
//       prepareResponse(res, 500, { success: false }, "application/json");
//     }
//   });
// });

//DELETE CLIENT

router.post("/delete/:id", function (req, res) {
  let id = req.params.id;
  client.findByPk(id).then((User) => {
    try {
      client.update({
        is_deleted: true,
      });
      prepareResponse(res, 200, { success: true }, "application/json");
    } catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});
module.exports = router;
