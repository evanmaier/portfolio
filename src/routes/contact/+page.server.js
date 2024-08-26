// @ts-nocheck
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const actions = {
    default: async ({ request }) => {
      // Get form data
      const formData = await request.formData();
      const email = formData.get('email');
      const name = formData.get('name');
      const company = formData.get('company');
      const message = formData.get('message');

      // Create a transporter object
      const transporter = nodemailer.createTransport({
        host: 'live.smtp.mailtrap.io',
        port: 587,
        secure: false, // use SSL
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      });

      // Configure the mailoptions object
      const mailOptions = {
        from: 'portfolio@demomailtrap.com',
        to: 'evanm413r@gmail.com',
        subject: `${name} from ${company} at ${email}`,
        text: `${message}`
      };

      // Send the email
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    },
  };