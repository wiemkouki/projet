var express = require("express");
var router = express.Router();
const { Categorie } = require("../models");

//GET ONE
router.get("/getCat/:id", async function (req, res, next) {
  let id = req.params.id;

  const categorie = await Categorie.findByPk(id);

  prepareResponse(res, 200, categorie, "application/json");
});

//GET ALL

router.get("/getAll", function (req, res, next) {
  Categorie.findAll({ attributes: ["id", "nom_cat", "famille"] })
    .then((cat) => {
      prepareResponse(res, 200, cat, "application/json");
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

//CREATE CATEGORIE
router.post("/create", function (req, res, next) {
  Categorie.findAll({ attributes: ["id", "nom_cat", "famille"] })

    .findOne({
      attributes: ["nom_cat"],
      where: {
        nom_cat: req.body.nom_cat,
      },
    })
    .then((categorie) => {
      if (categorie) {
        const response = {
          success: false,
          message: "CATEGORIE already exist !",
        };
        prepareResponse(res, 500, response, "application/json");
      } else {
        let { nom_cat, famille, id_sous_cat } = req.body;
        Categorie.create({
          nom_cat,
          famille,
          id_sous_cat,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        const response = {
          success: true,

          message: "CATEGORIE created successfully.",
        };
        prepareResponse(res, 200, response, "application/json");
      }
    });
});
//UPDATE CATEGORIE
router.post("/updateC", function (req, res) {
  const id = req.body.id;
  console.log(req.body);
  Categorie.findByPk(id).then((Categorie) => {
    try {
      let { nom_cat, famille } = req.body;

      Categorie.update({
        nom_cat,
        famille,
        updatedAt: new Date(),
      })
        .then((categorie) =>
          prepareResponse(res, 200, categorie, "application/json")
        )
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});
//DELETE CATEGORIE

router.post("/delete/:id", function (req, res) {
  let id = req.params.id;
  Categorie.findByPk(id).then((Categorie) => {
    try {
      Categorie.update({
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
