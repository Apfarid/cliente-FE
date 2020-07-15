import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import clienteAxios from "../../config/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 45,
  },

  card: {
    width: "95% !important",
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
      <Card elevation={3} className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Información
            <EditIcon />
          </Typography>
          <Typography variant="p" component="p" className={classes.title}>
            Nombre: {usuario.nombres} {usuario.apellidos}
          </Typography>
          <Typography variant="p" component="p" className={classes.title}>
            Indentification: {usuario.cedula}
          </Typography>
          <Typography variant="p" component="p" className={classes.title}>
            Celular {usuario.celular}
          </Typography>
          <Typography variant="p" component="p" className={classes.title}>
            Contraseña
          </Typography>
          <Typography variant="p" component="p" className={classes.title}>
            Teléfono
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
