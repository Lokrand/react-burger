import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProtectedRoute } from "../../services/types/data";


export const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const user = useTypedSelector((state) => state.user);
  const auth = user.isAuthenticated;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
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
