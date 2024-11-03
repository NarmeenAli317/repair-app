const Comment = require('../models/Comment');

exports.createComment = (req, res) => {
    const newComment = req.body;
    Comment.create(newComment, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
};

exports.getCommentsByTicketId = (req, res) => {
    const ticketId = req.params.ticketId;
    Comment.getByTicketId(ticketId, (err, comments) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(comments);
    });
};