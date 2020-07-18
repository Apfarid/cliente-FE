import {
  INICIO_SESION,
  INICIO_SESION_EXITO,
  INICIO_SESION_ERROR,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function consultarCenso() {
  return async (dispatch) => {
    dispatch(censo());
    try {
      const respuesta = await clienteAxios.get("/clientes", {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });
      dispatch(censoExito(respuesta));
      localStorage.setItem("censo", respuesta.data.censado);
    } catch (error) {
      dispatch(inicioSesionError());
    }
  };
}

const censo = () => ({
  type: INICIO_SESION,
});

const censoExito = (respuesta) => ({
  type: INICIO_SESION_EXITO,
  payload: respuesta.data,
});

const inicioSesionError = () => ({
  type: INICIO_SESION_ERROR,
});
