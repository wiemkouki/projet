var express = require("express");
var router = express.Router();
const { Sous_cat } = require("../models");


const prepareResponse = (response, status, body, type) => {
  response.set("Content-Type", type);
  response.status(status).send(body);
};

//GET ONE
router.get("/getssCat/:id", async function (req, res, next) {

    let id = req.params.id;

    const cat = await Sous_cat.findByPk(id);

    prepareResponse(res, 200, cat, "application/json");
  });

  //GET ALL

  router.get("/getAll", function (req, res, next) {
    Sous_cat
    .findAll({ attributes: ["id", "nom_ss_cat"],
    include: [{ model: categorie , attributes: ['nom_cat'], as:'categorie'}],
    where: {
      is_deleted: 0
    } } )
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
  router.post("/create", function (req, res, next) {
    Sous_cat
      .findOne({
        attributes: ["nom_ss_cat"],
        where: {
          nom_ss_cat: req.body.nom_ss_cat,
        },
      })
      .then( function (ss_cat) {
        if (ss_cat) {
          const resp = {
            success: false,
            message: "SUBCATEGORIE already exist !",
          }
          prepareResponse(res, 500, resp ,"application/json");
        } else {
          let { nom_ss_cat} = req.body;
          Sous_cat.create({
            nom_ss_cat,
            is_deleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
            const response = {
            success: true,
            message: "SUBCATEGORIE created successfully.",
          }
          prepareResponse(res, 200, response, "application/json");
        }
      }).catch((error)=> console.log(error));
  });
  //UPDATE CATEGORIE
  router.put("/update/:id", function (req, res) {

    let id = req.params.id;
    Sous_cat.findByPk(id,
     {attributes:["id"]})
     .then((ss_cat) => {
      try {
        let { nom_ss_cat} = req.body;

        ss_cat
          .update({
            nom_ss_cat,
            updatedAt: new Date(),
          })
          .then((cat) => prepareResponse(res, 200, cat, "application/json"))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
        prepareResponse(res, 500, { success: false }, "application/json");
      }
    });
  });
  //DELETE CATEGORIE

  router.get("/delete/:id", function (req, res) {
    let id = req.params.id;
    Sous_cat.findByPk(id,
      {attributes:["id"]}).then((ss_cat) => {
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
