const db = require('../config/db');

const User = {
    create: (user, callback) => {
        const sql = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [user.name, user.email, user.password], callback);
    },
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM Users WHERE email = ?';
        db.query(sql, [email], callback);
    },
    // Add more user methods if needed
};

module.exports = User;