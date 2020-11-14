import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

function PrivateRoute({ component: Component, Auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}
const mapStateToProps = (state) => ({ Auth: state.Auth });
export default connect(mapStateToProps, {})(PrivateRoute);
