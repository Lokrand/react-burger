import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export type TProtectedRoute = Pick<RouteProps, "children" | "path" | "exact">;

export const ProtectedRoute: FC<TProtectedRoute> = ({ children, ...rest }) => {
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
