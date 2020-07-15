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

import FormLabel from "@material-ui/core/FormLabel";
import Alertas from "../Alertas";

export default function LaboraPensionado(props) {
  const { setActiveStep, activeStep, steps, registroInfoLaboral } = props;
  const [error, setError] = useState();

  const [infoPensionado, setInfoPensionado] = useState( (localStorage.getItem("infoPensionado") === null) ?  ({
    fondoPensional: "",
    causaPension: "",
    fechaResolucion: "",
  }) : JSON.parse(localStorage.getItem('infoPensionado')));

  const [touchInfoPensionado, setTouchInfoPensionado] = useState({
    fondoPensional: "",
    causaPension: "",
    fechaResolucion: "",
  });

  const [errorInfoPensionado, setErrorInfoPensionado] = useState({
    fondoPensional: "",
    causaPension: "",
    fechaResolucion: "",
  });

  const classes = styleFormularios();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setInfoPensionado({
      ...infoPensionado,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (event) => {
    const field = event.target.name;

    setTouchInfoPensionado({
      ...touchInfoPensionado,
      [field]: true,
    });

    validar(event);
  };

  const validar = (event) => {
    const target = event.target;
    const { value, name } = target;

    if (value.length === 0) {
      setErrorInfoPensionado({
        ...errorInfoPensionado,
        [name]: true,
      });

      return;
    } else {
      setErrorInfoPensionado({
        ...errorInfoPensionado,
        [name]: false,
      });
    }
  };

  const displayError = (field, nombre) => {
    const errorMessage = `El campo ${nombre} `;

    if (errorInfoPensionado[field]) {
      return `${errorMessage} es obligatorio`;
    }
  };

  const onSubmitFinanciera = (e) => {
    e.preventDefault();

    if (fondoPensional.trim() === "" || causaPension.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    localStorage.setItem("infoPensionado", JSON.stringify(infoPensionado))
    registroInfoLaboral(infoPensionado)
    handleNext();
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const { fondoPensional, causaPension, fechaResolucion } = infoPensionado;

  return (
    <React.Fragment>
      {error && <Alertas mensaje="Todos los campos deben ser diligenciados" />}

      <form>
        <Grid container className={classes.independiente}>
          <Grid item xs={12} sm={6}>
            <FormControl
              error={errorInfoPensionado.fondoPensional}
              className={classes.formControl}
            >
              <InputLabel htmlFor="fondoPensional">Fondo Pensional</InputLabel>
              <Select
                native
                id="fondoPensional"
                name="fondoPensional"
                value={fondoPensional}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option aria-label="None" value="" />
                <option value={"si"}>Protección</option>
                <option value={"no"}>Pensiones de Antioquia</option>
                <option value={"no"}>CaxDac</option>
                <option value={"no"}>Porvenir</option>
                <option value={"no"}>Colpensiones</option>
                <option value={"no"}>Colfondos Pensiones y Cesantía</option>
                <option value={"no"}>Old Mutual </option>
              </Select>
              <FormHelperText>
                {displayError("fondoPensional", "Fondo Pensional")}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              error={errorInfoPensionado.causaPension}
              className={classes.formControl}
            >
              <InputLabel htmlFor="causaPension">Causa de Pensión</InputLabel>
              <Select
                native
                id="causaPension"
                name="causaPension"
                required
                value={causaPension}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option aria-label="None" value="" />
                <option value={"si"}>Pensión de Vejez</option>
                <option value={"no"}>Pensión por Invalidez</option>
                <option value={"no"}>Pensión de Sobreviviente</option>
              </Select>
              <FormHelperText>
                {displayError("causaPension", "Causa de Pensión")}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                fullWidth
                id="date-picker-dialog"
                label="Fecha de la Resoluci[on"
                required
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Anterior
            </Button>
          )}
          <Button
            onClick = { onSubmitFinanciera}
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
