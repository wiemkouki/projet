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

app.use('/users', usersRouter);

module.exports = app;