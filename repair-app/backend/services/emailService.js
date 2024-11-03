const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // or 'STARTTLS'
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendEmail = (to, subject, body) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(err);
        console.log(`Email sent: ${info.response}`);
    });
};