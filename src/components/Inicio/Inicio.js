import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import Hidden from '@material-ui/core/Hidden';
import Modelo from "../../img/modelo.png";
import CardActions from '@material-ui/core/CardActions';
import {Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  titulo: {
 
  fontSize: '40px', 
  color: '#ffde2e',
  textAlign: 'center',
  textTransform: 'uppercase', 
  fontFamily: 'Raleway', 
  
  marginBottom: 5,

},

  texto: {
  fontSize: '30px', 
  color: '#0074bc',
  textAlign: 'center',
  fontFamily: 'Raleway',
  },

  botones:{
    margin: '0 auto',
   fontWeight: 600,
		borderRadius: 13,
		margin: 5,
		fontSize: 15,
		width: "100%",

  },
  botom: {
		background: "#ffde2e",
		fontWeight: 600,
		borderRadius: 13,
		margin: 5,
		fontSize: 15,
		width: "50%",
		margin: '0 auto',

	},
}));

const Inicio = (props) => {
  const classes = useStyles();

  


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden only={['xs', 'sm']}>
      <Grid item xs={12}>
    <h2 className={classes.titulo}><strong>¡ B I E N V E N I D O !</strong></h2>
    </Grid>
    </Hidden>
    <Grid item xs={12}>
      <h2 className={classes.texto} > Para solicitar el estudio de tu crédito da clic aquí.</h2>
      </Grid>
      
      <Grid item xs={12}>
      <CardActions className={classes.botones}>
        <Button
                  component = {Link}
                  to= '/solicitud-credito'
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                  className={classes.botom}
                >
                  ¡SOLICITA YA!
        </Button>
      </CardActions>
      </Grid>
    </Grid>
  )
};

export default (Inicio);