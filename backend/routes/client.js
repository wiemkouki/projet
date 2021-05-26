var express = require("express");
var router = express.Router();
const { Client } = require("../models");


var multer  = require('multer');
var md5 = require('md5');
var fs = require('fs');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/bmp': 'bmp'
};

var storage = multer.diskStorage({
  destination: function (req, file, cb)
  {
      fs.mkdir('./assets/profile/' + md5(req.body.id), {recursive: true}, (error) =>
      {
          cb(null,  './assets/profile/' + md5(req.body.id));
      });
  },
  filename: function (req, file, cb)
  {
      cb(null, md5(req.body.name) + "." + MIME_TYPES[file.mimetype]);
  }
});

var single = multer({ storage: storage }).single('image');



const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};

///get client
router.get("/getClient/:id", async function (req, res, next) {
  let id = req.params.id;

  const client = await Client.findByPk(id,{attributes:["id","nom","role"]});

  prepareResponse(res, 200, client, "application/json");
});

//get ALL CLient

router.get("/getAll", function (req, res, next) {
  Client.findAll({
    where: {
      is_deleted: 0
    }
  })
    .then((client) => {
      prepareResponse(res, 200, client, "application/json");
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

router.post("/updateC/:id", function (req, res, next) {
  single(req, res, function (err)
  {

    if (err instanceof multer.MulterError)
    {
        const response = {
            success: false,
            message: "Some internal server error has occured while attempting to proceed " +
                "with your request, please try again."
        };

        prepareResponse(res, 500, response, 'application/json');
    } else if (err)
    {
        const response = {
            success: false,
            message: "Some internal server error has occured while attempting to proceed " +
                "with your request, please try again."
        };

        prepareResponse(res, 500, response, 'application/json');
    }

  let id = req.params.id;
  console.log(req.body);
  Client.findByPk(id, {attributes:["id"]}).then((client) => {
    let { nom, prenom, tel, adresse } = req.body;
    client.update({
      nom,
      prenom,
      tel,
      adresse,
      avatar: md5(req.body.name) + "." + MIME_TYPES[req.file.mimetype],
      updatedAt: new Date(),
    })
      .then((client) => prepareResponse(res, 200, client, "application/json"))
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
});
});


//DELETE CLIENT

router.get("/delete/:id", function (req, res) {
  let id = req.params.id;

  Client.findByPk(id,{attributes:["id"]}).then((client) => {
    try {
      client.update({
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
