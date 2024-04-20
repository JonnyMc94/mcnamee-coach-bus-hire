import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.APP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};