import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import Logo from "../../img/logoColor.png";
import Hidden from "@material-ui/core/Hidden";
import { verCredito } from "../../actions/gestionCreditoActions";
import { useSelector } from "react-redux";
import { format, addDays, differenceInCalendarDays } from "date-fns";
import moment from "moment";
import { blue } from "@material-ui/core/colors";
import {
  formateador,
  intereses,
  cobroPlataforma,
  cobroIva,
  cobroAdministracion,
} from "../../Helper";

let fecha = new Date();

const useStyles = makeStyles({
  botones: {
    width: 200,
    margin: "0 auto",
    marginBottom: 20,
    marginTop: 20,
  },

  Header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px 30px 5px 30px",
    marginRight: 0,
    marginTop: 50,
    marginBottom: 20,
  },
  subHeader: {
    margin: "5px 30px 5px 30px",
    marginRight: 5,
  },

  infoHeader: {
    margin: "5px 30px 5px 30px",
    marginRight: 5,
  },

  p: {
    margin: 0,
  },

  infoPrestamo: {
    margin: "5px 30px 5px 30px",
    marginRight: 15,
  },

  pPrestamo: {
    margin: 0,
    fontWeight: 600,
    color: "rgba(0, 0, 0, 0.50)",
    marginRight: 10,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },

  subFooter: {
    display: "flex",
    flexDirection: "column",
  },
  boton: {
    background: "#ffde2e",
    fontWeight: 600,
    borderRadius: 13,
    margin: 5,
    fontSize: 15,
    width: "100%",
    margin: "0 auto",
  },

  contenedorfooter: {
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    width: 250,
    padding: 0,
    marginRight: 20,
    display: "flex",
    alignItems: "center",
  },

  pPrestamoDescripcion: {
    margin: 0,
    fontSize: 10,
  },
  root: {
    position: "relative",
    width: "100vw",
    margin: "auto",
    overflowX: "auto",
    marginTop: 20,
  },

  container: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
  },

  sello: {
    background: "#3085d6",
    height: 50,
    width: 200,
    position: "absolute",
    right: 0,
    top: 0,
    fontWeight: 600,
    fontSize: 15,
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderBottomLeftRadius: 15,
    boxShadow: "10px 13px 16px -3px rgba(0,0,0,0.42)",
  },
  re: {
    margin: "0 auto",
    fontWeight: 700,
    display: "flex",
    color: "y#ffde2e",
  },
  espacio: {
    margin: "10px 0",
  },
});


