import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { calculadoraStyle } from "./CalculadoraStyle";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import {
  cobroPlataforma,
  formateador,
  cobroAdministracion,
  intereses,
  cobroIva,
} from "../../Helper";

import { nuevoCredito } from "../../actions/gestionCreditoActions";
import { consultarCenso } from "../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Formulario from "../Formulario/Formulario";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const PrettoSlider = withStyles({
  root: {
    color: "#ffde2e",
    height: 8,
  },
  thumb: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -12,
    marginLeft: -18,

    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 35px)",
    top: 18,
    "& *": {
      background: "transparent",
      color: "#0074bc",
    },
  },
  track: {
    height: 20,
    borderRadius: 50,
  },
  rail: {
    width: "100%",
    height: 20,
    borderRadius: 50,
    padding: 0,
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const Calculadora = (props) => {
  const classes = calculadoraStyle();
  const [diasPrestamo, setdiasPrestamo] = useState(1);
  const [valorSolicitado, setvalorSolicitado] = useState(120000);
  const [plataforma, setPlataforma] = useState(1050);
  const [administracion, setAdministracion] = useState(15000);
  const [interesCredito, setInteresCredito] = useState(0);
  const [impuestoIva, setImpuestoIva] = useState(0);
  const [totalPago, setTotalPago] = useState(0);

  const handlechangeSliderValor = (e, valor) => {
    setvalorSolicitado(valor);
    setAdministracion(cobroAdministracion(valor));
    setInteresCredito(intereses(diasPrestamo, valor));
    setImpuestoIva(parseInt(cobroIva(administracion, plataforma)));
    setTotalPago(
      valorSolicitado +
        plataforma +
        administracion +
        interesCredito +
        impuestoIva
    );
  };

  const handlechangeDiasPrestamo = (e, dias) => {
    setdiasPrestamo(dias);
    setPlataforma(cobroPlataforma(dias));
    setInteresCredito(intereses(dias, valorSolicitado));
    setImpuestoIva(parseInt(cobroIva(administracion, plataforma)));
    setTotalPago(
      valorSolicitado +
        plataforma +
        administracion +
        interesCredito +
        impuestoIva
    );
  };

  const dispatch = useDispatch();

  const solicitarCredito = (credito) => dispatch(nuevoCredito(credito));

  const solicitar = (e) => {
    e.preventDefault();
    let solicitudCredito;

    let datos = {
      diasPrestamo,
      valorSolicitado,
      solicitudCredito: true,
    };

    solicitarCredito(datos);
    props.history.push("/inicio");
  };

  if (localStorage.getItem("censo") !== "si") {
    Swal.fire({
      icon: "error",
      title:
        "Antes de solicitar tu credito, debes completar tu formulario de registro",
    });
    props.history.push("/formulario-registro");
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Card className={classes.roota} variant="outlined">
          <CardContent className={classes.card}>
            <form onSubmit={solicitar}>
              <div className={classes.cardHeader}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.texto}
                >
                  Solicita tu crédito
                </Typography>
              </div>

              <div className={classes.slider}>
                <PrettoSlider
                  aria-label="pretto slider"
                  defaultValue={120000}
                  min={120000}
                  valueLabelDisplay="on"
                  max={350000}
                  onChange={handlechangeSliderValor}
                  step={10000}
                  className={classes.slide}
                />

                <div className={classes.monto}>
                  <Typography className={classes.montoText}>
                    MIN $120.000
                  </Typography>
                  <Typography className={classes.montoText}>
                    MAX %350.000
                  </Typography>
                </div>

                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.texto}
                >
                  Días
                </Typography>

                <PrettoSlider
                  aria-label="pretto slider"
                  defaultValue={1}
                  valueLabelDisplay="on"
                  min={1}
                  max={30}
                  onChange={handlechangeDiasPrestamo}
                  step={1}
                  className={classes.slide}
                />

                <div className={classes.monto}>
                  <Typography className={classes.montoText}>1 día</Typography>
                  <Typography className={classes.montoText}>30 días</Typography>
                </div>
              </div>

              <div className={classes.espacio}></div>

              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                  <div className={classes.group}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        className={classes.posTitle}
                        color="textSecondary"
                      >
                        CANTIDAD SOLICITADA DE PRESTAMO ($)
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography className={classes.pos} color="textSecondary">
                        $ {formateador(valorSolicitado)}
                      </Typography>
                    </Grid>
                  </div>
                </Grid>
              </Grid>

              <div className={classes.group}>
                <Typography className={classes.posTitle} color="textSecondary">
                  PLATAFORMA WEB ($)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  $ {formateador(plataforma)}
                </Typography>
              </div>

              <div className={classes.group}>
                <Typography className={classes.posTitle} color="textSecondary">
                  INTERES ($) TASA 25% EA
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  $ {formateador(interesCredito.toFixed(0))}
                </Typography>
              </div>

              <div className={classes.group}>
                <Typography className={classes.posTitle} color="textSecondary">
                  ADMINISTRACIÓN ($)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  $ {formateador(administracion)}
                </Typography>
              </div>

              <div className={classes.group}>
                <Typography className={classes.posTitle} color="textSecondary">
                  IVA ($)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  $ {formateador(impuestoIva)}
                </Typography>
              </div>

              <div className={classes.group}>
                <Typography className={classes.posTitle} color="textSecondary">
                  TOTAL A PAGAR ($)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  $ {formateador(totalPago.toFixed(0))}
                </Typography>
              </div>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                className={classes.boton}
              >
                ¡SOLICITA YA!
              </Button>
            </form>
          </CardContent>
        </Card>
        <Grid />
      </Grid>
    </div>
  );
};

export default withRouter(Calculadora);
