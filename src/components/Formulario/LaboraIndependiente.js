import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {styleFormularios} from './FormularioStyle'
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormLabel from '@material-ui/core/FormLabel';
import Alertas from '../Alertas';

export default function LaboraIndependiente(props) {

  const { setActiveStep, activeStep, steps, registroInfoLaboral } = props;
  const [error, setError] = useState();


  const [infoIndependiente, setInfoIndependiente] = useState( (localStorage.getItem("infoIndependiente") === null) ? ({
    nombreCompletoIndependiente:'',
    ciudadIndependiente:'',
    direccionIndependiente:'',
    telefonoIndependiente:'',
    ingresosIndependiente:''
	}): JSON.parse(localStorage.getItem('infoIndependiente')));
 
	const [touchInfoIndependiente, setTouchInfoIndependiente] = useState({
        nombreCompletoIndependiente:'',
        ciudadIndependiente:'',
        direccionIndependiente:'',
        telefonoIndependiente:'',
        ingresosIndependiente:''
	});

	const [errorInfoIndependiente, setErrorInfoIndependiente] = useState({
        nombreCompletoIndependiente:'',
        ciudadIndependiente:'',
        direccionIndependiente:'',
        telefonoIndependiente:'',
        ingresosIndependiente:''
	});

    const classes = styleFormularios();

 

    const handleNext = () => {
      setActiveStep(activeStep + 1);
      };
    
      const handleBack = () => {
      setActiveStep(activeStep - 1);
      };

  
    const handleChange = (e) => {      
      setInfoIndependiente({
        ...infoIndependiente,
        [e.target.name]: e.target.value,
      });
    };


    const handleBlur = (event) => {
      const field = event.target.name;
      
      
      setTouchInfoIndependiente({
        ...touchInfoIndependiente, 
        [field]:true
      
      })
      
      validar(event)
      
    }
  
  
  
    const validar = (event) => {
      const target = event.target;
      const { value, name } = target;
  
  
      if (value.length === 0) {
      
        setErrorInfoIndependiente({
          ...errorInfoIndependiente,
          [name]: true
        });
    
        return;
      }else{
        setErrorInfoIndependiente({
          ...errorInfoIndependiente,
          [name]: false
        });
      }
  
    }

  
  
  
  
    const displayError = (field, nombre) => {
  
  
      const errorMessage = `El campo ${nombre} `;
      
      
      if (errorInfoIndependiente[field]) {
        return `${errorMessage} es obligatorio`;
      }
      
    
    }

    const onSubmitIndependiente = (e) => {
      e.preventDefault()
      
      if(
        nombreCompletoIndependiente.trim() === '' ||
        ciudadIndependiente.trim() === '' ||
        direccionIndependiente.trim() === '' ||
        telefonoIndependiente.trim() === '' ||
        ingresosIndependiente.trim() === '' 
        ){
        setError(true)
        return;
      }
      setError(false)
      localStorage.setItem("infoIndependiente", JSON.stringify(infoIndependiente))
      registroInfoLaboral(infoIndependiente)
      handleNext()
 
    }
  
 





    const { nombreCompletoIndependiente, ciudadIndependiente, direccionIndependiente, telefonoIndependiente, ingresosIndependiente } = infoIndependiente

  return (
    <React.Fragment>
      <form
      >
        {error && <Alertas mensaje = "Todos los campos deben ser diligenciados"/>}
          <Grid container className={classes.independiente}>
            
        <Grid item xs={12} sm={6}>
          <TextField
            id="nombreCompletoIndependiente"
            name="nombreCompletoIndependiente"
            label="Nombres Completos"
            required
            value={nombreCompletoIndependiente}
            onBlur={handleBlur}
            error={errorInfoIndependiente.nombreCompletoIndependiente}
            onChange={handleChange}
            type="text"  
            helperText= {displayError('nombreCompletoIndependiente', 'Nombres Completos')}         
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="ciudadIndependiente"
            name="ciudadIndependiente"
            label="Ciudad"
            value={ciudadIndependiente}
            required
            onBlur={handleBlur}
            error={errorInfoIndependiente.ciudadIndependiente}
            onChange={handleChange}
            type="text"  
            helperText= {displayError('ciudadIndependiente', 'Ciudad')}         
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="direccionIndependiente"
            name="direccionIndependiente"
            label="Dirección"
            value={direccionIndependiente}
            required
            onBlur={handleBlur}
            error={errorInfoIndependiente.direccionIndependiente}
            onChange={handleChange}
            type="text"  
            helperText= {displayError('direccionIndependiente', 'Dirección')}         
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="telefonoIndependiente"
            name="telefonoIndependiente"
            label="Teléfono"
            required
            value={telefonoIndependiente}
            onBlur={handleBlur}
            error={errorInfoIndependiente.telefonoIndependiente}
            onChange={handleChange}
            type="number"  
            helperText= {displayError('telefonoIndependiente', 'Teléfono')}         
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="ingresosIndependiente"
            name="ingresosIndependiente"
            required
            label="Ingresos"
            value={ingresosIndependiente}
            onBlur={handleBlur}
            error={errorInfoIndependiente.ingresosIndependiente}
            onChange={handleChange}
            type="number"  
            helperText= {displayError('ingresosIndependiente', 'Ingresos')}         
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
				

        onClick={onSubmitIndependiente}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    >
                    {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
                  </Button>
                </div>
        </form>

    </React.Fragment>
  );
}

