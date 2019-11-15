const route = require('express').Router();
const USER_MODEL = require('../models/User');
const PRODUCT_MODEL = require('../models/Product');


route.get('/dang-ky', async (req, res) => {
    res.render('pages/register', { alertErrorRegister: false });
})


module.exports = route;