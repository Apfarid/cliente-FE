import {
  VER_CREDITO,
  VER_CREDITO_EXITO,
  VER_CREDITO_ERROR,
  SOLICITAR_CREDITO,
  SOLICITAR_CREDITO_EXITO,
  SOLICITAR_CREDITO_ERROR,
  CREDITO_EDITADO_EXITO,
  AJUSTE_STORE,
} from "../types";
import helper from "../Helper";

const initialState = {
  credito: {
    fechaFirma: null,
  },
  error: false,
  loading: false,
  //diasPrestamo: 0,
  //valorSolicitado: 0,
  //solicitudCredito: false,
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
        credito: action.payload,
        //diasPrestamo: action.payload.diasPrestamo,
        //valorPrestamo: action.payload.valorPrestamo,
        //solicitudCredito: true,
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
        loading: false,
        credito: action.payload,
      };
    case AJUSTE_STORE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
