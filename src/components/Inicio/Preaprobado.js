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
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch, useSelector } from "react-redux";
import { formateador } from "../../Helper";

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
  },
}));

const Preaprobado = (props) => {
  const classes = useStyles();

  const credito = useSelector(
    (state) => state.gestionCreditos.credito.valorAprobado
  );

  console.log(credito);

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
          Tu credito se encuentra en proceso de desembolso:
        </h2>
        <h3 className={classes.texto}>
          Recuerda que si la firma del contrato se realizo despues de las 16:00, tu dinero se 
          vera reflejado al seguiente día.
        </h3>
      </Grid>
    </Grid>
  );
};

export default Preaprobado;
