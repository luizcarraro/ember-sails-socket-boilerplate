/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    hostUrl: 'http://localhost:1337',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      SAILS_LOG_LEVEL: 'debug',
      emberDataSails: {
        // host: '//localhost:1337'
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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

  }

  ENV['ember-simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'simple-auth-authorizer:token',
    localStorageKey: 'isap_session',
    crossOriginWhitelist: [ENV.hostUrl]
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.hostUrl + '/auths/login',
    authorizationPrefix: 'JWT ',
    identificationField: 'email',
    passwordField: 'password',
    authorizationHeaderName: 'X-Auth',
    tokenPropertyName: 'token',
    // authorizationHeaderName: 'access_token',
    // headers: {}
  };

  return ENV;
};
