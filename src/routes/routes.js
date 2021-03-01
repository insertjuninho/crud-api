const express = require('express');
const app = require('express-router-group');
const router = express.Router();
const controller = require('../controller/indexController'); 
const auth = require('../controller/authController')
const authMiddleware = require('../middlewares/auth');

router.get("/", (req, res) => {
    res.send('SEJA BEM VINDO A REST CRUD API, VOCÊ ESTÁ USANDO A VERSÃO V:1.0.0 E NO FUTURO NÂO TÂO DISTANTE IRÁ TER NOVAS VERSÕES');
})
router.group("/public", router => {

    router.post('/register', auth.register);
    router.post('/auth', auth.auth);

});

router.group("/private", router => {

    router.post('/create',   controller.create);
    router.get('/full',     controller.full);
    router.put('/update',    controller.update);
    router.delete('/delete/:id', controller.delete);

}).use(authMiddleware)

module.exports = router
