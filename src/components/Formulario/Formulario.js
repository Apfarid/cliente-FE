import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Typography from "@material-ui/core/Typography";
import { styleFormularios } from "./FormularioStyle";
import FormularioInformacionPersonal from "./FormularioInformacionPersonal";
import FormularioInformacionFinanciera from "./FormularioInformacionFinanciera";
import FormularioInformacionLaboral from "./FormularioInformacionLaboral";
import FormularioInformacionReferencia from "./FormularioInformacionReferencia";
import FormularioFinal from "./FormularioFinal";
import { withRouter } from "react-router-dom";
import { crearUsuario } from "../../actions/usuarioAction";
import { useDispatch, useSelector } from "react-redux";

const steps = ["Personal", "Financiera", "Laboral", "Referencias", ""];

const Formulario = (props) => {
  const [cliente, setCliente] = useState({});

  const registroInfoPersonal = (infomacionPersonal) => {
    setCliente({
      ...cliente,
      infomacionPersonal,
    });
  };

  const registroInfoFinanciera = (infomacionFinanciera) => {
    setCliente({
      ...cliente,
      infomacionFinanciera,
    });
  };

  const registroInfoLaboral = (infomacionLaboral) => {
    setCliente({
      ...cliente,
      infomacionLaboral,
    });
  };

  const registroInfoReferencias = (infomacionReferencias) => {
    setCliente({
      ...cliente,
      infomacionReferencias,
      censado: "si",
    });
  };

  const activar = () => {
    enviar();
  };

  const dispatch = useDispatch();

  const crearInformacion = (infoCliente) => dispatch(crearUsuario(infoCliente));

  const enviar = () => {
    /*     localStorage.removeItem("infoPersonal");
    localStorage.removeItem("infoFinanciera");
    localStorage.removeItem("infoDesempleado");
    localStorage.removeItem("infoReferencias");
    localStorage.removeItem("infoIndependiente"); */
    let datos = cliente;
    crearInformacion(datos);
    props.history.push("/inicio");
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <FormularioInformacionPersonal
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            steps={steps}
            registroInfoPersonal={registroInfoPersonal}
          />
        );
      case 1:
        return (
          <FormularioInformacionFinanciera
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            steps={steps}
            registroInfoFinanciera={registroInfoFinanciera}
          />
        );
      case 2:
        return (
          <FormularioInformacionLaboral
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            steps={steps}
            registroInfoLaboral={registroInfoLaboral}
          />
        );
      case 3:
        return (
          <FormularioInformacionReferencia
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            steps={steps}
            registroInfoReferencias={registroInfoReferencias}
          />
        );
      case 4:
        return (
          <FormularioFinal
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            steps={steps}
            activar={activar}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const classes = styleFormularios();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Información
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep !== steps.length && (
              <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default withRouter(Formulario);
