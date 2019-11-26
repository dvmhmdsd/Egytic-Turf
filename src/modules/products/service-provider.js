import React from "react";

import routes, {components} from "./routes";

export default function (reactor) {
    // provide the route service
    routes(reactor.route, reactor);

    // provide the language service
    components.map(Component => {
        return <Component translate={reactor.translate} />
    })
}
