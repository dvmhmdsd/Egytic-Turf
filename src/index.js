// Get the connector of the application
import Reactor from "./core/Reactor";

// get all the modules' service providers
import AppModule from "./modules/app/service-provider";
import ProductsModule from "./modules/products/service-provider";

// global styles
import "./index.scss"

import 'bootstrap/dist/css/bootstrap.min.css';

const reactor = new Reactor();

// Register all the modules
reactor.registerServiceProviders([AppModule, ProductsModule]);

// Bootstrap the application
reactor.react();
