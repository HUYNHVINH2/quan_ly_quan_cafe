const route = require('express').Router();
const USER_MODEL = require('../models/User');
const PRODUCT_MODEL = require('../models/Product');


route.get('/dang-ky', async (req, res) => {
    res.render('pages/register', { alertErrorRegister: false });
})

route.post('/register', async (req, res) => {
    let { username, password } = req.body;
    let infoUser = await USER_MODEL.register(username, password);
    if (infoUser.error && infoUser.message == 'username_existed')
        return res.render('pages/register', { alertErrorRegister: true });
    return res.redirect('/user/dang-nhap');
});

route.get('/dang-nhap', async (req, res) => {
    res.render('pages/login', { alertErrorLogin: false });
})

// route.post('/login', async (req, res) => {
//     let { username, password } = req.body;
//     let infoUser = await USER_MODEL.signIn(username, password);
//     let result = await PRODUCT_MODEL.getList();
//     if (infoUser.error && infoUser.message == 'username_not_exist')
//         return res.render('pages/login', { alertErrorLogin: true })
//     res.cookie('token', infoUser.data.token, { maxAge: 900000 });
//     //return res.redirect('/san-pham/danh-sach');
//     return res.json({message:'login_success'})
// })
route.post('/login', async (req, res) => {
    let { username, password } = req.body;
    let infoUser = await USER_MODEL.signIn(username, password);
    let result = await PRODUCT_MODEL.getList(); 
    if (infoUser.error && infoUser.message == 'username_not_exist')
        return res.json({message:'login_fail'})
    // res.cookie('token', infoUser.data.token, { maxAge: 900000 });
    //req.session.token = await infoUser.data.token; //gán token đã tạo cho session
    //return res.redirect('/san-pham/danh-sach');
    return res.json({message:'login_success'})
})


module.exports = route;