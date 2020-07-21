import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editarCreditoFirma } from "../../actions/gestionCreditoActions";
import Contrato from "../../components/Contrato/Pagaredesplegable";
import Button from "@material-ui/core/Button";
import { format, addDays } from "date-fns";
import clienteAxios from "../../config/axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },

  input: {
    margin: 20,
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
  fixedHeightDos: {
    height: 300,
  },
}));

let hoy = new Date();
let fechaFirma;

const FirmaContrato = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaperDos = clsx(classes.paper, classes.fixedHeightDos);
  const [credito, setCredito] = useState([]);

  const [firmas, setFirmas] = useState({
    corta: "",
    larga: "",
  });

  const handleChage = (e) => {
    setFirmas({
      ...firmas,
      [e.target.name]: e.target.value,
    });
  };

  const consultaFirma = async () => {
    const respuestaHome = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setCredito(respuestaHome.data.credito);
  };

  useEffect(() => {
    consultaFirma();
  }, []);

  const { corta, larga } = firmas;

  const enviarFirma = async (e) => {
    e.preventDefault();

    if (corta.trim() === "" || larga.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Debes diligenciar ambas firmas",
      });
      return;
    }
    if (
      firmas.corta.trim() === credito.firmaCorta &&
      firmas.larga.trim() === credito.firmaLarga
    ) {
      if (new Date().getHours() > 16) {
        hoy = addDays(hoy, 1);
        fechaFirma = new Date(hoy);
        console.log("si señor");

        try {
          await clienteAxios.put(
            `/credito/${credito.id}`,
            { fechaFirma },
            {
              headers: {
                "Content-Type": "application/json",
                token: `${localStorage.getItem("token")}`,
              },
            }
          );
          editarCreditoFirma({ fechaFirma });
        } catch (error) {
          console.log(error);
        }
      } else {
        fechaFirma = new Date();
        try {
          await clienteAxios.put(
            `/credito/${credito.id}`,
            { fechaFirma },
            {
              headers: {
                "Content-Type": "application/json",
                token: `${localStorage.getItem("token")}`,
              },
            }
          );
          editarCreditoFirma({ fechaFirma });
        } catch (error) {
          console.log(error);
        }
      }
      Swal.fire("Firmado!", "success");
      props.history.push("/inicio");
    } else {
      Swal.fire({
        icon: "error",
        title: "Verifica las firmas",
      });
    }
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Creditos Nuevos */}

        <Grid item xs={12} md={12} lg={12}>
          <Contrato />

          <form className={classes.root} onSubmit={enviarFirma}>
            <TextField
              id="corta"
              label="Clave Corta"
              variant="outlined"
              name="corta"
              value={firmas.corta}
              className={classes.input}
              onChange={handleChage}
              disabled={credito.fechaFirma !== null ? true : false}
              disabled={credito.fechaFirma !== null ? true : false}
            />
            <TextField
              id="larga"
              label="Clave Larga"
              variant="outlined"
              name="larga"
              value={firmas.larga}
              className={classes.input}
              onChange={handleChage}
              disabled={credito.fechaFirma !== null ? true : false}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              className={classes.input}
              type="onsubmit"
              disabled={credito.fechaFirma !== null ? true : false}
            >
              {credito.fechaFirma ? "Firmado" : "Firmar"}
            </Button>
          </form>

          {credito.fechaFirma && <p>Firmado el: {credito.fechaFirma} </p>}
          {<li>clave corta: {credito.firmaCorta}</li>}
          {<li>clave larga: {credito.firmaLarga}</li>}
        </Grid>
      </Grid>
    </Container>
  );
};
export default FirmaContrato;
