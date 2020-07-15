import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/auth/Login";
import Sidebar from "./views/layout/Sideba";

const PrivateRoute = (props) => {
  if (localStorage.getItem("token")) {
    // La ruta
    return <Route path={props.path} component={props.component} />;
  }
  return <Redirect to="/iniciar-sesion" />;
};

export default PrivateRoute;

/*
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Sidebar>
    <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/iniciar-sesion" />
    }
    />
    </Sidebar>
    );
  };
  
  export const PrivateRoute = ({ component: Component, name, ...rest }) => (
    <Route
    {...rest}
    render={props => {
      const isLogged = localStorage.getItem('isAuthenticated') === 'true';
      const myModules = JSON.parse(localStorage.getItem('_MODULES'));
      if (!isLogged) {
        return <Redirect exact from="/" to="/sign-in" />;
      }
      for (let index = 0; index < myModules.length; index++) {
        const element = myModules[index];
        if (element.name === name) {
          return <Component {...props} />;
        }
      }
      return <Redirect to="/not-found" />;
    }}
    />
    );
    */
