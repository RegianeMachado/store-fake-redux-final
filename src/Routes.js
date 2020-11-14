import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Auth";
import { Create, Update, List } from "./pages/Users";
import PrivateRoute from "./components/PrivateRoute";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/users" exact component={List} />
        <PrivateRoute path="/users/create" exact component={Create} />
        <Route path="/users/:id/update" exact component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
