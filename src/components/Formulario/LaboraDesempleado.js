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

export default function LaboraDesempleado(props) {
  const { setActiveStep, activeStep, steps, registroInfoLaboral } = props;
  const [error, setError] = useState();

  const [infoDesempleado, setInfoDesempleado] = useState( (localStorage.getItem("infoDesempleado") === null) ? ({
    tiempoDesempleado: "",
  }) : JSON.parse(localStorage.getItem('infoDesempleado')));

  const [touchInfoDesempleado, setTouchInfoDesempleado] = useState({
    tiempoDesempleado: "",
  });

  const [errorInfoDesempleado, setErrorInfoDesempleado] = useState({
    tiempoDesempleado: "",
  });

  const classes = styleFormularios();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setInfoDesempleado({
      ...infoDesempleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (event) => {
    const field = event.target.name;

    setTouchInfoDesempleado({
      ...touchInfoDesempleado,
      [field]: true,
    });

    validar(event);
  };

  const validar = (event) => {
    const target = event.target;
    const { value, name } = target;

    if (value.length === 0) {
      setErrorInfoDesempleado({
        ...errorInfoDesempleado,
        [name]: true,
      });

      return;
    } else {
      setErrorInfoDesempleado({
        ...errorInfoDesempleado,
        [name]: false,
      });
    }
  };

  const displayError = (field, nombre) => {
    const errorMessage = `El campo ${nombre} `;

    if (errorInfoDesempleado[field]) {
      return `${errorMessage} es obligatorio`;
    }
  };

  const onSubmitDesempleado = (e) => {
    e.preventDefault();

    if (tiempoDesempleado.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    localStorage.setItem("infoDesempleado", JSON.stringify(infoDesempleado))
    registroInfoLaboral(infoDesempleado)
    handleNext();
  };

  const {
    tiempoDesempleado,
    ciudad,
    direccion,
    telefono,
    ingresos,
  } = infoDesempleado;

  return (
    <React.Fragment>
      <form>
      {error && <Alertas mensaje = "Todos los campos deben ser diligenciados"/>}
        <Grid container className={classes.independiente}>
          <Grid item xs={12} sm={10}>
            <TextField
              id="tiempoDesempleado"
              name="tiempoDesempleado"
              required
              label="¿Desde cúando está desempleado?"
              fullWidth
              value={tiempoDesempleado}
              onBlur={handleBlur}
              error={errorInfoDesempleado.tiempoDesempleado}
              onChange={handleChange}
              type="text"
              helperText={displayError(
                "tiempoDesempleado",
                "¿Desde cúando está desempleado?"
              )}
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
            onClick= {onSubmitDesempleado}
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
