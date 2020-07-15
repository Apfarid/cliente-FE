import React, { Fragment, useContext, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Home from "./views/home/Home";
import Sidebar from "./views/layout/Sideba";
import Contrato from "./views/contrato/Contratos";
import SolicitarCredito from "./views/solicitarCredito/SolicitarCredito";
import Historico from "./views/historico/HistoricoDeudas";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Formulario from "./components/Formulario/Formulario";
import Liquida from "./views/LiquidaContrato/LiquidaContrato";
import Renovacion from "./views/reliquidar/ReliquidarContrato";
import { Provider } from "react-redux";
import store from "./store";
import Web from "./components/web/Main";
import GestorCreditos from "./views/gestorCreditos/DetalleCredito";
import Perfil from "./views/perfil/Perfil";

const Routes = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0074bc",
      },
      secondary: {
        main: "#ffde2e",
      },
      textSecondary: {
        main: "#4caf50",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/crear-cuenta" component={Registro} />
            <Route exact path="/iniciar-sesion" component={Login} />
            <Route exact path="/" component={Web} />

            <Sidebar>
              <Route exact path="/inicio" component={Home} />
              <Route
                exact
                path="/gestor-credito/:id"
                component={GestorCreditos}
              />
              <Route exact path="/formulario-registro" component={Formulario} />
              <PrivateRoute exact path="/contrato" component={Contrato} />
              <PrivateRoute
                exact
                path="/liquidar-credito"
                component={Liquida}
              />
              <PrivateRoute
                exact
                path="/renovacion-credito"
                component={Renovacion}
              />
              <PrivateRoute
                exact
                path="/solicitud-credito"
                component={SolicitarCredito}
              />
              <PrivateRoute
                exact
                path="/historico-credito"
                component={Historico}
              />
              <PrivateRoute exact path="/perfil" component={Perfil} />
            </Sidebar>
          </Switch>
        </Provider>
      </Router>
    </ThemeProvider>
  );
};
export default Routes;

{
  /*<PrivateRoute path="/detalle-credito" component={Formulario} />*/
}
