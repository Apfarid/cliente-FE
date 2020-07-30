import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Logo from "../../img/logoBlanco.png";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Hidden } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@material-ui/icons/Description";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HistoryIcon from "@material-ui/icons/History";
import { Link as Llink, withRouter } from "react-router-dom";
import ReplayIcon from "@material-ui/icons/Replay";
import PaymentIcon from "@material-ui/icons/Payment";
import HomeIcon from "@material-ui/icons/Home";
import { consultaInfoUsuario } from "../../actions/usuarioAction";
import { verCredito } from "../../actions/gestionCreditoActions";
import { renovarCredito } from "../../Helper";

import clienteAxios from "../../config/axios";

import { useDispatch, useSelector } from "react-redux";
import {
  format,
  addDays,
  differenceInDays,
  differenceInCalendarDays,
} from "date-fns";

let hoy = new Date();
let disabledSolicitudCredito;
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    margin: "0 auto",
    position: "relative",
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    width: 180,
    height: 50,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  buttonProfile: {
    color: "#fff",
    border: "2px solid #ffde2e",
    margin: 0,
    padding: 0,
  },
  saludo: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  items: {
    display: "flex",
    alignItems: "center",
  },
}));

const Sidebar = ({ children, history }) => {
  const usuarioDispatch = useDispatch();
  const creditoDispatch = useDispatch();
  const [credito, setCredito] = useState([]);
  const [nombreUser, setNombreUser] = useState("");

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const InfoUsuario = useSelector((state) => state.Usuario);
  const InfoCredito = useSelector((state) => state.gestionCreditos.credito);

  const cerrarSesion = () => {
    setAnchorEl(null);
    //localStorage.clear();
    localStorage.setItem("token", "");
    localStorage.setItem("censo", "");
    localStorage.setItem("state", "");

    history.push("/");
  };

  const opcionesCliente = async () => {
    const respuesta = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setCredito(respuesta.data.credito);
  };

  useEffect(() => {
    const solicitarInfoUsuario = () => usuarioDispatch(consultaInfoUsuario());
    const solicitarInfoCredito = () => creditoDispatch(verCredito());
    opcionesCliente();
    solicitarInfoUsuario();
    solicitarInfoCredito();
  }, []);

  function solicitudCredito(credito) {
    disabledSolicitudCredito =
      credito?.solicitudCredito === true ? true : false;
    return disabledSolicitudCredito;
  }

  useEffect(() => {
    solicitudCredito();
  }, [InfoCredito]);

  let contrato = credito?.aprobado === true || credito?.desembolsado === true;
  let liquidaciones = false;
  let liquidarDesabled = false;

  if (credito?.desembolsado === null || credito?.desertado === true) {
    liquidaciones = true;
  }
  if (credito?.fechaFirma === null) {
    liquidarDesabled = true;
  }
  if (credito === null) {
    liquidarDesabled = true;
  }
  if (credito?.desembolsado === null) {
    liquidarDesabled = true;
  }
  let renovacion = renovarCredito(InfoCredito);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <img src={Logo} className={classes.logo} />
          </Typography>
          <div className={classes.items}>
            <Hidden only={["xs", "sm"]}>
              <span className={classes.saludo}>
                Hola! {InfoUsuario?.usuario?.nombres}
              </span>
            </Hidden>
            <IconButton
              aria-label="delete"
              className={classes.buttonProfile}
              onClick={handleClick}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Llink} to="/perfil">
              Perfil
            </MenuItem>
            <MenuItem onClick={cerrarSesion}>Salir</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {" "}
          <ListItem
            button
            component={Llink}
            to="/inicio"
            disabled={localStorage.getItem("censo") !== "si" ? true : false}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem
            button
            component={Llink}
            to="/contrato"
            disabled={!contrato}
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Contrato" />
          </ListItem>
          <ListItem
            button
            component={Llink}
            to="/solicitud-credito"
            disabled={disabledSolicitudCredito}
          >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Solicitud Credito" />
          </ListItem>
          <ListItem
            button
            component={Llink}
            to="/historico-credito"
            disabled={
              localStorage.getItem("censo") !== "si"
                ? true
                : false || InfoCredito?.solicitudCredito === true
                ? true
                : false
            }
          >
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Historico Creditos" />
          </ListItem>
          <ListItem
            button
            component={Llink}
            to="/liquidar-credito"
            disabled={liquidarDesabled}
          >
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Liquidar Credito" />
          </ListItem>
          <ListItem
            button
            component={Llink}
            to="/renovacion-credito"
            disabled={renovacion}
          >
            <ListItemIcon>
              <ReplayIcon />
            </ListItemIcon>
            <ListItemText primary="Renovación Credito" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
    </div>
  );
};

export default withRouter(Sidebar);
