import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const user = useTypedSelector((state) => state.user);
  const auth = user.isAuthenticated;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          (children as JSX.Element)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
