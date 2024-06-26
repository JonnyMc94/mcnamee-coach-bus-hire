import nodemailer from 'nodemailer';
import emailTemplate from 'raw-loader!../../templates/email.html';

const senderEmail = process.env.EMAIL_USER;
const pass = process.env.APP_PASSWORD;

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

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
            html: emailTemplate.replace('{{name}}', name).replace('{{email}}', email).replace('{{subject}}', subject).replace('{{message}}', message),
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