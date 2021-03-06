/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'picks-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authenticationRoute: 'login.new',
    authorizer: 'simple-auth-authorizer:devise'
  };

  ENV['simple-auth-devise'] = {
    identificationAttributeName: 'email'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:3000/",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    };

    ENV.API_HOST = 'http://localhost:3000';
    ENV['simple-auth-devise'].serverTokenEndpoint = 'http://localhost:3000/users/sign_in';
    ENV['simple-auth'].crossOriginWhitelist = ['http://localhost:3000'];
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://picks-api.diacode.com/",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    };

    ENV.API_HOST = 'https://picks-api.diacode.com';
    ENV['simple-auth-devise'].serverTokenEndpoint = 'https://picks-api.diacode.com/users/sign_in';
    ENV['simple-auth'].crossOriginWhitelist = ['https://picks-api.diacode.com'];
  }

  return ENV;
};
