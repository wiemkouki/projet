var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const { doc_justificatifs } = require("../models");

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});


var upload = multer({storage:store}).single('file');

router.post('/upload', function(req,res,next){
    upload(req,res,function(err){
       
        if(err){
      return res.status(501).json({error:err});
            
        }
        // doc_justificatifs.create({
        //     id: parseInt(req.body.id),
        //     libelle:req.file.originalname,
        //     url_doc: md5(file.originalname) ,
        //     is_valide: false,
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // })
    
         
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
 
    });
});


router.post('/download', function(req,res,next){
    filepath = path.join(__dirname,'../uploads') +'/'+ req.body.filename;
    res.sendFile(filepath);
});


router.post('/new', function(req, res, next)
{
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
        }
        else if (err)
        {
            const response = {
                success: false,
                message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
            };

            prepareResponse(res, 500, response, 'application/json');
        }

        doc_justificatifs.create({
            id: parseInt(req.body.id),
            libelle:req.file.originalname,
            url_doc: md5(file.originalname) ,
            is_valide: false,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    
    })
});
module.exports = router;