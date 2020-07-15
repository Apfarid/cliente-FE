import {
  CREAR_USUARIO,
  CREAR_USUARIO_EXITO,
  CREAR_USUARIO_ERROR,
  INICIO_SESION,
  INICIO_SESION_EXITO,
  INICIO_SESION_ERROR
} from "../types";

const initalState = {
  usuario: {},
  loading: false,
  error: null,
  censado: 'no'
};

export default function (state = initalState, action) {
  switch (action.type) {
    case INICIO_SESION:
      return {
        ...state,
        loading: true,
      };

    case INICIO_SESION_EXITO:
      return {
        ...state,
        loading: false,
        usuario: action.payload,
      };
    case INICIO_SESION_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        usuario:null
      };

    default:
      return state;
  }
}
