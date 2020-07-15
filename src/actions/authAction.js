import {
  INICIO_SESION,
  INICIO_SESION_EXITO,
  INICIO_SESION_ERROR,

  INFORMACION_PERSONAL,
  INFORMACION_PERSONAL_EXITO,
  INFORMACION_PERSONAL_ERROR
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function consultarCenso() {  
  return async (dispatch) => {
    dispatch(censo());
    try {
      const respuesta = await clienteAxios.get("/clientes",{
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
  payload: respuesta.data
});

const inicioSesionError = () => ({
  type: INICIO_SESION_ERROR,
});


export function informacionPersonal(data) {   
    
  return (dispatch) => {
    dispatch(infoPersonal());
    try {
      clienteAxios.post("/clientes", data, {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });
      dispatch(agregarInfoPersonalExito(data));
      localStorage.setItem("censo", data.censado);
      //Swal.fire("Registro", "Solicita tu credito", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarInfoPersonalError(true));
    }
  };
}

const infoPersonal = () => ({
  type: INFORMACION_PERSONAL,
});

const agregarInfoPersonalExito = (data) => ({
  type: INFORMACION_PERSONAL_EXITO,
  payload: data,
  
});

const agregarInfoPersonalError = (estado) => ({
  type: INFORMACION_PERSONAL_ERROR,
  payload: estado,
});


