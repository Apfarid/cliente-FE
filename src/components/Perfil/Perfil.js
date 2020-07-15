import React, { Fragment } from "react";
import CardUser from "./CardUser";
import CardInfo from "./CardInfo";
import { Grid } from "@material-ui/core";
import HistoricoDeudor from "../HistoricoDeudor/HistoricoDeudor";
import Typography from "@material-ui/core/Typography";
import { PerfilStyles } from "./PerfilStyles";
import MigaPan from "../MigaPan/MigaPan";

const Perfil = () => {
  const classes = PerfilStyles();
  const datosVista = {
    nombre: "Perfil",
  };

  return (
    <Grid container className={classes.contenedor}>
      <Grid item xs={3}>
        <CardUser />
      </Grid>

      <Grid item xs={9}>
        <Grid item xs={12}>
          <CardInfo />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Histórico Créditos
          </Typography>
          <br />
          <HistoricoDeudor />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Perfil;
