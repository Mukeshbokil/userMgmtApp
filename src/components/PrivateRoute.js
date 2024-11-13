import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate,Outlet} from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  return (
   /* <Route
      {...rest}
      render={props =>
        user.token ? <Component {...props} /> : navigate("/")
      }
    /> */
    user.token ? <Outlet/>:<Navigate to="/"/>
  );
};

export default PrivateRoute;