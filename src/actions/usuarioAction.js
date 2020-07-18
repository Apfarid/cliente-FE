import {
  CONSULTA_INFO_USUARIO,
  CONSULTA_INFO_EXITOSA,
  CONSULTA_INFO_ERROR,
  INFORMACION_PERSONAL,
  INFORMACION_PERSONAL_EXITO,
  INFORMACION_PERSONAL_ERROR,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function crearUsuario(data) {
  const {
    nombres,
    apellidos,
    tipoId,
    cedula,
    expedicionId,
    ciudad,
    barrio,
    estrato,
    tipoVivienda,
    nivelEstudio,
    genero,
    email,
    celular,
  } = data.infomacionPersonal;

  const {
    banco,
    numeroCuenta,
    tipoCuenta,
    preguntaTC,
    ingresosMensuales,
  } = data.infomacionFinanciera;

  const {
    nombreEmpresa,
    nit,
    ciudadEmpresa,
    direccionEmpresa,
    telefonoEmpresa,
    tipoContrato,
    cargo,
    eps,
    fechaIngreso,

    tiempoDesempleado,
    nombreCompletoIndependiente,
    ciudadIndependiente,
    direccionIndependiente,
    telefonoIndependiente,
    ingresosIndependiente,

    fondoPensional,
    causaPension,
    fechaResolucion,
  } = data.infomacionLaboral;

  const {
    nombreReferenciaFamiliar,
    apellidoReferenciaFamiliar,
    ciudadReferenciaFamiliar,
    telefonoReferenciaFamiliar,
    parentezcoReferenciaFamiliar,

    nombreReferenciaPersonal,
    apellidoReferenciaPersonal,
    ciudadReferenciaPersonal,
    telefonoReferenciaPersonal,
  } = data.infomacionReferencias;
  return async (dispatch) => {
    dispatch(creandoUsuario());
    try {
      const respuesta = await clienteAxios.post("/clientes", data, {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });
      dispatch(
        creaUsuarioExito({
          nombres,
          apellidos,
          tipoId,
          cedula,
          expedicionId,
          ciudad,
          barrio,
          estrato,
          tipoVivienda,
          nivelEstudio,
          genero,
          email,
          celular,
          banco,
          numeroCuenta,
          tipoCuenta,
          preguntaTC,
          nombreEmpresa,
          nit,
          ciudadEmpresa,
          direccionEmpresa,
          telefonoEmpresa,
          tipoContrato,
          cargo,
          eps,
          fechaIngreso,
          nombreReferenciaFamiliar,
          apellidoReferenciaFamiliar,
          ciudadReferenciaFamiliar,
          telefonoReferenciaFamiliar,
          parentezcoReferenciaFamiliar,

          nombreReferenciaPersonal,
          apellidoReferenciaPersonal,
          ciudadReferenciaPersonal,
          telefonoReferenciaPersonal,

          tiempoDesempleado,
          nombreCompletoIndependiente,
          ciudadIndependiente,
          direccionIndependiente,
          telefonoIndependiente,
          ingresosIndependiente,

          fondoPensional,
          causaPension,
          fechaResolucion,
          ingresosMensuales,
        })
      );
      localStorage.setItem("censo", data.censado);
      console.log(respuesta);
      Swal.fire("Registro", respuesta.data.mensaje, "success");
    } catch (error) {
      console.log(error);
      dispatch(creaUsuarioError(true));
    }
  };
}

const creandoUsuario = () => ({
  type: INFORMACION_PERSONAL,
});

const creaUsuarioExito = (data) => ({
  type: INFORMACION_PERSONAL_EXITO,
  payload: data,
});

const creaUsuarioError = (estado) => ({
  type: INFORMACION_PERSONAL_ERROR,
  payload: estado,
});

export function consultaInfoUsuario() {
  return async (dispatch) => {
    dispatch(inicioConsulta());
    try {
      const { data } = await clienteAxios.get("/clientes", {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      });
      dispatch(consultaExitosa(data));
      console.log(data);
    } catch (error) {
      dispatch(consultaError());
    }
  };
}

const inicioConsulta = () => ({
  type: CONSULTA_INFO_USUARIO,
});

const consultaExitosa = (respuesta) => ({
  type: CONSULTA_INFO_EXITOSA,
  payload: respuesta,
});

const consultaError = () => ({
  type: CONSULTA_INFO_ERROR,
});
