var express = require("express");
var router = express.Router();
const { Client } = require("../models");
const verifyToken = require("./auth/verifyToken");
const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};


///get client
router.get("/getClient/:id", async function (req, res, next) {
  let id = req.params.id;

  const client = await Client.findByPk(id, { attributes: ["id", "name", "tel", "adresse"] });

  prepareResponse(res, 200, client, "application/json");
});

//get ALL CLient

router.get("/getAll", function (req, res, next) {
  Client.findAll({
    where: {
      is_deleted: 0
    }
  })
    .then((client) => {
      prepareResponse(res, 200, client, "application/json");
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
//UPDATE_Client

router.put("/updateC/:id",verifyToken, function (req, res, next) {
  let id = req.params.id;
  console.log(req.body);
  Client.findByPk(id, { attributes: ["id"] }).then((client) => {
    let { name, tel, adresse } = req.body;
    client.update({
      name,
      tel,
      adresse,

      updatedAt: new Date(),
    })
      .then((client) => prepareResponse(res, 200, { success: true }, "application/json"))
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

//DELETE CLIENT

router.get("/delete/:id", verifyToken,function (req, res) {
  let id = req.params.id;

  Client.findByPk(id, { attributes: ["id"] }).then((client) => {
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
