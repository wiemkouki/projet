var express = require("express");
var router = express.Router();
var multer = require("multer");
const verifyToken = require("./auth/verifyToken");
const {
  Produit,
  fiche_teches,
  images_produit,
  categorie,
  Admin
} = require("../models");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/bmp": "bmp",
};

const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/assets/uploads/image_produit");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "." + MIME_TYPES[file.mimetype]);
  },
});

var images = multer({ storage: storage }).single("file");
//get Product by ID

router.get("/getPdt/:id", async function (req, res, next) {
  let id = req.params.id;
  const produit = await Produit.findByPk(id, {
    attributes: [
      "id",
      "libelle",
      "marque",
      "prix",
      "max_rating",
      "description",
      "createdAt",
      "updatedAt",
    ],
    include: [{ model: categorie, attributes: ["id"], as: "categorie" }],
  });

  prepareResponse(res, 200, produit, "application/json");
});

//get ALL products
router.get("/getAll", function (req, res, next) {
  Produit.findAll({
    attributes: [
      "id",
      "libelle",
      "marque",
      "prix",
      "max_rating",
      "description",
      "createdAt",
      "updatedAt",
    ],
    where: {
      is_deleted: 0,
    },
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

//GET PRODUCTS BY Category
router.get("/getP/:id",  function (req, res, next) {
  let id = req.params.id;
  Admin.findOne(

         {attributes:["id"],
         where :
         {id_user:id}

   }).then(async(admin) => {

 const produit= await Produit.findAll({
    attributes: [
      "id",
      "libelle",
      "marque",
      "prix",
      "max_rating",
      "description",

    ],
    include: [
      {
        model: categorie,
        attributes: ["nom_cat"],
        as: "categorie",

      },
    ],
    where: {
      is_deleted: 0,
      id_admin:admin.id
    }
  });

  prepareResponse(res, 200, produit, "application/json");
});
});
// create Produit
router.post("/createP/:id", verifyToken,function (req, res, next) {
  Admin.findOne(

    {attributes:["id","nom_boutique","tel"],
    where :
    {id_user:req.params.id}

}).then((admin) => {

  categorie.findOne({attributes:["id","nom_cat", "famille"],
       where: { id: req.body.id  } }).then((categorie)=>{
  Produit.findOne({
    attributes: ["libelle"],
    where: {
      libelle: req.body.libelle,
      id_categorie:categorie.id
    },
  })
    .then(async (pdt) => {
      if (pdt) {
        const response = {
          success: false,
          message: "Produit already exist !",
        };

        prepareResponse(res, 500, response, "application/json");

      } else {
        let {  libelle, marque, prix, max_rating, description, quantite } = req.body;

        const produit = await Produit.create({
          libelle,
          marque,
          prix,
          max_rating,
          description,
          quantite,
          id_categorie:categorie.id,
          id_admin:admin.id,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        fiche_teches.create({
          id_produit: produit.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        const response = {
          success: true,
          message: "Produit created successfully.",
        };
        prepareResponse(res, 200, response, "application/json");
      }
    })
  })
})
    .catch((error) => console.log(error));
});

// Ajouter IMAGES PRODUITS
router.post("/uploadPic/:id",verifyToken, function (req, res, next) {
  images(req, res, async function (err) {
    if (err) {
      console.log(err);
      return res.status(501).json({ error: err });
    } else {
      images_produit.create({
        url: req.file.originalname + "." + MIME_TYPES[req.file.mimetype],
        is_deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produit: req.params.id,
      });
      // })
      //do all database record saving activity
      return res.json({
        originalname: req.file.originalname,
        uploadname: req.file.filename,
      });
    }
  });
});

//UPDATE

router.put("/updateP/:id", verifyToken,function (req, res) {
  let id = req.params.id;
  Produit.findByPk(id, { attributes: ["id"] }).then((pdt) => {
    try {
      let { id, libelle, marque, prix, max_rating, description } = req.body;
      pdt
        .update({
          id,
          libelle,
          marque,
          prix,
          max_rating,
          description,
          updatedAt: new Date(),
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

router.get("/delete/:id", verifyToken,function (req, res) {
  let id = req.params.id;
  Produit.findByPk(id, { attributes: ["id"] }).then((produits) => {
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
