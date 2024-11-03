const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);
router.get('/:ticketId', commentController.getCommentsByTicketId);

module.exports = router;