export default function LiquidarContrato() {
  const classes = useStyles();

  const data = useSelector((state) => state.gestionCreditos.credito);
  const usuario = useSelector((state) => state.usuario.usuario);  

  const { fechaDesembolsado, diasPrestamo } = data;
  let dia = addDays(new Date(fechaDesembolsado), diasPrestamo);
  let vencimiento = addDays(new Date(dia), diasPrestamo)
  let nuevoVencimiento = addDays(new Date(vencimiento), diasPrestamo)

 
  
  
  let interesXRenovacion = (intereses(diasPrestamo, data.valorAprobado))
  let plataformaXRenovacion = (cobroPlataforma(diasPrestamo))
  let admonXRenovacion = (cobroAdministracion(data.valorAprobado))
  let ivaXRenovacion = cobroIva(admonXRenovacion, plataformaXRenovacion);
  let totalXRenovacion = interesXRenovacion + plataformaXRenovacion + admonXRenovacion + ivaXRenovacion

  const {nombres, apellidos, cedula, telefonoFijo, celular, direccion} = usuario

  
  //let idDocumento = id ? id : null
  //let valorAprobadoDocumento = valorAprobado ? valorAprobado : 0
  let fechaDesembolsadoDocumento = fechaDesembolsado ? fechaDesembolsado : null
  //let diasPrestamoDocumento = diasPrestamo ? diasPrestamo : 0
  let nombreDocumento = nombres ?  nombres : null
  let apellidoDocumento = apellidos ?  apellidos : null
  let cedulaDocumento = cedula ?  cedula : 0
  let telefonoFijoDocumento = telefonoFijo ?  telefonoFijo : null
  let celularoDocumento = celular ?  celular : null
  let direccionDocumento = direccion ?  direccion : null

 

  return (
    <Grid container>
      <br />

      <Card className={classes.root}>
        <CardContent>
          <div className={classes.sello}>
            <p className={classes.re}>Renovación de crédito </p>
          </div>
          <div className={classes.Header}>
            <Grid item lg={4}>
              <div className={classes.image}>
                <Hidden only={["xs", "sm"]}>
                  <Typography className={classes.title} variant="h6" noWrap>
                    <img
                      src={Logo}
                      alt="Logo Easy Credit"
                      className={classes.logo}
                    />
                  </Typography>
                </Hidden>
              </div>
            </Grid>

            <Hidden only={["xs", "sm"]}>
              <Grid item lg={6}>
                <div className={classes.subHeader}>
                  <p className={classes.p}>EASY CREDIT COLOMBIA</p>
                  <p className={classes.p}>Calle 44 # 79-86 of 207</p>
                  <p className={classes.p}>Nit: 901.011172 </p>
                </div>
              </Grid>
            </Hidden>

            <Hidden only={["xs", "sm"]}>
              <Grid item lg={4}>
                <div className={classes.subHeader}>
                  <p className={classes.p}> Medellin, Antioquía, Colombia</p>
                  <p className={classes.p}>
                    {" "}
                    Fecha de Elaboración:{" "}
                    {format(new Date(), 'MM/dd/yyyy')}
                  </p>
                  <p className={classes.p}> Contacto:</p>
                </div>
              </Grid>
            </Hidden>
          </div>
          <Hidden only={["xs", "sm"]}>
            <Divider variant="middle" className={classes.espacio} />
          </Hidden>

          <Grid container>
            <Grid item xs={4} md={4}>
              <div className={classes.infoHeader}>
                <Grid item xs={12}>
                  <p className={classes.p}>Crédito N°:{data.id}</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>Fecha de Inicio: {/*format(new Date(addDays(new Date(fechaDesembolsadoDocumento), 1)), "MM/dd/yyyy") || ""*/}
                  {format(new Date(vencimiento), "MM/dd/yyyy") || ""}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    Fecha de Vencimiento:
                    {format(new Date(nuevoVencimiento), "MM/dd/yyyy") || ""}
                  </p>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.infoHeader}>
                <Grid item xs={12}>
                  <p className={classes.p}>Documento: {cedulaDocumento}</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    Nombre Completo:{" "}
                    {` ${nombreDocumento} ${apellidoDocumento} ` ||
                      ""}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>Celular: {celular}</p>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.infoHeader}>
                <Grid item xs={12}>
                  <p className={classes.p}> Dirección: {direccion}</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    {" "}
                    Plazo Aprobado: {data.diasPrestamo}{" "}
                    {data.diasPrestamo > 1 ? "días" : "día"}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}> Monto del Crédito: ${formateador(data.valorAprobado) || ""}</p>
                </Grid>
              </div>
            </Grid>
          </Grid>

          <Divider variant="middle" className={classes.espacio} />
        </CardContent>

        <CardContent>
          <Grid item xs={12} md={4}>
            <div className={classes.infoHeader}>
              <div>
                <Grid item xs={12}>
                  <p className={classes.p}>Total a Pagar: {formateador(totalXRenovacion.toFixed())}</p>
                </Grid>
              </div>
            </div>
          </Grid>
        </CardContent>
        <Divider variant="middle" className={classes.espacio} />
        <Grid container>
          <Grid xs={12}>
            <CardActions className={classes.botones}>
              <Button variant="contained" className={classes.boton}>
                Renovar Credito
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
