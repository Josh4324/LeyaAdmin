import "./styles/css/style.bundle.css";
import "./styles/css/styles.css";
import "animate.css";

import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/shared/privateRoute";
import Auth from "./pages/Authentication/auth";
import Dashboard from "./pages/App/Dashboard/dashboard";
import store from "./redux/store";

function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Auth} />
            <PrivateRoute path="/app" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
