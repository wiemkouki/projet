var express = require("express");
var router = express.Router();
const { Produit } = require("../models");

const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};

///get Produit
// router.get("/getPdt/:id", async function (req, res, next) {
//   let id = req.params.id;

//   const produit = await Produit.findByPk(id);

//   prepareResponse(res, 200, produit, "application/json");
// });
// create Produit
router.post("/createP", function (req, res, next) {
  Produit.findOne({
    attributes: ["libelle"],
    where: {
      libelle: req.body.libelle,
    },
  }).then((produit) => {
    if (produit) {
      const response = {
        success: false,
        message: "Produit already exist !",
      };
      prepareResponse(res, 500, response, "application/json");
    } else {
      let { libelle,marque,prix,max_rating,disponible,} = req.body;
      Produit.create({
        libelle,
        marque,
        prix,
        max_rating,
        disponible,
        id_fiche_tech,
        is_deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const response = {
        success: true,
        message: "Produit created successfully.",
      };
      prepareResponse(res, 200, response, "application/json");
    }
  });
});
//get ALL Produit

router.get("/getAll", function (req, res, next) {
  Produits.findAll({ attributes: ["nom", "prenom", "email", "tel","createdAt", "updatedAt"] })
    .then((produit) => {
      prepareResponse(res, 200, produit, "application/json");
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
  Produit.findByPk(id).then((Produit) => {
    try {
      let { nom, prenom, tel, email, adresse } = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
          Produit.update({
            nom,
            prenom,
            tel,
            email,
            adresse,
            updatedAt: new Date(),
          })
            .then((Produit) =>
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
//DELETE Produit

router.post("/delete/:id", function (req, res) {
  let id = req.params.id;
  Produit.findByPk(id).then((User) => {
    try {
      Produit.update({
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
