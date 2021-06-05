var express = require("express");
var router = express.Router();
var multer = require("multer");
var md5 = require("md5");
const fs = require("fs");
var path = require("path");
const baseUrl = "http://localhost:3000/file/";
const { doc_justificatifs, Livreurs } = require("../models");

const prepareResponse = (response, status, body, type) => {
  console.log(body);
  response.set("Content-Type", type);
  response.status(status).send(body);
};
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
router.get("/getList", function (req, res, next) {

  const directoryPath = __dirname + "/../uploads/";

  fs.readdir(directoryPath, function (err, doc_justificatifs) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    doc_justificatifs.forEach((file) => {
      fileInfos.push({
        libelle: file,
        url: baseUrl + file,
      });
    });

    return res.status(200).send(fileInfos);
  });

})
router.get("/downfile/:fileName", function (req, res, next) {
  const fileName = req.params.fileName;
  const directoryPath = __dirname + "/../uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
})




router.get("/getAll", function (req, res, next) {
  doc_justificatifs
  .findAll({
    attributes: ["id","libelle", "url_doc",
    "createdAt", "updatedAt"],
    where: {
      is_valide: 0
    }
    })
    .then((doc) => {
      prepareResponse(res, 200, doc, "application/json");
      console.log(doc);
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

//get doc by id
router.get("/getDoc/:id", async function (req, res, next) {
  let id = req.params.id;
  const doc = await doc_justificatifs.findByPk(id,
    { attributes: ["id","libelle", "url_doc", "createdAt",
    "updatedAt"]
 }
 );

  prepareResponse(res, 200, doc, "application/json");
});




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

router.put("/valide/:id", function (req, res) {
  let id = req.params.id;
      doc_justificatifs.findByPk(id, {
      attributes: ["id"],
      include: [{ model: Livreurs, attributes: ['id'], as: 'livreur'}],

    }).then((file) => {

      try {
      file.update({
        is_valide: true,
        updatedAt: new Date()
      });
      prepareResponse(res, 200, { success: true }, "application/json");
      }
      catch (error) {
      console.log(error);
      prepareResponse(res, 500, { success: false }, "application/json");
    }
  });
});





module.exports = router;
