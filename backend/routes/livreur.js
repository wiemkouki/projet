var express = require("express");
var router = express.Router();
const { Livreurs } = require("../models");
const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};
//UPDATE
router.put("/up/:id", function (req, res) {
  let id = req.params.id;
  console.log(req.body);
  Livreurs.findOne({attributes:["id","name", "tel", "adresse"],
  where: { id_user: req.params.id  } }).then((livreur)=>{
      try {
        let { name, tel, adresse} = req.body;
        livreur.update({
          name,
          tel,
          adresse,
        
          updatedAt: new Date(),
        })
        prepareResponse(res, 200, { success: true}, "application/json");
          } catch (error) {
        console.log(error);
        prepareResponse(res, 500, { success: false }, "application/json");
      }
    });
});


///get Livreurs
router.get("/get/:id", async function (req, res, next) {
  let id = req.params.id;

  const livreur = await Livreurs.findByPk(id, { attributes: ["id", "name", "tel", "adresse"] });

  prepareResponse(res, 200, livreur, "application/json");
});


//get ALL Livreurs

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
