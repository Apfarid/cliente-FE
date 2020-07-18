import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Contador from "../../components/Contador/Contador";
import { verCredito } from "../../actions/gestionCreditoActions";
import { consultarCenso } from "../../actions/authAction";
import Estudio from "../../components/Inicio/Estudio";
import SolicitudDocumentos from "../../components/Inicio/SolicitudDocumentos";
import Inicio from "../../components/Inicio/Inicio";
import Preaprobado from "../../components/Inicio/Preaprobado";
import SinDocumentos from "../../components/Inicio/SinDocumentos";
import clienteAxios from "../../config/axios";
import PorFirmar from "../../components/Inicio/PorFirmar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    height: 500,
  },
  fixedHeightDos: {
    height: 300,
  },
}));

const consultarCensados = async () => {
  const respuesta = await clienteAxios.get("/clientes", {
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("token")}`,
    },
  });

  localStorage.setItem("censo", respuesta?.data?.censado);
};

export default function Home() {
  const classes = useStyles();

  const [credito, setCredito] = useState([]);

  const homeCliente = async () => {
    const respuestaHome = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setCredito(respuestaHome.data.credito);
  };

  useEffect(() => {
    consultarCensados();
    homeCliente();
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaperDos = clsx(classes.paper, classes.fixedHeightDos);

  let estudio = false;
  let documentos = false;
  let contador = false;
  let preaprobado = false;
  let inicio = true;
  let sinDocumentos = false;
  let paraFirmar = false;

  if (credito === null) {
    inicio = true;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.aprobado === null &&
    credito?.solicitarDocumentos === null &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.preAprobado === null
  ) {
    estudio = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.aprobado === true &&
    credito?.preAprobado === true &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.fechaFirma !== null
  ) {
    preaprobado = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.aprobado === true &&
    credito?.preAprobado === true &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.fechaFirma === null
  ) {
    paraFirmar = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.solicitarDocumentos === true &&
    credito?.fechaFirma === null &&
    credito?.aprobado === null
  ) {
    documentos = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    (credito?.aprobado === null || credito?.aprobado === undefined) &&
    credito?.preAprobado === true &&
    (credito?.desembolsado === null || credito?.desembolsado === undefined) &&
    (credito?.rechazado === null || credito?.rechazado === undefined) &&
    (credito?.solicitarDocumentos === false ||
      credito?.solicitarDocumentos === null ||
      credito?.solicitarDocumentos === undefined) &&
    (credito?.fechaFirma === null || credito?.fechaFirma === undefined)
  ) {
    sinDocumentos = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.desembolsado === true &&
    credito?.rechazado === null &&
    credito?.valorAprobado !== null &&
    credito?.fechaFirma !== null
  ) {
    contador = true;
    inicio = false;
  }

  console.log("=========================================");
  console.log("estudio: " + estudio);
  console.log("documentos: " + documentos);
  console.log("contador: " + contador);
  console.log("preaprobado: " + preaprobado);
  console.log("inicio: " + inicio);
  console.log("sinDocumentos" + sinDocumentos);
  console.log("estate : " + credito);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Creditos Nuevos */}

        {contador && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaperDos}>
              <Contador tamañoContador={"grande"} credito={credito} />
            </Paper>
          </Grid>
        )}
        {estudio && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaperDos}>
              <Estudio />
            </Paper>
          </Grid>
        )}
        {documentos && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <SolicitudDocumentos credito={credito} />
            </Paper>
          </Grid>
        )}
        {preaprobado && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <Preaprobado />
            </Paper>
          </Grid>
        )}
        {inicio && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaperDos}>
              <Inicio />
            </Paper>
          </Grid>
        )}
        {sinDocumentos && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaperDos}>
              <SinDocumentos credito={credito} />
            </Paper>
          </Grid>
        )}
        {paraFirmar && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaperDos}>
              <PorFirmar />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
