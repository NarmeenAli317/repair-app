const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    User.create(newUser, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, user) => {
        if (err || !user) return res.status(401).send('User not found');
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).send('Invalid password');
        
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};