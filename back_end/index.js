//thuw vien cung phuong thuc viet web
const express = require('express');//get post put req , res
const app = express();
// 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var cors = require('cors')
const USER_ROUTER = require('./routes/user');
const PRODUCT_ROUTER = require('./routes/product');
const CATEGORY_ROUTER = require('./routes/category');
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cookieParser());

app.use('/nguoi-dung', USER_ROUTER);
app.use('/san-pham', PRODUCT_ROUTER);
app.use('/danh-muc', CATEGORY_ROUTER);


app.get('/', (req, res) => {
    res.render('pages/login');
});



const uri = 'mongodb://localhost/CaffeDB';
const PORT = process.env.PORT || 5000;


mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log('Server started at port 5000'));
});