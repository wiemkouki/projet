var express = require('express');
var router = express.Router();
const { fiche_teches } = require("../models");

const prepareResponse = (response, status, body, type) => {
    console.log(body);
    response.set("Content-Type", type);
    response.status(status).send(body);
  };

  router.put("/up/:id", function (req, res) {
    let id = req.params.id;
    console.log(req.body);
    fiche_teches.findByPk(id,
      { attributes: ["id"] }).
      then((fiche) => {
        try {
          let { caract_principale,
            taille,
            couleur,
            modele,
            matiere,} = req.body;

          fiche.update({
            caract_principale,
            taille,
            couleur,
            modele,
            matiere,
            updatedAt: new Date(),
          })
          prepareResponse(res, 200, { success: true}, "application/json");
            } catch (error) {
          console.log(error);
          prepareResponse(res, 500, { success: false }, "application/json");
        }
      });
  });
module.exports = router;
