var express = require("express");
var router = express.Router();
const { categorie} = require("../models");

//GET ONE
router.get("/getCat/:id", async function (req, res, next) {
  let id = req.params.id;

  const categorie = await categorie.findByPk(id);

  prepareResponse(res, 200, categorie, "application/json");
});

//GET ALL

router.get("/getAll", function (req, res, next) {
  categorie
  .findAll({ attributes: ["id", "nom_cat", "famille","createdAt", "updatedAt"] })
    .then((categorie) => {
      prepareResponse(res, 200, categorie, "application/json");
    })
    .catch((error) => {
      const response = {
        success: false,
        message:
          "Some internal server error has occured while attempting to proceed " +
          "with your request, please try again.",
      };

      // prepareResponse(res, 500, response, "application/json");
    });
});

//CREATE CATEGORIE
router.post("/createCat", function (req, res, next) {
  categorie
    .findOne({
      attributes: ["nom_cat"],
      where: {
        nom_cat: req.body.nom_cat,
      },
    })
    .then(async function (categorie) {
      if (categorie) {
        const response = {
          success: false,
          message: "CATEGORIE already exist !",
        };
        prepareResponse(res, 500, response, "application/json");
      } else {
        // let { nom_cat, famille} = req.body;
        let new_cat = await categorie.create({
          nom_cat,
          famille,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });

          const response = {
          success: true,
          message: "CATEGORIE created successfully.",
        };
        prepareResponse(res, 200, response, "application/json");
      }
    }).catch((error) => console.log(error));
});
//UPDATE CATEGORIE
router.post("/updateC", function (req, res) {
  const id = req.body.id;
  console.log(req.body);
  categorie.findByPk(id).then((categorie) => {
    try {
      let { nom_cat, famille } = req.body;

      categorie.update({
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
  categorie.findByPk(id).then((categorie) => {
    try {
      categorie.update({
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
