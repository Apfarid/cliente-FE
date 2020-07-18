import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gestionCreditoReducer from "./gestionCreditoReducer";
import usuarioReducer from "./usuarioReducer";

export default combineReducers({
  Usuario: usuarioReducer,
  gestionCreditos: gestionCreditoReducer,
});
