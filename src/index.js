// Get the connector of the application
import reactor from "./core/Reactor";

// get all the modules' service providers
import HomeModule from "./modules/home/service-provider";
import AboutModule from "./modules/about/service-provider";
import GalleryModule from "./modules/gallery/service-provider";
import ContactModule from "./modules/contact/service-provider";

// Register all the modules
reactor.registerServiceProviders([
  HomeModule,
  AboutModule,
  GalleryModule,
  ContactModule
]);

// Bootstrap the application
reactor.react();
