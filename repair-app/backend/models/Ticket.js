const db = require('../config/db');

const Ticket = {
    create: (ticket, callback) => {
        const sql = 'INSERT INTO Tickets (user_id, phone_model_id, repair_type, description) VALUES (?, ?, ?, ?)';
        db.query(sql, [ticket.user_id, ticket.phone_model_id, ticket.repair_type, ticket.description], callback);
    },
    updateStatus: (ticketId, newStatus, callback) => {
        const sql = 'UPDATE Tickets SET status = ? WHERE id = ?';
        db.query(sql, [newStatus, ticketId], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM Tickets';
        db.query(sql, callback);
    }
};

module.exports = Ticket;