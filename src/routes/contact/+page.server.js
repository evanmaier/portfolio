// @ts-nocheck
import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(SENDGRID_API_KEY)

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const name = formData.get('name');
        const company = formData.get('company');
        const message = formData.get('message');
        const msg = {
            to: 'evanm413r@gmail.com',
            from: 'evantmaier@gmail.com',
            subject:`${name} from ${company} at ${email}`,
            text: `${message}`,
        }
        sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    },
  };