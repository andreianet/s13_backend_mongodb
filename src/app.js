const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/repository')
database.connect()

const musicas = require('./routes/musicas-routes');

app.use(cors());
app.use(express.json());
app.use('/', musicas);

module.exports = app;

//Esse erro ocorre quando falta a linha 14!! 
//TypeError: app.listen is not a function
