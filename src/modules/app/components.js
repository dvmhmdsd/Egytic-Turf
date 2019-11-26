import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

export default (route) => {
  route("/", Home);
  route("/about", About);
  route("/gallery", Gallery);
  route("/contact", Contact);
};
