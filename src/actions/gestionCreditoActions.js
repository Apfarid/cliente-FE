import {
  VER_CREDITO,
  VER_CREDITO_EXITO,
  VER_CREDITO_ERROR,
  SOLICITAR_CREDITO,
  SOLICITAR_CREDITO_EXITO,
  SOLICITAR_CREDITO_ERROR,
  OBTENER_CREDITO_EDITAR,
  COMENZAR_EDICION_CREDITO,
  CREDITO_EDITADO_EXITO,
  CREDITO_EDITADO_ERROR,
  AJUSTE_STORE,
} from "../types";
import ClienteAxios from "../config/axios";
import Swal from "sweetalert2";
import {
  cobroPlataforma,
  cobroAdministracion,
  intereses,
  cobroIva,
} from "../Helper";

export function verCredito() {
  return async (dispatch) => {
    dispatch(credito());
    try {
      const respuesta = await ClienteAxios.get("/credito", {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });

      const { diasPrestamo, valorAprobado } = respuesta.data.credito;
      respuesta.data.credito.interes = intereses(diasPrestamo, valorAprobado);
      respuesta.data.credito.plataforma = cobroPlataforma(diasPrestamo);
      respuesta.data.credito.administracion = cobroAdministracion(
        valorAprobado
      );
      respuesta.data.credito.impuesto = cobroIva(
        respuesta.data.credito.plataforma,
        respuesta.data.credito.administracion
      );

      dispatch(cargarCreditoExito(respuesta));
    } catch (error) {
      console.log(error);
      dispatch(cargarCreditoError(true));
      console.log("mal");
    }
  };
}

const credito = () => ({
  type: VER_CREDITO,
});

const cargarCreditoExito = (respuesta) => ({
  type: VER_CREDITO_EXITO,
  payload: respuesta.data.credito,
});

const cargarCreditoError = (estado) => ({
  type: VER_CREDITO_ERROR,
  //payload: estado.data.credito
});

export function nuevoCredito(credito) {
  console.log(credito);
  return (dispatch) => {
    dispatch(solicitarCredito());
    try {
      ClienteAxios.post("/credito", credito, {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });
      dispatch(agregarCreditoExito(credito));
      Swal.fire(
        "¿Permanece atento a tu aplicación!",
        "La solicitudo se ha enviado correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);

      dispatch(agregarCreditoError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
      });
    }
  };
}

const solicitarCredito = () => ({
  type: SOLICITAR_CREDITO,
});

const agregarCreditoExito = (credito) => ({
  type: SOLICITAR_CREDITO_EXITO,
  payload: credito,
});

const agregarCreditoError = (estado) => ({
  type: SOLICITAR_CREDITO_ERROR,
  payload: estado,
});

// Edita un registro en la api y state
export function editarCreditoFirma(credito) {
  return async (dispatch) => {
    console.log(credito);
    //dispatch(editarCreditoFirmaExito(fechaFirma));
  };
}

const editarCreditoFirmaExito = (credito) => ({
  type: AJUSTE_STORE,
  payload: credito,
});

export function editarCreditoAction(credito) {
  console.log(credito);
  return async (dispatch) => {
    dispatch(editarCredito());
    try {
      await ClienteAxios.put(`/credito/${credito.id}`, credito, {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });
      const { fechaFirma } = credito;
      dispatch(editarCreditoExito(fechaFirma));
    } catch (error) {
      console.log(error);
      console.log("entro al error");

      dispatch(editarCreditoError());
    }
  };
}

const editarCredito = () => ({
  type: COMENZAR_EDICION_CREDITO,
});

const editarCreditoExito = (credito) => ({
  type: CREDITO_EDITADO_EXITO,
  payload: credito,
});

const editarCreditoError = () => ({
  type: CREDITO_EDITADO_ERROR,
  payload: true,
});
