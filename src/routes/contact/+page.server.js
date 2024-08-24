// @ts-nocheck
import sgMail from "@sendgrid/mail";
sgMail.setApiKey('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');

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