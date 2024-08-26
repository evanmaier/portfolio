// @ts-nocheck
import { MailtrapClient } from 'mailtrap';
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

      const client = new MailtrapClient({ endpoint: process.env.ENDPOINT, token: process.env.TOKEN });


      const sender = {
        email: "portfolio@demomailtrap.com",
        name: `${name}`,
      };

      const recipients = [
        {
          email: "evanm413r@gmail.com",
        }
      ];

      client
        .send({
          from: sender,
          to: recipients,
          subject: `${name} from ${company} at ${email}`,
          text: `${message}`,
        })
        .then(console.log, console.error);
    },
  };