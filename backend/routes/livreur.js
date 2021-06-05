var express = require("express");
var router = express.Router();
const { Livreurs } = require("../models");


const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};
//UPDATE
router.put("/up", function (req, res) {
  // let id = req.params.id;
  Livreurs.findByPk(id,
    { attributes: ["id"] }).then((livreur) => {
      try {
        let {  tel, adresse, cin,permis ,name} = req.body;
        livreur.update({
          tel,
          cin,
          adresse,
          permis,
          name,
          updatedAt: new Date(),
        })
        prepareResponse(res, 200, { success: true}, "application/json");
          } catch (error) {
        console.log(error);
        prepareResponse(res, 500, { success: false }, "application/json");
      }
    });
});


///get client
router.get("/get/:id", async function (req, res, next) {
  let id = req.params.id;

  const livreur = await Livreurs.findByPk(id, { attributes: ["id", "name", "tel", "adresse"] });

  prepareResponse(res, 200, livreur, "application/json");
});

//get ALL CLient

router.get("/getAll", function (req, res, next) {
  Livreurs.findAll({ attributes: ["id", "name", "tel", "adresse"] }
  )
    .then((livreur) => {
      prepareResponse(res, 200, livreur, "application/json");
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
