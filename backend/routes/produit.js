var express = require("express");
var router = express.Router();
const { Produit } = require("../models");
// const sequelize = require('sequelize');

// const sequelize = new Sequelize("daijara", "root", "", {
//   dialect: "mysql",
//   host: "localhost"
// });


const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};


//get ALL Produit

router.get("/getAll", function (req, res, next) {

  Produit.findAll({
    attributes: ["id", "libelle", "marque", "prix", "max_rating", "disponible", "createdAt", "updatedAt"],
    where: {
      is_deleted: 0
    }
  })
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

/* GET ALL PRODUCTS */
router.get('/getAllp', function (req, res) {
  let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
  const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;
  let startValue;
  let endValue;
  if (page > 0) {
    startValue = (page * limit) - limit;
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }
  database.table('produits as p')
    .join([
      {
        table: "categories as c",
        on: `c.id = p.id_categorie`
      }
    ])
    .withFields([
      'p.libelle ',
      'p.marque',
      'p.prix',
      'p.max_rating',
      'p.disponible',
      'p.image',
      'p.id'
    ])
    .slice(startValue, endValue)
    .sort({ id: .1 })
    .getAll()
    .then(prods => {
      if (prods.length > 0) {
        res.status(200).json({
          count: prods.length,
          products: prods
        });
      } else {
        res.json({ message: "No products found" });
      }
    })
    .catch(err => console.log(err));
});

//get Produit
router.get("/getPdt/:id", async function (req, res, next) {
  let id = req.params.id;

  const produit = await Produit.findByPk(id);

  prepareResponse(res, 200, produit, "application/json");
});
// create Produit
router.post("/createP", function (req, res, next) {
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
      let { id, libelle, marque, prix, max_rating, disponible } = req.body;
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




//UPDATE

router.put("/updateP/:id", function (req, res) {
  let id = req.params.id;
  Produit.findByPk(id,
    { attributes: ["id"] })
    .then((pdt) => {
      try {
        let { id, libelle, marque, prix, max_rating, disponible } = req.body;
        pdt.update({
          id,
          libelle,
          marque,
          prix,
          max_rating,
          disponible,
          updatedAt: new Date()
        })
          .then((pdt) =>
            prepareResponse(res, 200, { success: true }, "application/json")
          )
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
        prepareResponse(res, 500, { success: false }, "application/json");
      }
    });
});
//DELETE Produit

router.get("/delete/:id", function (req, res) {
  let id = req.params.id;
  Produit.findByPk(id, { attributes: ["id"] }).then((produits) => {
    try {
      produits.update({
        is_deleted: true
      });
      prepareResponse(res, 200, { success: true }, "application/json");
    } catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});

module.exports = router;
