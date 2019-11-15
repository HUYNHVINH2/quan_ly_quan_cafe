const route = require('express').Router();
const PRODUCT_MODEL = require('../models/Product');
const CATEGORY_MODEL = require('../models/Category');
const ROLE_ADMIN = require('../utils/checkRole');
const { uploadMulter } = require('../utils/config_multer');
const fs = require('fs');

route.get('/', async (req, res) => {
    let result = await PRODUCT_MODEL.getList();
    // console.log( { result });
    res.render('pages/menu-product', { result: result.data });
});


module.exports = route;