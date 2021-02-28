const express = require ("express");
const app = express();
const dotenv = require ('dotenv');
const cookieParser = require('cookie-parser')
const route = require('./routes/routes');

dotenv.config({ path: '.env'});

//Passa url encriptografada
app.use(express.urlencoded({ extended: false}));
//Passa json Body client
app.use(express.json())
app.use(cookieParser());

app.use(route)

module.exports = app