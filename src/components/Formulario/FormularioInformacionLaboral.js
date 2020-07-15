import React from "react";
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
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormLabel from "@material-ui/core/FormLabel";
import LaboraDependiente from "./LaboraDependiente";
import LaboraIndependiente from "./LaboraIndependiente";
import LaboraDesempleado from "./LaboraDesempleado";
import LaboralPensionado from "./LaboraPensionado";

export default function FormularioInformacionLaboral({ activeStep ,  registroPensionado, setActiveStep,  steps,  registroInfoLaboral}) {
  const classes = styleFormularios();

  const [selectedDate, setSelectedDate] = React.useState(new Date());


  const [state, setState] = React.useState({
    situacionLaboral:''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    
    setState({
        ...state,
        [name]: event.target.value,
    });
   // estadoLaboral(state)
   console.log(state.situacionLaboral);
   
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información Laboral
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="situacionLaboral">
              ¿Cúal es su situación laboral actual?
            </InputLabel>
            <Select
              native
              value={state.situacionLaboral}
              onChange={handleChange}
              inputProps={{
                name: "situacionLaboral",
                id: "situacionLaboral",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"dependiente"}>Empleado</option>
              <option value={"independiente"}>Independiente</option>
              <option value={"desempleado"}>Desempleado</option>
              <option value={"pensionado"}>Pensionado</option>
            </Select>
            {(state.situacionLaboral === 'dependiente') && <LaboraDependiente registroInfoLaboral={registroInfoLaboral}
             activeStep ={activeStep}  setActiveStep ={setActiveStep} steps={steps} /> }
            {(state.situacionLaboral === 'independiente') && <LaboraIndependiente registroInfoLaboral={registroInfoLaboral}
             activeStep ={activeStep}  setActiveStep ={setActiveStep} steps={steps}
            /> }
            {(state.situacionLaboral === 'desempleado') && <LaboraDesempleado registroInfoLaboral={registroInfoLaboral}
             activeStep ={activeStep}  setActiveStep ={setActiveStep} steps={steps}/> }
            {(state.situacionLaboral === 'pensionado') && <LaboralPensionado  registroInfoLaboral={registroInfoLaboral}
             activeStep ={activeStep}  setActiveStep ={setActiveStep} steps={steps}/> }
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
