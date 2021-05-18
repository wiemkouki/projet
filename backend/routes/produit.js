var express = require("express");
var router = express.Router();
const { Produit } = require("../models");

const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};

//get Produit
router.get("/getPdt/:id", async function (req, res, next) {
  let id = req.params.id;

  const produit = await Produit.findByPk(id);

  prepareResponse(res, 200, produit, "application/json");
});
// create Produit
router.post("/createP",  function (req, res, next) {
  Produit.findOne(
    {
    attributes: ['libelle'],
    where: {
      libelle: req.body.libelle,
    },
  }
  ).then((pdt) => {
    if (pdt) {
      const response = {
        success: false,
        message: "Produit already exist !",
      };
      prepareResponse(res, 500, response, "application/json");
    } else {
      let { id,libelle,marque,prix,max_rating,disponible,} = req.body;
  Produit.create({
    id,
      libelle,
        marque,
        prix,
        max_rating,
        disponible,
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
  Produit.findAll({ attributes: ["libelle", "marque", "prix", "max_rating","disponible","createdAt", "updatedAt"] })
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

router.put("/updateP/:id/", function (req, res) {
  let id=req.params.id;
  Produit.findByPk(id, {attributes:["id"]}).then((pdt) => {attributes: ['libelle','marque','prix','max_rating','disponible']
    try {
      let { libelle,marque,prix,max_rating,disponible } = req.body;
      pdt.update({
        libelle,
        marque,
        prix,
        max_rating,
        disponible,
        updatedAt: new Date() })
            .then((pdt) =>
              prepareResponse(res, 200, { success: true }, "application/json")
            )
            .catch((error) => console.log(error));
   }catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
  }
});
});
//DELETE Produit

router.post("/delete/:id", function (req, res) {
  let id = req.params.id;
  Produit.findByPk(id).then((produits) => {
    try {
      produits.update({
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
