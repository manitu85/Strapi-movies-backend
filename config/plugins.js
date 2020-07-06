module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env('manitux'),
      api_key: env('997593782972121'),
      api_secret: env('frpZY5Y32ppRkfEAHr6_7jvauLE')
    }
  },
});



