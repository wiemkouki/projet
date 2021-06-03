var express = require("express");
var router = express.Router();
var multer = require("multer");
var md5 = require("md5");
const fs = require("fs");
var path = require("path");
const { doc_justificatifs, Livreurs } = require("../models");
const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};


var store = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, './uploads');
  },
  filename:function(req,file,cb){
      cb(null, file.originalname);
  }
});


var upload = multer({storage:store}).single('file');

router.post('/upload/:id', function(req,res,next){
  upload(req, res, function(err)
  {
      if (err)
      {
        console.log(err);

        return res.status(501).json({error:err});
      }

      console.log(req.file.originalname);

      doc_justificatifs
            .create({
              libelle:req.file.originalname,
              url_doc:md5(req.file.originalname),
              is_valide: false,
              createdAt: new Date(),
              updatedAt: new Date(),
              id_livreur: req.params.id
            });

      //do all database record saving activity
      return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
  });
});


router.post('/download', function(req,res,next){
  filepath = path.join(__dirname,'../uploads') +'/'+ req.body.filename;
  res.sendFile(filepath);
});







// var single = multer({ storage: storage }).single("image");

// router.post("/upload", function (req, res, next) {
//   single(req, res, function (err) {
//     if (err) {
//       return res.status(501).json({ error: err });
//     }


//     //do all database record saving activity
//     return res.json({
//       originalname: req.file.originalname,
//       uploadname: req.file.filename,
//     });
//   });
// });

// router.post("/download", function (req, res, next) {
//   filepath = path.join(__dirname, "../uploads") + "/" + req.body.filename;
//   res.sendFile(filepath);
// });

// router.post("/", function (req, res, next) {
//   single(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       const response = {
//         success: false,
//         message:
//           "Some internal server error has occured while attempting to proceed ",
//       };

//       prepareResponse(res, 500, response, "application/json");
//     } else if (err) {
//       const response = {
//         success: false,
//         message:
//           "Some internal server error has occured while attempting to proceed " +
//           "with your request, please try again.",
//       };

//       prepareResponse(res, 500, response, "application/json");
//     }

//     console.log(req.body);

//     let { id, libelle, url_doc } = req.body;
//     doc_justificatifs
//       .create({
//         id,
//         libelle,
//         url_doc,
//         is_valide: false,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       })
//       .then(() => {

//         doc_justificatifs
//           .findAll({
//             attributes: ["id", " libelle"],
//             order: [["createdAt", "DESC"]],
//             include: [{ model: Livreurs, attributes: ["id"], as: "livreur" }],
//           })
//           .then((docs) => {
//             prepareResponse(res, 200, docs, "application/json");
//           })
//           .catch((error) => {
//             const response = {
//               success: false,
//               message: "Some internal ",
//             };

//             prepareResponse(res, 500, response, "application/json");
//           });
//       });
//   });
// });

module.exports = router;
