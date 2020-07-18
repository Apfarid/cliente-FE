import {
  INFORMACION_PERSONAL,
  INFORMACION_PERSONAL_EXITO,
  INFORMACION_PERSONAL_ERROR,
  CONSULTA_INFO_USUARIO,
  CONSULTA_INFO_EXITOSA,
  CONSULTA_INFO_ERROR,
} from "../types";

const initalState = {
  usuario: {},
  loading: false,
  error: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case INFORMACION_PERSONAL:
      return {
        ...state,
        loading: true,
      };

    case INFORMACION_PERSONAL_EXITO:
      return {
        ...state,
        loading: false,
        usuario: action.payload,
      };
    case INFORMACION_PERSONAL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        usuario: null,
      };

    case CONSULTA_INFO_USUARIO:
      return {
        ...state,
        loading: true,
      };

    case CONSULTA_INFO_EXITOSA:
      return {
        ...state,
        loading: false,
        usuario: action.payload,
      };
    case CONSULTA_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        usuario: null,
      };

    default:
      return state;
  }
}
