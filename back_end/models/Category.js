const CATEGORY_COLL = require('../database/Category-coll');//db    bang
module.exports = class Category extends CATEGORY_COLL {
    static insert(nameCategory, idCategory) {
        return new Promise(async resolve => {
            try {
                console.log(nameCategory, idCategory)
                let checkExist = await Category.findOne({ nameCategory });
                if (checkExist) return resolve ({ error: true, message: 'category_existed'})
                let newCategory = new Category({ nameCategory, idCategory });
                let saveCategory = await newCategory.save();
                console.log(saveCategory)
                if (!saveCategory) return resolve({ error: true, message: 'cannot_insert_category' });
                return  resolve({ error: false, data: newCategory });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }
 
    static getList() {
        return new Promise(async resolve => {
            try {
                let list = await Category.find();
                if (!list) return resolve({ error: true, message: 'cannot_get_list_category' });
                resolve({ error: false, data: list })
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }
    static getID(id) {
        return new Promise(async resolve => {
            try {
                let getID = await Category.findOne({ _id: id });
                if (!getID) return resolve({ error: true, message: 'cannot_get_id_category' });
                resolve({ error: false, data: getID });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }
    static updateID(id, idCategory, nameCategory) {
        return new Promise(async resolve => {
            try {
                let checkID = await Category.findById(id);
                if (!checkID) return resolve({ error: true, message: 'cannot_search_id_category' });
                let updateID = await Category.findByIdAndUpdate({ _id: id }, { idCategory, nameCategory }, { new: true });
                resolve({ error: false, data: updateID });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }
    static deleteID(id) {
        return new Promise(async resolve => {
            try {
                // let checkID = await Khoa.findById({ _id: id })
                // if (!checkID) return resolve({ error: true, message: 'cannot_search_id_khoa' });
                let deleteCategory = await Category.findByIdAndDelete(id);
                return resolve({ error: false, data: deleteCategory })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        });
    }
}