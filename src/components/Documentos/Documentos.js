import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display:'flex'
      
    },
  },
  input: {
    display: 'none',
},

label: {
    borderRadius: 50,
    
  },

  title: {
      fontWeight: 600,
      fontSize: 30
      
  },

  campo: {
    borderRadius: 50,
    background: '#0074bc',
    color: '#fff',
    margin: '0px 20px',
    padding: '5px 50px',
    fontWeight: 600,
    fontSize: 30

  },

  contenedorDatoTitle: {
      display:'flex',
      width: '100%',
        marginTop: 40,
        marginBottom: 20
  },

  contenedorDato: {
      display:'flex',
      width: '100%',
      margin: 30
  },

  titleSolicitud: {
      fontSize: 18,
      width: '40%',
      
  },

  containerA:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  }

}));

export default function Documentos() {
  const classes = useStyles();

  return (
    <div className={classes.containerA}>
            <div className={classes.contenedorDatoTitle}>
                <Typography className={classes.title} color="textSecondary">
                    Cupo Disponible
                </Typography>
                <Typography className={classes.campo} color="textSecondary">
                    $ 120.000
                </Typography>
            </div>

            <Typography className={classes.title} color="textSecondary">
                Adjuntar Archivos:
            </Typography>

        <div className={classes.contenedorDato}>
            <Typography className={classes.titleSolicitud} color="textSecondary">
                    Último Extracto Bancario o Certificado Bancario
            </Typography>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span"className={classes.label} >
                Seleccionar Archivo
                </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        </div>
        <div className={classes.contenedorDato}>
            <Typography className={classes.titleSolicitud} color="textSecondary">
                    Cuenta de Servicios
            </Typography>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span"className={classes.label} >
                Seleccionar Archivo
                </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        </div>
        <div className={classes.contenedorDato}>
            <Typography className={classes.titleSolicitud} color="textSecondary">
                Desprendible de Última Nomina o declaración
            </Typography>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span"className={classes.label} >
                Seleccionar Archivo
                </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        </div>
    </div>
  );
}