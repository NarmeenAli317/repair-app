const db = require('../config/db');

const Comment = {
    create: (comment, callback) => {
        const sql = 'INSERT INTO Comments (ticket_id, comment) VALUES (?, ?)';
        db.query(sql, [comment.ticket_id, comment.comment], callback);
    },
    getByTicketId: (ticketId, callback) => {
        const sql = 'SELECT * FROM Comments WHERE ticket_id = ?';
        db.query(sql, [ticketId], callback);
    }
};

module.exports = Comment;