import React, { Fragment } from "react";
import "./Main.css";
import "./responsive.css";
import logoblanco from "../../img/logoBlanco.png";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import PhoneAndroidSharpIcon from '@material-ui/icons/PhoneAndroidSharp';




const Menu = () => {
  return (
    <section className="header">

      <header>
        <Hidden only={["xs", "sm", "md"]}>
          <div className="headertop">
            <div>
              <div className=" infoheader headerLine">
                <Grid item xs={6}>
                  <ul className="ulLista">
                    <LanguageSharpIcon />
                    <li>
                      Prestamos 100% online, sin comisiones ni pagos por
                      adelantado
                  </li>
                  </ul>
                </Grid>

                <Grid item xs={4}>
                  <ul className="ulLista">
                    <li>
                      <DraftsSharpIcon />
                    ayuda@easycreditcolombia.com
                  </li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
                  <ul className="ulLista">
                    <li>
                      <PhoneAndroidSharpIcon />
                    317 365 87 87
                  </li>
                  </ul>
                </Grid>
              </div>
            </div>
          </div>
        </Hidden>
      </header>


      <nav className="navbar navbar-expand-sm menu">
        <Grid item xs={12}>
          <div className="subHeader">
            <Grid item xs={4}>
              <a href="index.html" className="navbar-brand cajalogo">
                <img src={logoblanco} className="logoeasy" />
              </a>
            </Grid>
            <div className="lista">
              <Grid xs={4}>
                <ul className="ulLista">
                  <li className="nav-item linkmenu">
                    <a
                      href="easycreditcolombia.com"
                      className="nav-link ancornav"
                    >
                      Inicio
                  </a>
                  </li>
                  <Hidden only={["xs", "sm"]}>
                    <li className="nav-item ancornav">
                      <a href="#adquirirlo" className="nav-link ancornav">
                        ¿Cómo Adquirirlo?
                    </a>
                    </li>
                  </Hidden>
                  <Hidden only={["xs", "sm"]}>
                    <li className="nav-item ancornav">
                      <a href="#Nosotros" className="nav-link ancornav" target="_blank">
                        ¿Quiénes Somos?
                    </a>
                    </li>
                  </Hidden>
                  <Hidden only={["xs", "sm"]}>
                    <li className="nav-item ancornav">
                      <a href="#elegirnos" className="nav-link ancornav">
                        ¿Por qué elegirnos?
                    </a>
                    </li>
                  </Hidden>
                  <Hidden only={["xs", "sm"]}>
                    <li className="nav-item ancornav">
                      <a href="#contacto" className="nav-link ancornav">
                        Contacto
                    </a>
                    </li>
                  </Hidden>
                  <Hidden only={["xs", "sm"]}>
                    <li className="nav-item ancornav">
                      <a href="#" className="nav-link ancornav">
                        <PermIdentitySharpIcon />
                      </a>
                    </li>
                  </Hidden>
                  <Hidden only={["xs", "sm"]}>
                    <li className="nav-item ancornav">
                      <a href="#" className="nav-link ancornav">
                        <PersonAddSharpIcon />
                      </a>
                    </li>
                  </Hidden>
                </ul>
              </Grid>
            </div>
          </div>
        </Grid>
      </nav>
    </section>
  );
};

export default Menu;
