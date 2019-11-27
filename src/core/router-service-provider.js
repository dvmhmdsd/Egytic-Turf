import React from "react";
import ReactDOM from "react-dom";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import LanguageProvider, { LanguageContextProvider } from "../contexts/language-context"

let routesList = [];

/**
 * Add a new route to the routes list
 *
 * @param {string} path
 * @param {React.Component} component
 */
function addRoute(path, component) {
  routesList.push({
    path,
    component
  });
}

function Test() {
  const routes = routesList.map((route, idx) => {
    return (
      <Route path={`/(|en|ar)${route.path}`} exact key={idx}>
        <LanguageContextProvider.Consumer>
          {context => (
            <route.component context={context} />
          )}
        </LanguageContextProvider.Consumer>
      </Route>
    );
  });

  // console.log(routes)

  return (
    <Switch>
      {routes}
    </Switch>
  )
}

/**
 * Register routes of the application and provide language context
 */
function RouteRenderer() {

  return (
    <LanguageProvider>
      <Router>
        <Test />
      </Router>
    </LanguageProvider>

  );
}

function scan() {
  ReactDOM.render(<RouteRenderer />, document.getElementById("root"));
}

export default {
  provider: {
    name: "route",
    call: addRoute
  },
  scan
};
