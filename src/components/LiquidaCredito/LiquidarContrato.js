import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import "./liquidar.css";
import Hidden from "@material-ui/core/Hidden";
import Logo from "../../img/logoColor.png";
import { format, addDays, lightFormat } from "date-fns";
import moment from "moment";

import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import clienteAxios from "../../config/axios";
import {
  formateador,
  intereses,
  cobroPlataforma,
  cobroIva,
  cobroAdministracion,
} from "../../Helper";

const useStyles = makeStyles({
  root: {},
  Header: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 30px 5px 30px",
    marginRight: 5,
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
    fontSize: 9,
    width: "100%",
  },

  alerta: {
    marginBottom: 20,
    margin: "0 auto",
  },

  contenedorfooter: {
    display: "flex",
    justifyContent: "space-between",
  },
  botones: {
    display: "flex",
    justifyContent: "center",
  },

  logo: {
    width: 250,
    height: 95,
    marginRight: 20,
  },

  pPrestamoDescripcion: {
    margin: 0,
    fontSize: 10,
  },

  espacio: {
    margin: "20px 0",
  },
});

let fecha = new Date();
fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());

export default function LiquidarContrato() {
  const classes = useStyles();

  const [usuario, setUsuario] = useState("");
  const [data, setData] = useState("");

  const creditoInfo = async () => {
    const respuesta = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setData(respuesta.data.credito);
  };

  const usuarioInfo = async () => {
    const respuesta = await clienteAxios.get("/clientes", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setUsuario(respuesta.data);
  };

  useEffect(() => {
    creditoInfo();
    usuarioInfo();
  }, []);

  let admon = data.valorAprobado ? data.valorAprobado : 0;
  let prestamo = data.valorAprobado ? data.valorAprobado : 0;
  let desembolso = moment(data.fechaDesembolsado);
  let hoy = moment(new Date());
  let diasCredito = hoy.diff(desembolso, "days");
  let administracion = cobroAdministracion(admon);
  let plataforma = cobroPlataforma(diasCredito);
  let iva = cobroIva(administracion, plataforma);
  let interes = intereses(diasCredito, data.valorAprobado);
  let diasPrestamos = data.diasPrestamo ? data.diasPrestamo : 0;
  let nombreDocumento = usuario.nombres ? usuario.nombres : null;
  let apellidoDocumento = usuario.apellidos ? usuario.apellidos : null;
  let cedulaDocumento = usuario.cedula ? usuario.cedula : 0;
  let telefonoFijoDocumento = usuario.telefonoFijo
    ? usuario.telefonoFijo
    : null;
  let celularoDocumento = usuario.celular ? usuario.celular : null;
  let direccionDocumento = usuario.direccion ? usuario.direccion : null;
  let valorAprobadoDocumento = data.valorAprobado ? data.valorAprobado : 0;
  let total = valorAprobadoDocumento + administracion + plataforma + iva;
  let fechaDesembolsoDocumento = data.fechaDesembolsado
    ? data.fechaDesembolsado
    : null;
  let fecha_desembolso = format(
    new Date(fechaDesembolsoDocumento),
    "MM/dd/yyyy"
  );
  let fechaVencimiento = addDays(
    new Date(fechaDesembolsoDocumento),
    diasPrestamos
  );
  const [error, setError] = useState(false);

  const pago = (e) => {
    if (total >= 300000) {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <Grid container>
      {error && (
        <div className={classes.alerta}>
          <Alert severity="error" onClose={() => setError(false)}>
            Los pagos superiores a $ 400.000 no se pueden realizar en efectivo.
          </Alert>
        </div>
      )}
      <Card className="rootLiquidar">
        <CardContent>
          <div className={classes.Header}>
            <Hidden only={["xs", "sm"]}>
              <Grid item lg={4}>
                <div className={classes.subHeader}>
                  <img
                    src={Logo}
                    alt="Logo Easy Credit"
                    className={classes.logo}
                  />
                </div>
              </Grid>
            </Hidden>

            <Hidden only={["xs", "sm"]}>
              <Grid item lg={4}>
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
                    Fecha de Elaboración: {format(new Date(), "MM/dd/yyyy")}
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
                  <p className={classes.p}>Crédito N°:{data.id || ""} </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    Fecha de Inicio:
                    {format(
                      new Date(addDays(new Date(fechaDesembolsoDocumento), 0)),
                      "MM/dd/yyyy"
                    ) || ""}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    Fecha de Vencimiento:{" "}
                    {format(fechaVencimiento, "MM/dd/yyyy")}
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
                    {` ${nombreDocumento} ${apellidoDocumento} `}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>Celular: {celularoDocumento}</p>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.infoHeader}>
                <Grid item xs={12}>
                  <p className={classes.p}> Dirección: {direccionDocumento}</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    {" "}
                    Plazo Aprobado: {data.diasPrestamo || ""}{" "}
                    {data.diasPrestamo > 1 ? "días" : "día"}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.p}>
                    {" "}
                    Monto del Crédito: ${" "}
                    {formateador(valorAprobadoDocumento) || ""}
                  </p>
                </Grid>
              </div>
            </Grid>
          </Grid>

          <Divider variant="middle" className={classes.espacio} />
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className={classes.infoPrestamo}>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>
                    Préstamo: $ {formateador(prestamo) || ""}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>Interés Moratorio:</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>Gastos de Cobranza:</p>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.infoPrestamo}>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>
                    Interés: ${" "}
                    {isNaN(interes) ? 0 : formateador(interes.toFixed())}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>Primera Cobranza:</p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>
                    Administración: $ {formateador(administracion) || ""}{" "}
                  </p>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.infoPrestamo}>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>
                    {" "}
                    Plataforma: $ {formateador(plataforma) || ""}{" "}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}> Descuento: </p>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.pPrestamo}>
                    {" "}
                    IVA: $ {formateador(iva.toFixed()) || ""}
                  </p>
                </Grid>
                <Hidden only={["md", "lg", "xl"]}>
                  <Grid item xs={12}>
                    <p className={classes.pPrestamo}>
                      Total a Pagar: ${formateador(total.toFixed())}
                    </p>
                  </Grid>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </CardContent>

        <Divider variant="middle" className={classes.espacio} />
        <Grid container>
          <Grid xs={12} sm={12} md={4}>
            <CardActions className={classes.botones}>
              <Grid direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Button variant="contained" className={classes.boton}>
                    E-Payco
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" className={classes.boton}>
                    Pago PSE
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className={classes.boton}
                    onClick={pago}
                  >
                    Efectivo
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Grid>

          <Hidden only={["xs", "sm"]}>
            <Grid item md={4}>
              <CardContent className={classes.contenedorfooter}>
                <div className={classes.subFooter}>
                  <p className={classes.pPrestamo}>IVA Régimen Común:</p>
                  <p className={classes.pPrestamoDescripcion}>
                    Resolución de Facturación #000000 del 0000:
                  </p>
                  <p className={classes.pPrestamoDescripcion}>
                    No somos grandes contribuyentes:
                  </p>
                  <p className={classes.pPrestamoDescripcion}>
                    No somos autorretenedores de IVA:
                  </p>
                </div>
              </CardContent>
            </Grid>
          </Hidden>

          <Hidden only={["xs", "sm"]}>
            <Grid item md={4}>
              <CardContent className={classes.contenedorfooter}>
                <div>
                  <p className={classes.pPrestamo}>
                    Total a Pagar: $ {formateador(total.toFixed())}
                  </p>
                </div>
              </CardContent>
            </Grid>
          </Hidden>
        </Grid>
      </Card>
    </Grid>
  );
}
