const db = require('../config/db');

const WatchModel = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM WatchModels';
        db.query(sql, callback);
    },
    // Add more watch model methods if needed
};

module.exports = WatchModel;