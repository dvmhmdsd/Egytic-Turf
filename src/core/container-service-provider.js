// the service providers of the app
let serviceProviders = [];

// the resolved service providers
let resolvedServiceProviders = [];

// services that provided for all modules
let moduleServices = {};

/**
 * Register all service providers from Reactor
 *
 * @param {array} serviceProviderList
 */
function register(serviceProviderList) {
  serviceProviders = serviceProviderList;
}

/**
 * Start calling the providers
 */
function dispatch() {
  for (let serviceProvider of serviceProviders) {
    let provider = new serviceProvider(moduleServices);

    resolvedServiceProviders.push(provider);
  }
}

/**
 * Register all the internal service providers needed for the modules
 *
 * @param {array} internalserviceProviders
 */
function registerInternalServiceProviders(internalServiceProviders) {
  for (let serviceProvider of internalServiceProviders) {
    let { name, call } = serviceProvider.provider;

    moduleServices[name] = call;
  }
}

export default {
  register,
  dispatch,
  registerInternalServiceProviders
};
