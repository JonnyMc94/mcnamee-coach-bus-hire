import nodemailer from 'nodemailer';

const senderEmail = process.env.EMAIL;
const pass = process.env.APP_PASSWORD;

export default async function handler(req, res) {
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
            to: email,
            subject: `Message from ${name}`,
            text: message
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