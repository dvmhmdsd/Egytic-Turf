import routes from "./components"
import Home from "./pages/home"



export default function (reactor) {
    routes(reactor.route, reactor)


    reactor.translation(Home);
}
