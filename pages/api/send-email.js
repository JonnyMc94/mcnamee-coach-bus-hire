import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const senderEmail = process.env.EMAIL_USER;
const pass = process.env.APP_PASSWORD;
const emailTemplate = fs.readFileSync(path.join(__dirname, '../templates/email-template.html'), 'utf8');

export default async function handler(req, res) {

    console.log('Email:', process.env.EMAIL_USER);
    console.log('Password:', Boolean(process.env.APP_PASSWORD));

    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: senderEmail,
                pass: pass,
            },
        });

        const mailOptions = {
            from: senderEmail,
            to: senderEmail,
            subject: `Message from ${name}`,
            text: emailTemplate.replace('{{name}}', name).replace('{{email}}', email).replace('{{message}}', message),
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ success: false });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ success: true });
            }
        });
    }
}