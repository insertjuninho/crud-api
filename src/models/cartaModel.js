const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    titulo:{
        type: String,
        
    }, 
    conteudo: {
        type: String
    }
}, {
    
}, {
    collection:'carta'
});

const carta = mongoose.model('carta', DataSchema);
module.exports = carta
