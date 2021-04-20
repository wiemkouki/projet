var express = require('express');
var router = express.Router();
const { Categorie } = require('../models');


const prepareResponse = (response, status, body, type) =>
{
  console.log(body);
    response.set('Content-Type', type);
    response.status(status).send(body);
};


//GET ALL CATEGORIES

router.get('/getAll', function(req, res, next)
{
  Categorie.findAll({ attributes: ['id','nom_cat', 'famille'] })
        .then(categories =>
        {
            prepareResponse(res, 200, categories, 'application/json');
        })
        .catch(error =>
        {
            const response = {
                success: false,
                message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
            };

            prepareResponse(res, 500, response, 'application/json');
        })
});














module.exports = router;