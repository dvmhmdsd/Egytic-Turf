import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

export default (route) => {
  route("/", Home);
  // define it double to match the url with "/" or without
  route("/about", About);
  route("about", About);
  route("/gallery", Gallery);
  route("gallery", Gallery);
  route("/contact", Contact);
  route("contact", Contact);
};
