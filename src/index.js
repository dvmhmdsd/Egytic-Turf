// Get the connector of the application
import Reactor from "./core/Reactor";

// get all the modules' service providers
import AppModule from "./modules/app/service-provider";

// global styles
import "./index.scss"

const reactor = new Reactor();

// Register all the modules
reactor.registerServiceProviders([AppModule]);

// Bootstrap the application
reactor.react();
