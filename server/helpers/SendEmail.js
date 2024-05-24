const nodemailer = require("nodemailer");
require("dotenv").config()

async function SendEmail(input) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, 
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const { from, to, subject, text = '', html = '' } = input;

        const mailOptions = {
            from,
            to,
            subject,
            text,
            html,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
module.exports = SendEmail;
