import * as serviceWorker from "./serviceWorker";
import containerServiceProvider from "./container-service-provider";

import routerServiceProvider from "./router-service-provider";

export default class Reactor {
  internalServiceProviders = [routerServiceProvider];

  constructor() {
    // Register all the internal service providers needed for the modules
    containerServiceProvider.registerInternalServiceProviders(
      this.internalServiceProviders
    );
  }

  /**
   * Register the service worker for offline
   */
  workOffline() {
    serviceWorker.register();

    return this;
  }

  /**
   * Register the service provider for the entire application
   *
   * @param {array} serviceProviders
   */
  registerServiceProviders(serviceProviders) {
    containerServiceProvider.register(serviceProviders);
  }

  /**
   * Start the app
   */
  react() {
    // calling the providers
    containerServiceProvider.dispatch();

    // scan the routes
    routerServiceProvider.scan();
  }
}
