import {
  VER_CREDITO,
  VER_CREDITO_EXITO,
  VER_CREDITO_ERROR,
  SOLICITAR_CREDITO,
  SOLICITAR_CREDITO_EXITO,
  SOLICITAR_CREDITO_ERROR,
  CREDITO_EDITADO_EXITO,
} from "../types";
import helper from "../Helper";

const initialState = {
  credito: {},
  error: false,
  loading: false,
  diasPrestamo: 0,
  valorSolicitado: 0,
  solicitudCredito: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VER_CREDITO:
      return {
        ...state,
        loading: true,
      };
    case VER_CREDITO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        credito: action.payload,
      };
    case VER_CREDITO_ERROR:
      return {
        ...state,
        loading: false,
        //error: action.payload,
      };
    case SOLICITAR_CREDITO:
      return {
        ...state,
        loading: true,
      };
    case SOLICITAR_CREDITO_EXITO:
      return {
        ...state,
        loading: false,
        diasPrestamo: action.payload.diasPrestamo,
        valorPrestamo: action.payload.valorPrestamo,
        solicitudCredito: true,
      };
    case SOLICITAR_CREDITO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case CREDITO_EDITADO_EXITO:
      return {
        ...state,
        credito: action.payload 
      };

    default:
      return state;
  }
}
