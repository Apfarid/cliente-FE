import React, { Fragment } from "react";
import CardUser from "./CardUser";
import CardInfo from "./CardInfo";
import { Grid } from "@material-ui/core";
import HistoricoDeudor from "../HistoricoDeudor/HistoricoDeudor";
import Typography from "@material-ui/core/Typography";
import { PerfilStyles } from "./PerfilStyles";
import MigaPan from "../MigaPan/MigaPan";

import Hidden from "@material-ui/core/Hidden";

const Perfil = () => {
  const classes = PerfilStyles();
  const datosVista = {
    nombre: "Perfil",
  };

  return (
    <Grid container className={classes.contenedor}>
      <Grid item xs={12} sm={6}>
        <CardUser />
      </Grid>

        <Grid item xs={12}sm={6}>
          <CardInfo />
        </Grid>
        <Hidden only={["xs", "sm"]}>
      <Grid item xs={12} sm={12}>
        <Grid item xs={6} sm={12}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Histórico Créditos
          </Typography>
          <br />
          <HistoricoDeudor />
        </Grid>
      </Grid>
      </Hidden>
    </Grid>
  );
};

export default Perfil;
