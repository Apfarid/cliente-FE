import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { styleFormularios } from "./FormularioStyle";
import Button from "@material-ui/core/Button";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Alertas from './../Alertas'

import FormLabel from "@material-ui/core/FormLabel";

export default function FormularioInformacionFinanciera({
  setActiveStep,
  activeStep,
  steps,
  registroInfoFinanciera
}) {
  const [infoFinanciera, setInfoFinanciera] = useState((localStorage.getItem("infoFinanciera") === null) ? ({
    banco: "",
    numeroCuenta: "",
    tipoCuenta: "",
    preguntaTC: "",
    ingresosMensuales: "",
  }) : JSON.parse(localStorage.getItem('infoFinanciera')));

  const [error, setError] = useState();
  

  const [touchInfoFinanciera, setTouchInfoFinanciera] = useState({
    banco: "",
    numeroCuenta: "",
    tipoCuenta: "",
    preguntaTC: "",
    ingresosMensuales: "",
  });

  const [errorInfoFinanciera, setErrorInfoFinanciera] = useState({
    banco: "",
    numeroCuenta: "",
    tipoCuenta: "",
    preguntaTC: "",
    ingresosMensuales: "",
  });

  const classes = styleFormularios();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setInfoFinanciera({
      ...infoFinanciera,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (event) => {
    const field = event.target.name;

    setTouchInfoFinanciera({
      ...touchInfoFinanciera,
      [field]: true,
    });

    validar(event);
  };

  const validar = (event) => {
    const target = event.target;
    const { value, name } = target;

    if (value.length === 0) {
      setErrorInfoFinanciera({
        ...errorInfoFinanciera,
        [name]: true,
      });

      return;
    } else {
      setErrorInfoFinanciera({
        ...errorInfoFinanciera,
        [name]: false,
      });
    }
  };

  const displayError = (field, nombre) => {
    const errorMessage = `El campo ${nombre} `;

    if (errorInfoFinanciera[field]) {
      return `${errorMessage} es obligatorio`;
    }
  };

  const onSubmitFinanciera = (e) => {
    e.preventDefault();

    if (
      infoFinanciera.banco.trim() === "" ||
      infoFinanciera.numeroCuenta.trim() === "" ||
      infoFinanciera.tipoCuenta.trim() === "" ||
      infoFinanciera.preguntaTC.trim() === "" ||
      infoFinanciera.ingresosMensuales.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    localStorage.setItem("infoFinanciera", JSON.stringify(infoFinanciera))
    registroInfoFinanciera(infoFinanciera);
    handleNext();
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información Financiera
      </Typography>
      {error && <Alertas mensaje = "Todos los campos deben ser diligenciados"/> }
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              error={errorInfoFinanciera.banco}
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="banco">Banco</InputLabel>
              <Select
                native
                value={infoFinanciera.banco}
                name="banco"
                onBlur={handleBlur}
                onChange={handleChange}
              >
                 <option aria-label="None" value="" />
                <option value={"BANCO AGRARIO"}>BANCO AGRARIO</option>
                <option value={"BANCO AV VILLAS"}>BANCO AV VILLAS</option>
                <option value={"BANCO BBVA COLOMBIA S.A"}>BANCO BBVA COLOMBIA S.A</option>
                <option value={"BANCO CAJA SOCIAL"}>BANCO CAJA SOCIAL</option>
                <option value={"BANCO COOPERATIVO COOPCENTRAL"}>BANCO COOPERATIVO COOPCENTRAL</option>
                <option value={"BANCO DAVIVIENDA"}>BANCO DAVIVIENDA</option>
                <option value={"BANCO DE BOGOTÁ"}>BANCO DE BOGOTÁ</option>
                <option value={"BANCO DE OCCIDENTE"}>BANCO DE OCCIDENTE</option>
                <option value={"BANCO DE FALABELLA"}>BANCO DE FALABELLA</option>
                <option value={"BANCO DE GNB SUDAMERIS"}>BANCO DE GNB SUDAMERIS</option>
                <option value={"BANCO ITAU"}>BANCO ITAU</option>
                <option value={"BANCO PICHINHA S.A"}>BANCO PICHINHA S.A</option>
                <option value={"BANCO POPULAR"}>BANCO POPULAR</option>
                <option value={"BANCO PROCREDIT"}>BANCO PROCREDIT</option>
                <option value={"BANCO SANTANDER COLOMBIA"}>BANCO SANTANDER COLOMBIA</option>
                <option value={"BANCO SERFINANZA"}>BANCO SERFINANZA</option>
                <option value={"BANCOLOMBIA"}>BANCOLOMBIA</option>
                <option value={"BANCOOMEVA S.A"}>BANCOOMEVA S.A</option>
                <option value={"CFA COOPERATIVA FINANCIERA"}>CFA COOPERATIVA FINANCIERA</option>
                <option value={"CITIBANK"}>CITIBANK</option>
                <option value={"CONFIAR COOPERATIVA FINANCIERA"}>CONFIAR COOPERATIVA FINANCIERA</option>
                <option value={"DAVIPLATA"}>DAVIPLATA</option>
                <option value={"nNEQUI"}>NEQUI</option>
                <option value={"RAPPIPAY"}>RAPPIPAY</option>
                <option value={"SCOTIABANK COLPATRIA"}>SCOTIABANK COLPATRIA</option>
              </Select>
              <FormHelperText>{displayError("banco", "Banco")}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="numeroCuenta"
              name="numeroCuenta"
              required
              label="Numero de Cuenta"
              fullWidth
              value={infoFinanciera.numeroCuenta}
              onBlur={handleBlur}
              error={errorInfoFinanciera.numeroCuenta}
              onChange={handleChange}
              type="number"
              helperText={displayError("numeroCuenta", "Numero de Cuenta")}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              error={errorInfoFinanciera.tipoCuenta}
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="tipoCuenta">Tipo de Cuenta</InputLabel>
              <Select
                native
                required
                id="tipoCuenta"
                name="tipoCuenta"
                value={infoFinanciera.tipoCuenta}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option aria-label="None" value="" />
                <option value={"si"}>Corriente</option>
                <option value={"no"}>Ahorros</option>
              </Select>
              <FormHelperText>
                {displayError("tipoCuenta", "Tipo de Cuenta")}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              error={errorInfoFinanciera.preguntaTC}
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="preguntaTC">
                ¿Posee tarjeta de Credito?
              </InputLabel>
              <Select
                native
                id="preguntaTC"
                value={infoFinanciera.preguntaTC}
                name="preguntaTC"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option aria-label="None" value="" />
                <option value={"si"}>Sí</option>
                <option value={"no"}>No</option>
              </Select>
              <FormHelperText>
                {displayError("preguntaTC", "¿Posee tarjeta de Credito?")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="ingresosMensuales"
              required
              name="ingresosMensuales"
              label="Ingresos Mensuales"
              value={infoFinanciera.ingresosMensuales}
              onBlur={handleBlur}
              error={errorInfoFinanciera.ingresosMensuales}
              onChange={handleChange}
              type="number"
              helperText={displayError(
                "ingresosMensuales",
                "Ingresos Mensuales"
              )}
              fullWidth
            />
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Anterior
            </Button>
          )}
          <Button

            onClick={onSubmitFinanciera}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Guardar" : "Siguiente"}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
