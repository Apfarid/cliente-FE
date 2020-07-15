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

import Alertas from "../Alertas";

export default function FormuarioFinal(props) {
  const { setActiveStep, activeStep, steps, activar } = props;
  const [error, setError] = useState();

  const classes = styleFormularios();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };




  const onSubmitFinanciera = (e) => {
    e.preventDefault();
    activar()
    handleNext();
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <React.Fragment>
      {error && <Alertas mensaje="Todos los campos deben ser diligenciados" />}

      <form>
        <Grid container className={classes.independiente}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Verifica que tus datos sean correctos.
            </Typography>
            <Typography variant="subtitle1">
              ¡Estas muy cerca de poder gestionar tu credito!
            </Typography>
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
            {activeStep === steps.length - 1 ? "Guardar" : "enviar"}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
