const db = require('../config/db');

const PhoneModel = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM PhoneModels';
        db.query(sql, callback);
    },
    // Add more phone model methods if needed
};

module.exports = PhoneModel;