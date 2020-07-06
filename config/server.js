module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    path: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
  },
});
