import React, { Fragment } from "react";
import "./Main.css";
import "./responsive.css";
import logoblanco from "../../img/logoBlanco.png";
import slide from "../../img/slide.png";
import fondobannercontacto from "../../img/fondobannercontacto.png";
import slide1pagos from "../../img/slide1pagos.png";
import slide2pagos from "../../img/slide2pagos.png";
import modelo from "../../img/MODELO-QUIENES-SOMOS.png";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PhoneInTalkSharpIcon from '@material-ui/icons/PhoneInTalkSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AddLocationSharpIcon from '@material-ui/icons/AddLocationSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import Menu from "./Menu";

const Nosotros = () => {
  return (
    <Fragment>
      <Menu />
      <div className="top">

        <section className="quienessomos" id="quienessomos">
          <Grid item lg={6} md={12} sm={6} xs={6} className="modeloquienessomos">
            <img src={modelo} className="imgmodeloquienessomos" />
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12} className="quienesomostexto">
            <h6>
              ¿Quiénes Somos?
                        </h6>
            <div className="cajaquienesson">
              <p>
                Somos una compañía constituida legalmente en Colombia, nuestra organización está destinada al servicio de <strong className="strong">crédito en línea</strong>, de fácil acceso a nivel nacional, brindando servicio las 24 horas del día de los 7 días de la semana.</p>
              <h6>
                Misión
                                </h6>
              <p>
                Proporcionar la mejor opción para los procesos de micro prestamos las 24 horas del día, los 7 días a la semana, a través de una plataforma virtual fácil, rápida y segura.</p>
              <h6>
                Visión
                                </h6>
              <p>
                En el 2025 seremos reconocidos como líderes en el mercado virtual de micro prestamos 24/7 que beneficia a personas que requieren un préstamo fácil, rápido y confiable. Nuestro compromiso es mejorar continuamente para ofrecerle a nuestros clientes total trasparencia, seguridad y confiabilidad, por medio de un equipo humano competente que mantiene altos niveles de calidad y servicio.</p>
            </div>
          </Grid>
        </section>

        <Grid container>
          <footer className="footer">
            <Grid item xs={4}>
              <img src={logoblanco} className="logofooter logo1" />
              <br />
              <br />
              <p className="textoeasyfooter">
                EASYCREDITCOLOMBIA.COM es una compañía legalmente constituida en
                Colombia bajo el nombre EASY CREDIT COLOMBIA S.A.S.
              </p>

              <h6 className="tittlefollowfooter">Síguenos:</h6>
              <div className="cajasocialmediafooter">
                <div className="facebook">
                  <a
                    href="https://www.facebook.com/easycreditcolombia/"
                    target="_blank"
                  >

                    <FacebookIcon className="iconoamarillo" fontSize="large" />
                  </a>
                </div>
                <div className="facebook">
                  <a
                    href="https://www.instagram.com/easycreditcolombia/"
                    target="_blank"
                  >
                    <InstagramIcon className="iconoamarillo" fontSize="large" />
                  </a>
                </div>
              </div>
            </Grid>
            <Hidden only={["xs"]}>
              <Grid item xs={6} className="footerContainer">
                <h1 className="infocontactofooter">Contacto</h1>
                <br />
                <br />
                <div className="row direccionfooter">
                  <AddLocationSharpIcon className="iconoamarillo" fontSize="large" />
                  <p className="adressfooter">Calle 44 # 79-86 Of 207</p>
                </div>
                <br />
                <br />
                <div className="row direccionfooter">
                  <PhoneInTalkSharpIcon className="iconoamarillo" fontSize="large" />
                  <p className="adressfooter">317 365 87 87</p>
                </div>
                <br />
                <br />

                <div className="row direccionfooter">
                  <DraftsSharpIcon className="iconoamarillo" fontSize="large" />
                  <p className="adressfooter">ayuda@easycreditcolombia.com</p>
                </div>
              </Grid>
            </Hidden>
          </footer>
        </Grid>

        <Grid item xs={12} className="footerbottom">
          <h6>2020, EasyCreditColombia. Todos los derechos reservados</h6>
        </Grid>
      </div>
    </Fragment>


  );
};

export default Nosotros;