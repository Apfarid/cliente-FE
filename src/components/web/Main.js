import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./Main.css";
import logoblanco from "../../img/logoBlanco.png";
import slide from "../../img/slide.png";
import fondobannercontacto from "../../img/fondobannercontacto.png";
import slide1pagos from "../../img/slide1pagos.png";
import slide2pagos from "../../img/slide2pagos.png";
import Calculadora from "./Calculadora/Calculadora";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import Hidden from "@material-ui/core/Hidden";
import PeopleAltSharpIcon from "@material-ui/icons/PeopleAltSharp";
import CreditCardSharpIcon from "@material-ui/icons/CreditCardSharp";
import DraftsSharpIcon from "@material-ui/icons/DraftsSharp";
import PhoneIphoneSharpIcon from "@material-ui/icons/PhoneIphoneSharp";
import AddLocationSharpIcon from "@material-ui/icons/AddLocationSharp";
import PhoneInTalkSharpIcon from "@material-ui/icons/PhoneInTalkSharp";
import PhoneAndroidSharpIcon from "@material-ui/icons/PhoneAndroidSharp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import LinearProgress from "@material-ui/core/LinearProgress";
import RecordVoiceOverOutlinedIcon from "@material-ui/icons/RecordVoiceOverOutlined";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleSharpIcon from "@material-ui/icons/CheckCircleSharp";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import modelo from "../../img/MODELO-QUIENES-SOMOS.png";
import { Link as Llink, withRouter } from "react-router-dom";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    marginRight: "40px",
    marginTop: "40px",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    width: 200,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#0074bc",
    borderColor: "#0063cc",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    height: 132,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },

  drawerHeaders: {
    backgroundColor: "#0074bc",
    width: 250,
    
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.rwot}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <section className="header">
              <header>
                <ul className="headerFirstLine">
                  <Hidden only={["xs", "sm", "md"]}>
                    <li className="headerFirstLineLI">
                      <LanguageSharpIcon className="headerIcon" />
                      Prestamos 100% online, sin comisiones ni pagos por
                      adelantado
                    </li>
                    <li className="headerFirstLineLI">
                      <DraftsSharpIcon className="headerIcon" />
                      ayuda@easycreditcolombia.com
                    </li>
                    <li className="headerFirstLineLI">
                      <PhoneAndroidSharpIcon className="headerIcon" />
                      317 365 87 87
                    </li>
                  </Hidden>
                </ul>
              </header>

              <nav>
                <Grid item xs={12}>
                  <ul className="headerSecondLine">
                    <li href="index.html" className=" ">
                      <img src={logoblanco} className="logoeasy" />
                    </li>
                    <Hidden only={["sm", "md", "xs"]}>
                      <li>
                        {" "}
                        <a className="cambioa" href="#inicio">
                          Incio{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="cambioa" href="#pasos">
                          {" "}
                          Como adquirirlo
                        </a>
                      </li>
                      <li>
                        <a className="cambioa" href="#quienessomos">
                          Quienes somos
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="cambioa" href="#porqueelegirnos">
                          Porque elegirnos
                        </a>{" "}
                      </li>
                      <li>
                        <a className="cambioa" href="#contacto">
                          Contacto
                        </a>
                      </li>
                    </Hidden>
                  </ul>
                </Grid>
              </nav>
            </section>
          </Typography>
          <Hidden only={["xl", "lg"]}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Fragment>
          <div className="top"></div>

          <Grid container>
            <Grid item xs={12} md={6}>
              <section className="calculadora" id="inicio">
                <Calculadora />
                <Hidden only={["xs", "sm", "md"]}>
                  <Grid item xs={12}>
                    <div className="botonesRegistro">
                      <BootstrapButton
                        component={Link}
                        to="/iniciar-sesion"
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
                        Iniciar Sesión
                      </BootstrapButton>

                      <BootstrapButton
                        component={Link}
                        to="/crear-cuenta"
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                      >
                        Regístrate
                      </BootstrapButton>
                    </div>
                  </Grid>
                </Hidden>
              </section>
            </Grid>

            <Hidden only={["xs"]}>
              <Grid item md={6} className="modelocalculadora d-block w-100">
                <img src={slide} />
              </Grid>
            </Hidden>
          </Grid>

          <Hidden only={["lg", "xl", "md"]}>
          <Grid item xs={12}>
            <Card>
              <CardContent className="cajapasos h1" >
                
                <Typography className="tituloporque2">
                  <h2>Requisitos para obtener un crédito</h2>
                  
                    <p className="requisitotexto1">
                    <PeopleAltSharpIcon className="icono" fontSize="large" />
                      Ser mayor de edad colombiano residente
                    </p>
                 
                  
                    <p className="requisitotexto1">
                    <CreditCardSharpIcon className="icono" fontSize="large" />
                      Tener cuenta bancaria a tu nombre
                    </p>
                  
                  
                    <p className="requisitotexto1">
                    <DraftsSharpIcon className="icono" fontSize="large" />
                      Tener correo propio</p>
                  
                    <p className="requisitotexto1">
                    <PhoneIphoneSharpIcon className="icono" fontSize="large" />
                      Tener línea de celular propia
                    </p>
                    
                </Typography>
                
              </CardContent>
            </Card>
            </Grid>
          </Hidden>
         
          <Hidden only={["xs", "sm"]}>
            <Grid container className="contenedorrequisitos">
              <Grid item xs={12}>
                <div className="cajarequisitos" id="requisitos">
                  <h2>Requisitos para obtener un crédito</h2>
                </div>

                <div className="requisitos">
                  <div className="requisitoscaja">
                    <PeopleAltSharpIcon className="icono" fontSize="large" />
                    <p className="requisitotexto">
                      Ser mayor de edad colombiano residente
                    </p>
                  </div>
                  <div className="requisitoscaja">
                    <CreditCardSharpIcon className="icono" fontSize="large" />
                    <p className="requisitotexto">
                      Tener cuenta bancaria a tu nombre
                    </p>
                  </div>
                  <div className="requisitoscaja">
                    <DraftsSharpIcon className="icono" fontSize="large" />
                    <p className="requisitotexto">Tener correo propio</p>
                  </div>
                  <div className="requisitoscaja">
                    <PhoneIphoneSharpIcon className="icono" fontSize="large" />
                    <p className="requisitotexto">
                      Tener línea de celular propia
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden only={["xs", "sm", "md"]}>
            <Grid container className="pasos" id="8pasos">
              <div className="cajapasos">
                <h1 id="pasos">8 Pasos para adquirir tu crédito</h1>
              </div>
              <Grid item xs={12} className="lista">
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>1</h6>
                  </div>
                  <p>Calcular Crédito</p>
                </div>

                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>2</h6>
                  </div>
                  <p>Solicitar Crédito</p>
                </div>
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>3</h6>
                  </div>
                  <p>Solicitud de Datos</p>
                </div>
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>4</h6>
                  </div>
                  <p>Validación de Datos</p>
                </div>
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>5</h6>
                  </div>
                  <p>Resultado de la Solicitud</p>
                </div>
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>6</h6>
                  </div>
                  <p className="p">Firma de Contrato</p>
                </div>
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>7</h6>
                  </div>
                  <p className="p">Desembolso</p>
                </div>
                <div className="contenidopasos">
                  <div className="circlecontenidopasos1">
                    <h6>8</h6>
                  </div>
                  <p>Pago</p>
                </div>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden only={["lg", "xl"]}>
            <Card>
              <CardContent className="root2">
                <Grid item xs={12}>
                  <div className="cajapasos" id="pasos">
                    <h1>8 Pasos para adquirir tu crédito</h1>
                  </div>
                  <br />
                  <br />

                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    1. Calcular Crédito
                  </Typography>

                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    2. Solicitar Crédito
                  </Typography>
                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    3. Solicitud de Datos
                  </Typography>

                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    4. Validación de Datos
                  </Typography>

                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    5. Resultado de la Solicitud
                  </Typography>
                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    6. Firma de Contrato
                  </Typography>
                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    7. Desembolso
                  </Typography>
                  <Typography variant="titulo-8pasospararoot" component="h2">
                    <AssignmentTurnedInIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    8. Pago
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Hidden>

          <Hidden only={["xs", "sm", "md"]}>
            <Grid
              container
              item
              xs={12}
              id="porqueelegirnos"
              className="contenedor_porqueelegirnos"
            >
              <div>
                <h1 className="titulo-porque-elegirnos">¿Por qué elegirnos?</h1>

                <div className="opciones">
                  <Grid container>
                    <Grid item xs={12} md={6} className="opcion-item">
                      <div className="">
                        <h1>Préstamos Rápidos</h1>
                        <p>100%</p>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={6} className="opcion-item">
                      <div className="">
                        <h1>Experiencia</h1>
                        <p>100%</p>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} className="opcion-item">
                      <div className="">
                        <h1>Transparencia en todos los procesos</h1>
                        <p>100%</p>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={6} className="opcion-item">
                      <div className="">
                        <h1>Plataformas Seguras (Certificado SSL)</h1>
                        <p>100%</p>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={6} className="opcion-item">
                      <div className="">
                        <h1>Atención Financiera sin larga filas</h1>
                        <p>100%</p>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={6} className="opcion-item">
                      <div className="">
                        <h1>Rapido y Confiable</h1>
                        <p>100%</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Hidden>

          <Hidden only={["lg", "xl"]}>
            <Card>
              <CardContent className="root" id="porqueelegirnos">
                <Typography>
                  <h1 className="titulo-porque-elegirnoscard">
                    ¿Por qué elegirnos?
                  </h1>
                </Typography>

                <Typography
                  variant="titulo-porque-elegirnosroot"
                  component="h2"
                >
                  <CheckCircleSharpIcon
                    className="iconoamarillo"
                    fontSize="large"
                  />
                  Préstamos Rápidos
                </Typography>
                <Typography
                  variant="titulo-porque-elegirnosroot"
                  component="h2"
                >
                  <CheckCircleSharpIcon
                    className="iconoamarillo"
                    fontSize="large"
                  />
                  Experiencia
                </Typography>
                <Typography
                  variant="titulo-porque-elegirnosroot"
                  component="h2"
                >
                  <CheckCircleSharpIcon
                    className="iconoamarillo"
                    fontSize="large"
                  />
                  Transparencia en todos los procesos
                </Typography>

                <Typography
                  variant="titulo-porque-elegirnosroot"
                  component="h2"
                >
                  <CheckCircleSharpIcon
                    className="iconoamarillo"
                    fontSize="large"
                  />
                  Plataformas Seguras (Certificado SSL)
                </Typography>

                <Typography
                  variant="titulo-porque-elegirnosroot"
                  component="h2"
                >
                  <CheckCircleSharpIcon
                    className="iconoamarillo"
                    fontSize="large"
                  />
                  Atención Financiera sin larga filas
                </Typography>

                <Typography
                  variant="titulo-porque-elegirnosroot"
                  component="h2"
                >
                  <CheckCircleSharpIcon
                    className="iconoamarillo"
                    fontSize="large"
                  />
                  Rapido y Confiable
                </Typography>
              </CardContent>
            </Card>
          </Hidden>

          <Grid container className="quienessomos" id="quienessomos">
            <Hidden only={["xs", "sm"]}>
              <Grid item lg={6} md={6} className="modeloquienessomos">
                <img src={modelo} className="imgmodeloquienessomos" />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className="quienesomostexto">
              <h6>¿Quiénes Somos?</h6>
              <div className="cajaquienesson">
                <p>
                  Somos una compañía constituida legalmente en Colombia, nuestra
                  organización está destinada al servicio de{" "}
                  <strong className="strong">crédito en línea</strong>, de fácil
                  acceso a nivel nacional, brindando servicio las 24 horas del
                  día de los 7 días de la semana.
                </p>
                <h6>Misión</h6>
                <p>
                  Proporcionar la mejor opción para los procesos de micro
                  prestamos las 24 horas del día, los 7 días a la semana, a
                  través de una plataforma virtual fácil, rápida y segura.
                </p>
                <h6>Visión</h6>
                <p>
                  En el 2025 seremos reconocidos como líderes en el mercado
                  virtual de micro prestamos 24/7 que beneficia a personas que
                  requieren un préstamo fácil, rápido y confiable. Nuestro
                  compromiso es mejorar continuamente para ofrecerle a nuestros
                  clientes total trasparencia, seguridad y confiabilidad, por
                  medio de un equipo humano competente que mantiene altos
                  niveles de calidad y servicio.
                </p>
              </div>
              <br />
              <br />
              <br />
            </Grid>
          </Grid>

          <Grid container>
            <section className="contenedorcarrusel">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <img
                    src={fondobannercontacto}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>

                <div>
                  <div className="carousel-item active">
                    <img
                      src={slide2pagos}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={slide1pagos}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </section>
          </Grid>
          <Grid
            container
            className="contenedor_InformacióndeContacto"
            id="contacto"
            item
            xs={12}
          >
            <section
              className="titulo_InformacióndeContacto"
              id="contacto"
              item
              xs={6}
            >
              <h1>Información de Contacto</h1>
              <ul>
                <li>
                  <h6 className="">
                    <AddLocationSharpIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    <strong className="tituloinformacioncontacto">
                      Dirección:
                    </strong>
                    Calle 44 # 79-86 Of 207
                  </h6>
                </li>
                <li>
                  <h6 className="">
                    <PhoneInTalkSharpIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    <strong className="tituloinformacioncontacto">
                      Teléfono:
                    </strong>
                    317 365 87 87
                  </h6>
                </li>
                <li>
                  <h6 className="">
                    <DraftsSharpIcon
                      className="iconoamarillo"
                      fontSize="large"
                    />
                    <strong className="tituloinformacioncontacto">
                      Correo:
                    </strong>
                    ayuda@easycreditcolombia.com
                  </h6>
                </li>
                <li>
                  <h6 className="">
                    <FacebookIcon className="iconoamarillo" fontSize="large" />
                    <strong className="tituloinformacioncontacto">
                      Facebook:
                    </strong>
                    <a
                      href="https://www.facebook.com/easycreditcolombia/"
                      target="_blank"
                    >
                      @easycreditcolombia
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className="">
                    <InstagramIcon className="iconoamarillo" fontSize="large" />

                    <strong className="tituloinformacioncontacto">
                      Instagram:
                    </strong>
                    <a
                      href="https://www.instagram.com/easycreditcolombia/"
                      target="_blank"
                    >
                      easycreditcolombia
                    </a>
                  </h6>
                </li>
              </ul>
            </section>

            <Hidden only={["xs", "sm"]}>
              <div className="titulo_InformacióndeContacto2">
                <Grid item xs={6}>
                  <div className="espacioformcontacto">
                    <form method="post" action="enviar-formulario.php">
                      <div className="form-row">
                        <select className="form-control " name="servicio">
                          <option>Pregunta por el Servicio</option>
                          <option value="Asesoría con un agente">
                            Asesoría con un agente
                          </option>
                        </select>
                      </div>

                      <div className="espacioformcontacto"></div>

                      <div className="form-row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre Completo"
                            name="nombre_contacto"
                            id="nombre_contacto"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apellidos"
                            name="apellidos_contacto"
                            id="apellidos_contacto"
                            required
                          />
                        </div>
                      </div>

                      <div className="espacioformcontacto"></div>

                      <div className="form-row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            name="email_contacto"
                            id="email_contacto"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Celular"
                            name="celular_contacto"
                            id="celular_contacto"
                            required
                          />
                        </div>
                      </div>
                      <BootstrapButton
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
                        Enviar
                      </BootstrapButton>
                    </form>
                  </div>
                </Grid>
              </div>
            </Hidden>
          </Grid>

          <Hidden only={["md", "lg", "xl"]}>
            <Card>
              <CardActions>
                <div className="titulo_InformacióndeContacto3">
                  <Grid item xs={12}>
                    <div className="espacioformcontacto">
                      <form method="post" action="enviar-formulario.php">
                        <div className="form-row">
                          <select className="form-control " name="servicio">
                            <option>Pregunta por el Servicio</option>
                            <option value="Asesoría con un agente">
                              Asesoría con un agente
                            </option>
                          </select>
                        </div>

                        <div className="espacioformcontacto"></div>

                        <div className="form-row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nombre Completo"
                              name="nombre_contacto"
                              id="nombre_contacto"
                              required
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Apellidos"
                              name="apellidos_contacto"
                              id="apellidos_contacto"
                              required
                            />
                          </div>
                        </div>

                        <div className="espacioformcontacto"></div>

                        <div className="form-row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              name="email_contacto"
                              id="email_contacto"
                              required
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Celular"
                              name="celular_contacto"
                              id="celular_contacto"
                              required
                            />
                          </div>
                        </div>
                        <BootstrapButton
                          variant="contained"
                          color="primary"
                          disableRipple
                        >
                          Enviar
                        </BootstrapButton>
                      </form>
                    </div>
                  </Grid>
                </div>
              </CardActions>
            </Card>
          </Hidden>

          <Grid container>
            <footer className="footer">
              <Grid item xs={6} md={4}>
                <img src={logoblanco} className="logofooter logo1" />
                <br />
                <br />
                <p className="textoeasyfooter">
                  EASYCREDITCOLOMBIA.COM es una compañía legalmente constituida
                  en Colombia bajo el nombre EASY CREDIT COLOMBIA S.A.S.
                </p>

                <h6 className="tittlefollowfooter">Síguenos:</h6>
                <div className="cajasocialmediafooter">
                  <div className="facebook">
                    <a
                      href="https://www.facebook.com/easycreditcolombia/"
                      target="_blank"
                    >
                      <FacebookIcon
                        className="iconoamarillo"
                        fontSize="large"
                      />
                    </a>
                  </div>
                  <div className="facebook">
                    <a
                      href="https://www.instagram.com/easycreditcolombia/"
                      target="_blank"
                    >
                      <InstagramIcon
                        className="iconoamarillo"
                        fontSize="large"
                      />
                    </a>
                  </div>
                </div>
              </Grid>

              <Hidden only={["xs", "sm", "md"]}>
                <Grid item xs={6} className="footerContainer">
                  <h1 className="infocontactofooter">Contacto</h1>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <div className="row direccionfooter">
                        <AddLocationSharpIcon
                          className="iconoamarillo"
                          fontSize="large"
                        />
                        <p className="adressfooter">Calle 44 # 79-86 Of 207</p>
                      </div>
                    </li>
                    <br />
                    <br />
                    <li>
                      <div className="row direccionfooter">
                        <PhoneInTalkSharpIcon
                          className="iconoamarillo"
                          fontSize="large"
                        />
                        <p className="adressfooter">317 365 87 87</p>
                      </div>
                    </li>
                    <br />
                    <br />
                    <li>
                      <div className="row direccionfooter">
                        <DraftsSharpIcon
                          className="iconoamarillo"
                          fontSize="large"
                        />
                        <p className="adressfooter">
                          ayuda@easycreditcolombia.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </Grid>
              </Hidden>
            </footer>
          </Grid>

          <Grid item xs={12} className="footerbottom">
            <h6>2020, EasyCreditColombia. Todos los derechos reservados</h6>
          </Grid>
        </Fragment>
      </main>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Grid item xs={12} className={classes.drawerHeaders}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon className="iconoamarillo" fontSize="large" />
              ) : (
                <ChevronLeftIcon className="iconoamarillo" fontSize="large" />
              )}
            </IconButton>
          </div>
          <Divider />
          <List className="menuresponsive">
            <li>
              {" "}
              <MenuIcon className="iconoamarillo" fontSize="large" />
              <a className="cambioa" href="#inicio">
                Incio{" "}
              </a>{" "}
            </li>
            <br />
            <br />

            <li>
              {" "}
              <PhoneAndroidSharpIcon
                className="iconoamarillo"
                fontSize="large"
              />
              <a className="cambioa" href="#pasos">
                {" "}
                Como adquirirlo
              </a>
            </li>
            <br />
            <br />
            <li>
              <LanguageSharpIcon className="iconoamarillo" fontSize="large" />
              <a className="cambioa" href="#quienessomos">
                Quienes somos
              </a>
            </li>
            <br />
            <br />
            <li>
              {" "}
              <CreditCardSharpIcon className="iconoamarillo" fontSize="large" />
              <a className="cambioa" href="#porqueelegirnos">
                Porque elegirnos
              </a>{" "}
            </li>
            <br />
            <br />
            <li>
              <AssignmentTurnedInIcon
                className="iconoamarillo"
                fontSize="large"
              />
              <a className="cambioa" href="#contacto">
                Contacto
              </a>
            </li>
            <br />
            <br />
            <li>
            
             <a className="cambioa" href="/iniciar-sesion"
                        component={Link}
                        to="/iniciar-sesion"
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
              <PeopleAltSharpIcon className="iconoamarillo" fontSize="large" />
                        Iniciar Sesión
                      </a>
             

              
            </li>
          </List>
        </Grid>
      </Drawer>
    </div>
  );
}
