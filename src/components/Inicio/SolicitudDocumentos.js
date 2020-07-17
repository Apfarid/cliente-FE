import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import Hidden from "@material-ui/core/Hidden";
import Modelo from "../../img/modelo.png";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CardActions from "@material-ui/core/CardActions";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/icons/Send";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch, useSelector } from "react-redux";
import { formateador } from "../../Helper";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { editarCreditoAction } from "../../actions/gestionCreditoActions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  titulo: {
    fontSize: "40px",
    color: "#ffde2e",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Raleway",

    marginBottom: 2,
  },

  texto: {
    fontSize: "40px",
    color: "#0074bc",
    textAlign: "center",
    fontFamily: "Raleway",
  },
  fab: {
    margin: theme.spacing(3),
  },

  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    backgroundColor: "#ffede2e",
    borderRadius: 50,
    fontWeight: "bold",
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },

  enviar: {
    marginTop: 0,
  },

  cargar: {
    marginLeft: -218,
  },

  contendor: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SolicitudDocumentos = ({ credito, history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const solicitarCredito = (credito) => dispatch(editarCreditoAction(credito));

  let valor = credito ? credito.valorAprobado : 0;

  const cancelarSolicitud = (e) => {
    let desertado = true;
    let id = credito.id;
    Swal.fire({
      title: "¿Estas seguro que deseas abandotar tu solicitud?",
      text:
        "Si abandonas esta solicitud,  deberas realizar una nueva para acceder a tu credito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, abandonar!",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        solicitarCredito({ desertado, id });
        Swal.fire("Eliminado!", "Tu solicitud ha sido cancelada.", "success");
        history.push("/inicio");
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden only={["xs", "sm"]}>
        <Grid item xs={12}>
          <h2 className={classes.titulo}>
            <strong>¡ H O L A !</strong>
          </h2>
        </Grid>
      </Hidden>

      <Grid item xs={12}>
        <h2 className={classes.texto}>
          {" "}
          Estamos esperando el envio de los documentos solicitados:
        </h2>
        <h3 className={classes.texto}>
          {" "}
          Tienes un Pre aprobado por $:{" "}
          <span className={classes.titulo}>
            {" "}
            {formateador(valor) || 0}
          </span>{" "}
        </h3>
      </Grid>

      <CardActions>
        <Grid item xs={12}>
          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="documentos"
              multiple
              type="file"
            />
            <label htmlFor="documentos">
              <Button
                variant="contained"
                color="default"
                component="span"
                startIcon={<CloudUploadIcon />}
                className={classes.cargar}
              >
                Cargar
              </Button>
            </label>

            <br />
            <br />
            <br />

            <div className={classes.contendor}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                endIcon={<Icon>Send</Icon>}
              >
                Enviar
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={cancelarSolicitud}
              >
                Abandonar
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={cancelarSolicitud}
              >
                Limpiar
              </Button>
            </div>
          </div>
        </Grid>
      </CardActions>
    </Grid>
  );
};

export default withRouter(SolicitudDocumentos);
