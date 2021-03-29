const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

const app = express();

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



// app.use('/users', usersRouter);
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







module.exports = app;