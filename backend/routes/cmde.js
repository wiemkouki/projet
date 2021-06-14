var express = require('express');
var router = express.Router();
const { Commande } = require("../models");
const verifyToken = require("./auth/verifyToken");
const prepareResponse = (response, status, body, type) => {
    console.log(body);
    response.set("Content-Type", type);
    response.status(status).send(body);
  };


//getAll

  router.get("/getAll", function (req, res, next) {
    Commande.findAll({ attributes: ["id","prix",
    "date", "quantite", "status","adresse_livraison",
    "createdAt", "updatedAt"],
    where: {
      is_deleted: 0
    } }


    )
      .then((commande) => {
        prepareResponse(res, 200, commande, "application/json");
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











module.exports = router;
