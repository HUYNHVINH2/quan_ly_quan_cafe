const route = require('express').Router();
const ROLE_ADMIN = require('../utils/checkRole');
const CATEGORY_MODEL = require('../models/Category');

route.get('/', ROLE_ADMIN, async (req, res) => {
    res.render('pages/add-category', { alertError: false });
});

module.exports = route;