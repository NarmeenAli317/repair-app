const Ticket = require('../models/Ticket');
const emailService = require('../services/emailService');

exports.createTicket = (req, res) => {
    const newTicket = req.body;
    Ticket.create(newTicket, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
        // Send email notification
        emailService.sendEmail(newTicket.user.email, 'New Ticket Created', `Your ticket has been created successfully.`);
    });
};

exports.updateTicketStatus = (req, res) => {
    const ticketId = req.params.id;
    const newStatus = req.body.status;
    Ticket.updateStatus(ticketId, newStatus, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
        // Send email notification
        emailService.sendEmail(result.user.email, 'Ticket Status Update', `Your ticket status has been updated to ${newStatus}`);
    });
};

exports.getAllTickets = (req, res) => {
    Ticket.getAll((err, tickets) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(tickets);
    });
};