const { sign, verify } = require('../utils/jwt')
module.exports = async function (req, res, next) {
    token = req.session; 
    console.log(req)
    if (!token)
        return res.json('dang nhap lại');
    let checkRole = await verify(token);
    if (checkRole.data.role != 1)
        return res.json('ok');
    next();
}