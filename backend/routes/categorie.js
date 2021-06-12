var express = require("express");
var router = express.Router();
const { categorie  } = require("../models");
const bodyParser = require ('body-parser');
const verifyToken = require("./auth/verifyToken");

const prepareResponse = (response, status, body, type) => {
  response.set("Content-Type", type);
  response.status(status).send(body);
};
//GET ONE
router.get("/getCat/:id", async function (req, res, next) {

  let id = req.params.id;

  const cat = await categorie.findByPk(id, {attributes: [ "nom_cat", "famille","createdAt","updatedAt"]} );

  prepareResponse(res, 200, cat, "application/json");
});


//GET ALL

router.get("/getAllC", function (req, res, next) {
  categorie
  .findAll({ attributes: ["id", "nom_cat", "famille"],
  where: {
    is_deleted: 0
  } }

)
    .then((categories) => {
      prepareResponse(res, 200, categories, "application/json");
    })
    .catch((error) => {
      const response = {
        success: false,
        message:
          "Some internal server error has occured while attempting to proceed " +
          "with your request, please try again.",
      };
    });
});

//CREATE CATEGORIE
router.post("/createCat",verifyToken, function (req, res, next) {
  categorie
    .findOne({
      attributes: ["nom_cat"],
      where: {
        nom_cat: req.body.nom_cat,
      },
    })
    .then( function (cat) {
      if (cat) {
        const resp = {
          success: false,
          message: "CATEGORIE already exist !",
        }
        prepareResponse(res, 500, resp ,"application/json");
      } else {
        let { nom_cat, famille} = req.body;
        categorie.create({
          nom_cat,
          famille,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
          const response = {
          success: true,
          message: "CATEGORIE created successfully.",
        }
        prepareResponse(res, 200, response, "application/json");
      }
    }).catch((error)=> console.log(error));
});
//UPDATE CATEGORIE
router.put("/updateC/:id",verifyToken, function (req, res) {

  let id = req.params.id;

  categorie.findByPk(id,
    {attributes:["id"]})
    .then((cat) => {
    try {
      let { nom_cat, famille } = req.body;
      cat.update({
          nom_cat,
          famille,
          updatedAt: new Date(),
        })
        .then((cat) => prepareResponse(res, 200,{ success: true }, "application/json"))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});
//DELETE CATEGORIE

router.get("/delete/:id",verifyToken, function (req, res) {
  let id = req.params.id;
  categorie.findByPk(id
    ,{attributes:["id"]}).then((cat) => {
    try {
      cat.update({
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
