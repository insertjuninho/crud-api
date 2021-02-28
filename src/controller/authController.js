const auth = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}){
   return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

exports.register = async (req, res) => {
    const { email, password} = req.body;
    const payload = { email, password};
    
    try {
        if(await auth.findOne({email})){
            return res.status(400).send({ error: 'User Already exists'})
        }
        const register = await auth.create(payload);
        register.password = undefined;

        return res.status(201).send({
            register, 
            token: generateToken({ id: register.id })
        });
    } catch (error) {
        return res.status(400).send({ error: 'Registration failed'});
    }
    
}

exports.auth = async (req, res) => {

    const { email, password} = req.body;

    const authe = await auth.findOne({ email }).select('+password');
   
    if (!authe) {
        return res.status(400).send({ error: 'User Not found'})
    }

    if (!await bcrypt.compare(password, authe.password)) {
        return res.status(400).send({error: 'Invalid password'})
    }

    authe.password = undefined;

    const token = jwt.sign({ id: authe.id }, authConfig.secret, {
        expiresIn: 86400,
    })


    res.send({
        authe, 
        token:generateToken({ id: authe.id })
    });
} 
