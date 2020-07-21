import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import clienteAxios from "../../config/axios";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 100,
    marginTop: 25,
    marginLeft: 45,
    fontSize: 15,
    fontFamily: "raleway",
    fontWeight: 900,
  },

  card: {
    width: "100% !important",
    backgroundColor: "#ffdf00",
  },

  editIcon: {
    marginLeft: 10,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [usuario, setUsuario] = useState("");

  const usuarioInfo = async () => {
    const respuesta = await clienteAxios.get("/clientes", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setUsuario(respuesta.data);
  };

  useEffect(() => {
    usuarioInfo();
  }, []);

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Card elevation={3} className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              Información
              <EditIcon className={classes.editIcon} />
            </Typography>
            <Typography variant="p" component="p" className={classes.title}>
              Nombre: {usuario.nombres} {usuario.apellidos}
            </Typography>
            <Typography variant="p" component="p" className={classes.title}>
              Indentificación: {usuario.cedula}
            </Typography>
            <Typography variant="p" component="p" className={classes.title}>
              Celular: {usuario.celular}
            </Typography>
            <Typography variant="p" component="p" className={classes.title}>
              Contraseña: *****
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
