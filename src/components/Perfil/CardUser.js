import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import Contador from "../Contador/Contador";
import { useDispatch, useSelector } from "react-redux";
import { format, addDays, lightFormat } from "date-fns";
import { formateador } from "../../Helper";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
    fontSize:15,
    fontFamily:"raleway",
    fontWeight:900,
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "rgba(0, 0, 0, 0.54)",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "rgba(0, 0, 0, 0.54)",
  },
  pos: {
    marginBottom: 12,
  },

  contenedor: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 10,
    width: "100%",
  },

  p: {
    background: "#0074bc",
    color: "#fff",
    padding: " 2px 15px 2px 20px",
    borderRadius: 10,
    fontSize: 12,
    width: "50%",
  },
  pDos: {
    width: "50%",
    fontSize: 12,
    marginRight: 5,
  },

  pTres: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
  },

  avatar: {
    width: 80,
    height: 80,
    border: "3px solid #ffde2e",
    background: "#fff",
    color: "#0074bc",
  },

  contenedorAvatar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  contenedorPeque: {
    width: '100%'
  },
});

const hoy = format(new Date(), "MM/dd/yyyy");

export default function CardUser() {
  const classes = useStyles();
  const [usuario, setUsuario] = useState("");
  const [credito, setCredito] = useState({
    fechaDesembolsado : hoy, 
    diasPrestamo: 0
  });
  let valorA = credito?.valorAprobado ? credito?.valorAprobado : 0;

  let dia = addDays(new Date(credito?.fechaDesembolsado), credito?.diasPrestamo + 1);
  const difference = +new Date(dia) - +new Date();
  let diasPendientes = Math.floor(difference / (1000 * 60 * 60 * 24));

  const creditoInfo = async () => {
    const respuesta = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setCredito(respuesta.data.credito);
  };

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
    creditoInfo();
    usuarioInfo();
  }, []);

  return (
    <Grid item xs={12}>
      <Card className={classes.root} elevation={3}>
        <CardContent>
          <div className={classes.contenedorAvatar}>
            <Avatar src="/broken-image.jpg" className={classes.avatar} />
          </div>
          <Typography variant="h5" component="h2" className={classes.title}>
            {usuario.nombres} {usuario.apellidos}
          </Typography>

          <br />
          <Divider variant="middle" />
          <br />
          <div className={classes.contenedor}>
            <Typography variant="body2" component="p" className={classes.pDos}>
              Valor Credito
            </Typography>
            <Typography variant="body2" component="p" className={classes.p}>
              $ {formateador(valorA)}
            </Typography>
          </div>

          {credito?.solicitudCredito ? (
            <>
              <div className={classes.contenedor}>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pDos}
                >
                  Dias que restan para pagar el crédito
                </Typography>
                <Typography variant="body2" component="p" className={classes.p}>
                  {diasPendientes} {diasPendientes > 1 ? "días" : "día"}
                </Typography>
              </div>

              <Typography
                variant="body2"
                component="p"
                className={classes.subTitle}
              >
                {hoy}
              </Typography>

              <Typography
                variant="body2"
                component="p"
                className={classes.pTres}
              >
                Cuenta Regresiva
              </Typography>
              <div className={classes.contenedorPeque}>
                <Contador tamañoContador="peque" credito={credito} />
              </div>
            </>
          ) : (
            <Link to="/solicitud-credito">solicita tu credito</Link>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
