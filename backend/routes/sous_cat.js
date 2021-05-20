var express = require("express");
var router = express.Router();
const { sous_cat } = require("../models");




//GET ONE
router.get("/getssCat/:id", async function (req, res, next) {

    let id = req.params.id;
  
    const cat = await sous_cat.findByPk(id);
  
    prepareResponse(res, 200, cat, "application/json");
  });
  
  //GET ALL
  
  router.get("/getAllssC", function (req, res, next) {
    sous_cat
    .findAll({ attributes: ["id", "nom_cat", "famille"] })
      .then((ss_cat) => {
        prepareResponse(res, 200, ss_cat, "application/json");
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
  router.post("/createCat", function (req, res, next) {
    sous_cat
      .findOne({
        attributes: ["nom_cat"],
        where: {
          nom_cat: req.body.nom_cat,
        },
      })
      .then( function (ss_cat) {
        if (ss_cat) {
          const resp = {
            success: false,
            message: "CATEGORIE already exist !",
          }
          prepareResponse(res, 500, resp ,"application/json");
        } else {
          let { nom_cat, famille} = req.body;
          sous_cat.create({
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
  router.post("/updatessC/:id", function (req, res) {
  
    let id = req.params.id;
    console.log(req.body);
    sous_cat.findByPk(id).then((ss_cat) => {
      try {
        let { nom_cat, famille } = req.body;
  
        ss_cat
          .update({
            nom_cat,
            famille,
            updatedAt: new Date(),
          })
          .then((cat) => prepareResponse(res, 200, cat, "application/json"))
          .catch(error);
      } catch (error) {
        console.log(error);
        prepareResponse(res, 500, { success: false }, "application/json");
      }
    });
  });
  //DELETE CATEGORIE
  
  router.get("/delete/:id", function (req, res) {
    let id = req.params.id;
    sous_cat.findByPk(id).then((ss_cat) => {
      try {
        ss_cat.update({
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
