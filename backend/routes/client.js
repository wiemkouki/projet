var express = require('express');
var router = express.Router();
const { Client } = require('../models');


const prepareResponse = (response, status, body, type) =>
{
  console.log(body);
    response.set('Content-Type', type);
    response.status(status).send(body);
};
// Client list
router.get('/listClient', async function (req, res, next) {
  prepareResponse(res, 200, { success: true }, 'application/json');
});


// Create Client
router.post('/createClient', async function (req, res, next) 
{
  let {nom,prenom,tel,email,adresse} = req.body;
    
      let new_client =  Client.create({
        nom,
        prenom,
        tel,
        email,
        adresse,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const response = {
        success: true,
        token,
        message: "User created successfully."
      };

prepareResponse(res, 200, response, 'application/json');});















//      try {
//       const response = {
//         success: true,
//         token,
//         message: "User created successfully."
//       };

// prepareResponse(res, 200, response, 'application/json');
// }
// catch(error)
// {
// prepareResponse(res, 500, { success: false }, 'application/json');
// });