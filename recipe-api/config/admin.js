module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e075c1feafc858e06523d085b51181a4'),
  },
});
