import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { styleFormularios } from "./FormularioStyle";
import Alertas from "../Alertas";

export default function FormularioInformacionReferencia(props) {
  const { setActiveStep, activeStep, steps, registroInfoReferencias } = props;
  const [error, setError] = useState();

  const classes = styleFormularios();

  const [infoReferencias, setInfoReferencias] = useState(
    localStorage.getItem("infoReferencias") === null
      ? {
          nombreReferenciaFamiliar: "",
          apellidoReferenciaFamiliar: "",
          ciudadReferenciaFamiliar: "",
          telefonoReferenciaFamiliar: "",
          parentezcoReferenciaFamiliar: "",
          nombreReferenciaPersonal: "",
          apellidoReferenciaPersonal: "",
          ciudadReferenciaPersonal: "",
          telefonoReferenciaPersonal: "",
        }
      : JSON.parse(localStorage.getItem("infoReferencias"))
  );

  const [touchInfoReferencias, setTouchInfoReferencias] = useState({
    nombreReferenciaFamiliar: "",
    apellidoReferenciaFamiliar: "",
    ciudadReferenciaFamiliar: "",
    telefonoReferenciaFamiliar: "",
    parentezcoReferenciaFamiliar: "",
    nombreReferenciaPersonal: "",
    apellidoReferenciaPersonal: "",
    ciudadReferenciaPersonal: "",
    telefonoReferenciaPersonal: "",
  });

  const [errorInfoReferencias, setErrorInfoRefencias] = useState({
    nombreReferenciaFamiliar: "",
    apellidoReferenciaFamiliar: "",
    ciudadReferenciaFamiliar: "",
    telefonoReferenciaFamiliar: "",
    parentezcoReferenciaFamiliar: "",
    nombreReferenciaPersonal: "",
    apellidoReferenciaPersonal: "",
    ciudadReferenciaPersonal: "",
    telefonoReferenciaPersonal: "",
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setInfoReferencias({
      ...infoReferencias,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (event) => {
    const field = event.target.name;

    setTouchInfoReferencias({
      ...touchInfoReferencias,
      [field]: true,
    });

    validar(event);
  };

  const validar = (event) => {
    const target = event.target;
    const { value, name } = target;

    if (value.length === 0) {
      setErrorInfoRefencias({
        ...errorInfoReferencias,
        [name]: true,
      });

      return;
    } else {
      setErrorInfoRefencias({
        ...errorInfoReferencias,
        [name]: false,
      });
    }
  };

  const displayError = (field, nombre) => {
    const errorMessage = `El campo ${nombre} `;

    if (errorInfoReferencias[field]) {
      return `${errorMessage} es obligatorio`;
    }
  };

  const onsubmitReferencias = (e) => {
    e.preventDefault();
    registroInfoReferencias(infoReferencias);

    localStorage.setItem("infoReferencias", JSON.stringify(infoReferencias))
    handleNext()
  };
  const {
    nombreReferenciaFamiliar,
    apellidoReferenciaFamiliar,
    ciudadReferenciaFamiliar,
    telefonoReferenciaFamiliar,
    parentezcoReferenciaFamiliar,
    nombreReferenciaPersonal,
    apellidoReferenciaPersonal,
    ciudadReferenciaPersonal,
    telefonoReferenciaPersonal,
  } = infoReferencias;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Referencias Familiares
      </Typography>
      {error && <Alertas mensaje="Todos los campos deben ser diligenciados" />}
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nombreReferenciaFamiliar"
              required
              name="nombreReferenciaFamiliar"
              label="Nombres Completos"
              fullWidth
              value={nombreReferenciaFamiliar}
              onBlur={handleBlur}
              error={errorInfoReferencias.nombreReferenciaFamiliar}
              onChange={handleChange}
              type="text"
              helperText={displayError(
                "nombreReferenciaFamiliar",
                "Nombres Completos"
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="apellidoReferenciaFamiliar"
              required
              name="apellidoReferenciaFamiliar"
              label="Apellidos Completos"
              fullWidth
              value={apellidoReferenciaFamiliar}
              onBlur={handleBlur}
              error={errorInfoReferencias.apellidoReferenciaFamiliar}
              onChange={handleChange}
              type="text"
              helperText={displayError(
                "apellidoReferenciaFamiliar",
                "Apellidos Completos"
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="ciudadReferenciaFamiliar"
              required
              name="ciudadReferenciaFamiliar"
              label="Ciudad"
              fullWidth
              value={ciudadReferenciaFamiliar}
              onBlur={handleBlur}
              error={errorInfoReferencias.ciudadReferenciaFamiliar}
              onChange={handleChange}
              type="text"
              helperText={displayError("ciudadReferenciaFamiliar", "Ciudad")}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="telefonoReferenciaFamiliar"
              required
              name="telefonoReferenciaFamiliar"
              label="Télefono"
              fullWidth
              value={telefonoReferenciaFamiliar}
              onBlur={handleBlur}
              error={errorInfoReferencias.telefonoReferenciaFamiliar}
              onChange={handleChange}
              type="number"
              helperText={displayError(
                "telefonoReferenciaFamiliar",
                "Télefono"
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="parentezcoReferenciaFamiliar"
              name="parentezcoReferenciaFamiliar"
              required
              label="Parentezco"
              fullWidth
              value={parentezcoReferenciaFamiliar}
              onBlur={handleBlur}
              error={errorInfoReferencias.parentezcoReferenciaFamiliar}
              onChange={handleChange}
              type="text"
              helperText={displayError(
                "parentezcoReferenciaFamiliar",
                "Parentezco"
              )}
            />
          </Grid>

          <Typography variant="h6" gutterBottom>
            Referencias Personales
          </Typography>
          <Grid container spacing={3}></Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="nombreReferenciaPersonal"
              required
              name="nombreReferenciaPersonal"
              label="Nombres Completos"
              fullWidth
              value={nombreReferenciaPersonal}
              onBlur={handleBlur}
              error={errorInfoReferencias.nombreReferenciaPersonal}
              onChange={handleChange}
              type="text"
              helperText={displayError(
                "nombreReferenciaPersonal",
                "Nombres Completos"
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="apellidoReferenciaPersonal"
              name="apellidoReferenciaPersonal"
              required
              label="Apellidos Completos"
              fullWidth
              value={apellidoReferenciaPersonal}
              onBlur={handleBlur}
              error={errorInfoReferencias.apellidoReferenciaPersonal}
              onChange={handleChange}
              type="text"
              helperText={displayError(
                "apellidoReferenciaPersonal",
                "Apellidos Completos"
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="ciudadReferenciaPersonal"
              required
              name="ciudadReferenciaPersonal"
              label="Ciudad"
              fullWidth
              value={ciudadReferenciaPersonal}
              onBlur={handleBlur}
              error={errorInfoReferencias.ciudadReferenciaPersonal}
              onChange={handleChange}
              type="text"
              helperText={displayError("ciudadReferenciaPersonal", "Ciudad")}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="telefonoReferenciaPersonal"
              required
              name="telefonoReferenciaPersonal"
              label="Télefono"
              fullWidth
              value={telefonoReferenciaPersonal}
              onBlur={handleBlur}
              error={errorInfoReferencias.telefonoReferenciaPersonal}
              onChange={handleChange}
              type="number"
              helperText={displayError(
                "telefonoReferenciaPersonal",
                "Télefono"
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
            onClick={onsubmitReferencias}
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
