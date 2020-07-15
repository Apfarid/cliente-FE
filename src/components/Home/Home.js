import React from "react";
import { homeStyle } from "./StyleHome";
import { Grid } from "@material-ui/core";
import Contador from "../Contador/Contador";
import Typography from "@material-ui/core/Typography";

export default function Dashboard() {
  const classes = homeStyle();
  const tamañoContador = "grande";

  return (
    <div className={classes.title}>
      <Grid item xs={12}>
        <div className={classes.contenedor}>
          <Typography variant="h1" component="h2" className={classes.otro}>
            Días a Vencer Crédito:
          </Typography>
        </div>
      </Grid>

      <Contador tamañoContador={tamañoContador} />

      <Grid>
        <div className={classes.contenedorDatoTitle}>
          <Typography className={classes.titleD} color="textSecondary">
            Cupo Disponible
          </Typography>
          <Typography className={classes.campo} color="textSecondary">
            $ 120.000
          </Typography>
        </div>
      </Grid>
    </div>
  );
}
