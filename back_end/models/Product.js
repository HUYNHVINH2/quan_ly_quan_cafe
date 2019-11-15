const PRODUCT_MODEL = require('../database/Product-coll');
module.exports = class Product extends PRODUCT_MODEL {
    static insert({ nameProduct, idProduct, idCategory, avatar, price }) {
        return new Promise(async resolve => {
            try {
       
            } catch (error) {
            }
        });
    }
    static getList() {
        return new Promise(async resolve => {
            try {
       
            } catch (error) {
            }
        });
    }
  
}
