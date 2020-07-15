import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import Modelo from "../../img/modelo.png";
import clienteAxios from "../../config/axios";
import { withRouter } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link as Llink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Easy credit
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Modelo})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Registrar = (props) => {

  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
    confirmar_email: "",
    confirmPassword: "",
  });

  const leerDatos = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const registro = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, confirmar_email } = credenciales;

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      confirmar_email.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Todos los campos deben ser diligenciados",
      });
      return;
    }

    if (confirmPassword !== password || confirmar_email !== email) {
      Swal.fire({
        icon: "error",
        title: "Los datos suministrados no coinciden",
      });
      return;
    }

    try {
      const respuesta = await clienteAxios.post("/cuenta", credenciales);

      const { token } = respuesta.data;
      localStorage.setItem("token", token);

      //alerta
      Swal.fire("Tu Registro fue exitoso", "Has iniciado Sesion", "success");

      //redireccionar
      props.history.push("/formulario-registro");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: error.response.data.mensaje,
      });
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro 
          </Typography>
          <form onSubmit={registro} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              onChange={leerDatos}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirmar_email"
              label="Confirma tu correo Electronico"
              name="confirmar_email"
              onChange={leerDatos}
              autoComplete="confirmar_email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={leerDatos}
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              inputProps={{ minLength: 2 }}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={leerDatos}
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <br />
            <br />
            <Link href="#" onClick={handleOpen}>
              Politica de Datos
            </Link>
            <br />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
              label="Acepto terminos y condiciones"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!checked}
            >
              Registrarme
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvido su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Llink to="/iniciar-sesion" variant="body2">
                  ¿Tienes cuenta?, Ingresa
                </Llink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paperModal}>
                <h2 id="transition-modal-title">
                  Política de tratamiento de datos Aviso de Privacidad
                </h2>
                <p id="transition-modal-description">Texto</p>
              </div>
            </Fade>
          </Modal>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(Registrar);
