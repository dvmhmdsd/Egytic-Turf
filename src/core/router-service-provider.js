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

function RouteRenderer() {
  const routes = routesList.map((route, idx) => {
    return (
      <Route path={route.path} exact key={idx} component={route.component} />
    );
  });
  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
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
