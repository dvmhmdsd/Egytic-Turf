// Get the connector of the application
import reactor from "./core/Reactor";

// get all the modules' service providers
import AppModule from "./modules/app/service-provider";

// Register all the modules
reactor.registerServiceProviders([AppModule]);

// Bootstrap the application
reactor.react();
