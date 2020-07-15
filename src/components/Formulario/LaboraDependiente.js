import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { styleFormularios } from "./FormularioStyle";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Alertas from '../Alertas'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function LaboraDependiente(props) {
  const {setActiveStep, activeStep, steps, registroInfoLaboral} = props
  const [error, setError] = useState();
  
  
  const classes = styleFormularios();

  const [infoDependiente, setInfoDependiente] = useState( (localStorage.getItem("infoDependiente") === null) ? ({
    nombreEmpresa: "",
    nit: "",
    ciudadEmpresa: "",
    direccionEmpresa: "",
    telefonoEmpresa: "",
    tipoContrato: "",
    cargo: "",
    eps: "",
    fechaIngreso: "",
  }): JSON.parse(localStorage.getItem('infoDependiente')));

  const [touchInfoDependiente, setTouchInfoDependiente] = useState({
    nombreEmpresa: "",
    nit: "",
    direccionEmpresa: "",
    telefonoEmpresa: "",
    tipoContrato: "",
    cargo: "",
    eps: "",
    fechaIngreso: "",
    ciudadEmpresa: "",
  });

  const [errorInfoDependiente, setErrorInfoDependiente] = useState({
    nombreEmpresa: "",
    nit: "",
    direccionEmpresa: "",
    telefonoEmpresa: "",
    tipoContrato: "",
    cargo: "",
    eps: "",
    fechaIngreso: "",
    ciudadEmpresa: "",
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setInfoDependiente({
      ...infoDependiente,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (event) => {
    const field = event.target.name;

    setTouchInfoDependiente({
      ...touchInfoDependiente,
      [field]: true,
    });

    validar(event);
  };

  const validar = (event) => {
    const target = event.target;
    const { value, name } = target;

    if (value.length === 0) {
      setErrorInfoDependiente({
        ...errorInfoDependiente,
        [name]: true,
      });

      return;
    } else {
      setErrorInfoDependiente({
        ...errorInfoDependiente,
        [name]: false,
      });
    }
  };

  const displayError = (field, nombre) => {
    const errorMessage = `El campo ${nombre} `;

    if (errorInfoDependiente[field]) {
      return `${errorMessage} es obligatorio`;
    }
  };

  const dependienteSubmit = (e) => {
    e.preventDefault();
    if (nombreEmpresa.trim() === "" || nit.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    localStorage.setItem("infoDependiente", JSON.stringify(infoDependiente))
    registroInfoLaboral(infoDependiente)
    handleNext();
    
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const {
    nombreEmpresa,
    nit,
    direccionEmpresa,
    ciudadEmpresa,
    telefonoEmpresa,
    tipoContrato,
    cargo,
    eps,
    fechaIngreso,
  } = infoDependiente;

  return (
    <div className={classes.contenedorEmpleado}>
      {error && <Alertas mensaje="Todos los campos deben ser diligenciados"/>}
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <TextField
              id="nombreEmpresa"
              name="nombreEmpresa"
              required
              label="Nombre Empresa"
              fullWidth
              value={nombreEmpresa}
              onBlur={handleBlur}
              error={errorInfoDependiente.nombreEmpresa}
              onChange={handleChange}
              type="text"
              helperText={displayError("nombreEmpresa", "Nombre Empresa")}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="nit"
              name="nit"
              label="Nit"
              fullWidth
              required
              value={nit}
              onBlur={handleBlur}
              error={errorInfoDependiente.nit}
              onChange={handleChange}
              type="number"
              helperText={displayError("nit", "Nit")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="ciudadEmpresa"
              name="ciudadEmpresa"
              label="Ciudad"
              required
              value={ciudadEmpresa}
              onBlur={handleBlur}
              error={errorInfoDependiente.ciudadEmpresa}
              onChange={handleChange}
              type="text"
              helperText={displayError("ciudadEmpresa", "Ciudad")}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="direccionEmpresa"
              name="direccionEmpresa"
              required
              label="Dirección"
              value={direccionEmpresa}
              onBlur={handleBlur}
              error={errorInfoDependiente.direccionEmpresa}
              onChange={handleChange}
              type="text"
              helperText={displayError("direccionEmpresa", "Dirección")}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="telefonoEmpresa"
              name="telefonoEmpresa"
              required
              label="Teléfono"
              value={telefonoEmpresa}
              onBlur={handleBlur}
              error={errorInfoDependiente.telefonoEmpresa}
              onChange={handleChange}
              type="number"
              helperText={displayError("telefonoEmpresa", "Teléfono")}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl
              error={errorInfoDependiente.tipoContrato}
              className={classes.formControl}
            >
              <InputLabel htmlFor="tipoContrato">Tipo de Contrato</InputLabel>
              <Select
                native
                id="tipoContrato"
                name="tipoContrato"
                value={tipoContrato}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option aria-label="None" value="" />
                <option value={"si"}>Termino Fijo</option>
                <option value={"no"}>Termino Indefinido</option>
                <option value={"no"}>Prestacion de Servicios</option>
                <option value={"no"}>Obra y labor</option>
              </Select>
              <FormHelperText>
                {displayError("tipoContrato", "Tipo de Contrato")}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="cargo"
              name="cargo"
              label="Cargo"
              type="text"
              required
              value={cargo}
              onBlur={handleBlur}
              error={errorInfoDependiente.cargo}
              onChange={handleChange}
              helperText={displayError("cargo", "Cargo")}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="eps"
              name="eps"
              required
              label="EPS"
              type="text"
              value={eps}
              onBlur={handleBlur}
              error={errorInfoDependiente.eps}
              onChange={handleChange}
              helperText={displayError("eps", "EPS")}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                fullWidth
                id="date-picker-dialog"
                required
                label="Fecha de Ingreso"
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
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={dependienteSubmit}
          >
            {activeStep === steps.length - 1 ? "Guardar" : "Siguiente"}
          </Button>
        </div>
      </form>
    </div>
  );
}
