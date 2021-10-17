import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoutes({ compoment: Compoment, ...rest }) {
  const [authtoken] = useState(localStorage.getItem("token", "jwtSecret"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authtoken == null) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        } else {
          return <Compoment />;
        }
      }}
    />
  );
}

export default ProtectedRoutes;
