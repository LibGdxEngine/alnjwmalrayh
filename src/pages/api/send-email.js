import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        const content = {
            to: 'alnjwmalrayh@gmail.com', // The email address to send to
            from: 'libgdxengine@gmail.com', // Your verified sender
            subject: `New Message From ${name}`,
            text: message,
            html: `<p>${message}</p>`,
        };

        try {
            await sgMail.send(content);
            res.status(200).send('Message sent successfully.');
        } catch (error) {
            console.error('Error sending email', error);
            res.status(400).send('Error sending email');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
