// Nodemailer for user password reset
module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        ssl: true,
        tls: true,
        auth: {
            user: env('GMAIL_USER'),
            pass: env('GMAIL_PASS'),
        },
      },
      settings: {
        defaultFrom: '',
        defaultReplyTo: '',
      },
    },
  });