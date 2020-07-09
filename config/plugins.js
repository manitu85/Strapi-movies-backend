module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production') {
    return {
      upload: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env('dk0sl45vl'),
          api_key: env('384523822864479'),
          api_secret: env('q10ySn1dnN3UrFR1vDMqa6tI63E')
        }
      },
    }
  } else {
    return {}
  }
};


// cloud_name: env('manitux'),
// api_key: env('997593782972121'),
// api_secret: env('frpZY5Y32ppRkfEAHr6_7jvauLE')


