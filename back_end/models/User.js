const USER = require('../database/User-coll');
const { hash, compare } = require('bcrypt');
const { sign, verify } = require('../utils/jwt');
module.exports = class user {
    static register(username, password) {
        return new Promise(async resolve => {
            try {
           
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }

    static signIn(username, password) {
        return new Promise(async resolve => {
            try {
             
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }

}