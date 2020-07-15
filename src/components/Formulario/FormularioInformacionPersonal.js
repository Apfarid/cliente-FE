import React, { useState, Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { styleFormularios } from "./FormularioStyle";
import Input from "@material-ui/core/Input";
import { withRouter } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import clienteAxios from "../../config/axios";
import Alertas from "../Alertas";

const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const FormularioInformacionPersonal = ({
  registroInfoPersonal,
  alertar,
  setActiveStep,
  activeStep,
  steps,
  history,
}) => {
  const classes = styleFormularios();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  /*let personalInformation = JSON.parse(localStorage.getItem('infoPersonal'));

  if(!personalInformation) {
    
    personalInformation = {
      tipoId: "",
      cedula: "",
      expedicionId: new Date(),
      nombres: "",
      apellidos: "",
      ciudad: "",
      barrio: "",
      estrato: "",
      tipoVivienda: "",
      nivelEstudio: "",
      genero: "",
    };
     
  }*/

  const [error, setError] = useState(false);



  const [infoPersonal, setinfoPersonal] = useState( (localStorage.getItem("infoPersonal") === null) ? ({
    tipoId: "",
    cedula: "",
    expedicionId: new Date(),
    nombres: "",
    apellidos: "",
    ciudad: "",
    barrio: "",
    estrato: "",
    tipoVivienda: "",
    nivelEstudio: "",
    genero: "",
    celular: "",
  }) : JSON.parse(localStorage.getItem('infoPersonal'))
  );

  const [touchInfoPersonal, setTouchInfoPersonal] = useState({
    tipoId: false,
    cedula: false,
    fechaExpedId: false,
    nombres: false,
    apellidos: false,
    ciudad: false,
    barrio: false,
    estrato: false,
    tipoVivienda: false,
    nivelEstudio: false,
    genero: false,
    celular: "",
  });

  const [errorInfoPersonal, setErrorInfoPersonal] = useState({
    tipoId: false,
    cedula: false,
    fechaExpedId: false,
    nombres: false,
    apellidos: false,
    ciudad: false,
    barrio: false,
    estrato: false,
    tipoVivienda: false,
    nivelEstudio: false,
    genero: false,
    celular: "",
  });

  const [validaEmail, setValidaEmail] = useState(true);

  const handleBlur = (event) => {
    const field = event.target.name;

    setTouchInfoPersonal({
      ...touchInfoPersonal,
      [field]: true,
    });

    validar(event);
  };

  const validar = (event) => {
    const target = event.target;
    const { value, name } = target;

    if (value.length === 0) {
      setErrorInfoPersonal({
        ...errorInfoPersonal,
        [name]: true,
      });

      return;
    } else {
      setErrorInfoPersonal({
        ...errorInfoPersonal,
        [name]: false,
      });
    }
  };

  const displayError = (field, nombre) => {
    const errorMessage = `El campo ${nombre} `;

    if (errorInfoPersonal[field]) {
      return `${errorMessage} es obligatorio`;
    }
  };

  const handleDateChange = (date) => {
    setinfoPersonal({
      ...infoPersonal,
      fechaExpedId: date,
    });
  };

  const handleChange = (e) => {
    setinfoPersonal({
      ...infoPersonal,
      [e.target.name]: e.target.value,
    });
  };

  const agregarPersonal = (e) => {
    e.preventDefault();

    if (
      infoPersonal.tipoId.trim() === "" ||
      infoPersonal.cedula.trim() === "" ||
      infoPersonal.nombres.trim() === "" ||
      infoPersonal.apellidos.trim() === "" ||
      infoPersonal.ciudad.trim() === "" ||
      infoPersonal.barrio.trim() === "" ||
      infoPersonal.estrato.trim() === "" ||
      infoPersonal.tipoVivienda.trim() === "" ||
      infoPersonal.nivelEstudio.trim() === "" ||
      infoPersonal.genero.trim() === "" ||
      infoPersonal.celular.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    localStorage.setItem("infoPersonal", JSON.stringify(infoPersonal))
    registroInfoPersonal(infoPersonal);
    handleNext();
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Información Personal
      </Typography>
      {error && <Alertas mensaje="Todos los campos deben ser diligenciados" />}
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={5}>
            <FormControl
              error={errorInfoPersonal.tipoId}
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="tipoId">Tipo de Identificación</InputLabel>
              <Select
                native
                value={infoPersonal.tipoId}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: "tipoId",
                  id: "tipoId",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"cc"}>Cedula de Ciudadanía</option>
                <option value={"ce"}>Cedula de Extrajeria</option>
              </Select>
              <FormHelperText>
                {displayError("tipoId", "Tipo de Identificación")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <TextField
              required
              id="cedula"
              name="cedula"
              label="Numero"
              type="number"
              value={infoPersonal.cedula}
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorInfoPersonal.cedula}
              helperText={displayError("cedula", "Numero")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={classes.fecha}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  fullWidth
                  required
                  id="fechaExpedId"
                  label="Fecha de expedición"
                  format="MM/dd/yyyy"
                  value={infoPersonal.fechaExpedId}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              required
              type="text"
              id="nombres"
              name="nombres"
              label="Nombres Completos"
              fullWidth
              value={infoPersonal.nombres}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorInfoPersonal.nombres}
              helperText={displayError("nombres", "Nombres completos")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              required
              id="apellidos"
              name="apellidos"
              label="Apellidos Completos"
              fullWidth
              value={infoPersonal.apellidos}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorInfoPersonal.apellidos}
              helperText={displayError("apellidos", "Apellidos Completos")}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <TextField
              required
              id="ciudad"
              name="ciudad"
              label="Ciudad"
              fullWidth
              value={infoPersonal.ciudad}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorInfoPersonal.ciudad}
              helperText={displayError("ciudad", "Ciudad")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <TextField
              id="barrio"
              required
              name="barrio"
              label="Barrio"
              fullWidth
              value={infoPersonal.barrio}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorInfoPersonal.barrio}
              helperText={displayError("barrio", "Barrio")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl
              fullWidth
              className={classes.formControl}
              error={errorInfoPersonal.estrato}
            >
              <InputLabel htmlFor="estrato">Extrato</InputLabel>
              <Select
                required
                native
                value={infoPersonal.estrato}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: "estrato",
                  id: "estrato",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
              </Select>
              <FormHelperText>
                {displayError("estrato", "Extrato")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl
              fullWidth
              className={classes.formControl}
              error={errorInfoPersonal.tipoVivienda}
            >
              <InputLabel htmlFor="tipoVivienda">Tipo de Vivienda</InputLabel>
              <Select
                native
                required
                value={infoPersonal.tipoVivienda}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: "tipoVivienda",
                  id: "tipoVivienda",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"propia"}>Propia</option>
                <option value={"arrendanda"}>Arrendada</option>
                <option value={"familiar"}>Familiar</option>
              </Select>
              <FormHelperText>
                {displayError("tipoVivienda", "Tipo de vivienda")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl
              fullWidth
              className={classes.formControl}
              error={errorInfoPersonal.nivelEstudio}
            >
              <InputLabel htmlFor="nivelEstudio">Nivel de Estudios</InputLabel>
              <Select
                native
                required
                value={infoPersonal.nivelEstudio}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: "nivelEstudio",
                  id: "nivelEstudio",
                }}
              >
                <option aria-label="None" value="" />

                <option value={"bachillerato"}>Bachiller</option>
                <option value={"tecnico"}>Técnico</option>
                <option value={"tecnologo"}>Tecnólogo</option>
                <option value={"profesional"}>Profesional</option>
                <option value={"doctorado"}>Doctorado</option>
                <option value={"sinEstudios"}>Sin Estudios</option>
              </Select>
              <FormHelperText>
                {displayError("nivelEstudio", "Nivel de Estudios")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl
              fullWidth
              className={classes.formControl}
              error={errorInfoPersonal.genero}
            >
              <InputLabel htmlFor="genero">Genero</InputLabel>
              <Select
                native
                required
                value={infoPersonal.genero}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: "genero",
                  id: "genero",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"hombre"}>Hombre</option>
                <option value={"mujer"}>Mujer</option>
              </Select>
              <FormHelperText>
                {displayError("genero", "Genero")}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              required
              id="celular"
              name="celular"
              label="Celular"
              fullWidth
              value={infoPersonal.celular}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errorInfoPersonal.celular}
              helperText={displayError("celular", "Celular")}
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
            onClick={agregarPersonal}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Guardar" : "Siguiente"}
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(FormularioInformacionPersonal);
