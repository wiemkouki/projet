const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const http = require('http');
var app = express();

require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConfig = require('./config/config');

const seq = new sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
        host: dbConfig.development.host,
        dialect: dbConfig.development.dialect
    });

seq.authenticate()
    .then(() => {
        console.log('You Have Been Connected Successfully to Daijara.');
    })
    .catch(err => {
        console.error('Unable to Connect to Database:', err);
    });

var usersRouter = require('./routes/users');

app.use('/users', usersRouter);
// app.use('/client', clientRouter);
// app.use('/admin', adminRouter);
// app.use('/categorie', categorieRouter);
// app.use('/commande', commandeRouter);
// app.use('/doc_justificatifs', doc_justificatifsRouter);
// app.use('/fiche_tech', fiche_techRouter);
// app.use('/livreur', livreurRouter);
// app.use('/panier', panierRouter);
// app.use('/produit', produitRouter);
// app.use('/sous_cat', sous_catRouter);
// app.use('/stock', stockRouter);
// app.use('/sup_admin', sup_adminRouter);




//////////////
// const nodemailer = require('nodemailer');
// const hbs = require('express-handlebars');
// const log = console.log;

// // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD  
//     },

// tls: {
//   rejectUnauthorized: false
// }
// });

// // Step 2
// transporter.use('compile', hbs({
//     viewEngine: 'express-handlebars',
//     viewPath: './views/'
// }));


// // Step 3
// let mailOptions = {
//     from: 'rahma.kalai0@gmail.com', // TODO: email sender
//     to: 'rahma.elkalai01@gmail.com', // TODO: email receiver
//     subject: 'Email confirmation to login',
//     text: 'Wooohooo it works!!',
//     template: 'mail',
//     context: {
//         name: 'Daijara'
//     } // send extra values to template
// };

// // Step 4
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs' , err);
//     }
//     return log('Email sent!!!');
// });




















//app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);