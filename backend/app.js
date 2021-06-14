const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sequelize = require('sequelize');
const http = require('http');
const cors = require('cors');
var app = express();

require('dotenv').config();


app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(cookieParser());

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
var clientRouter = require('./routes/client');
var categorieRouter = require('./routes/categorie');
var produitRouter = require('./routes/produit');
var sous_catRouter = require('./routes/sous_cat');
var fileRouter = require('./routes/file');
var cmdeRouter = require('./routes/cmde');
var livreurRouter = require('./routes/livreur');
var fiche_techRouter = require('./routes/fiche_tech');
var panierRouter = require('./routes/panier');
app.use('/users', usersRouter);
app.use('/client', clientRouter);
app.use('/categorie', categorieRouter);
app.use('/sous_cat', sous_catRouter);
app.use('/produit', produitRouter);
app.use('/file', fileRouter);
app.use('/cmde', cmdeRouter);
app.use('/livreur', livreurRouter);
// app.use('/doc_justificatifs', doc_justificatifsRouter);
app.use('/fiche_tech', fiche_techRouter);

app.use('/panier', panierRouter);

// app.use('/stock', stockRouter);
// app.use('/sup_admin', sup_adminRouter);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
