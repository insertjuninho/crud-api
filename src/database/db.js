 const mongo = require('mongoose')
 require("dotenv").config();

 mongo.connect('mongodb+srv://alexande:junior26562854@cluster0.d3uab.mongodb.net/carta-natal?retryWrites=true&w=majority',  {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 });
 mongo.Promise = global.Promise

module.exports = mongo;
