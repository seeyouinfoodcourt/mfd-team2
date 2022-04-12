// Nodemailer for user password reset
module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    },
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