import {combineReducers} from 'redux'
import authReducer from './authReducer'
import gestionCreditoReducer from './gestionCreditoReducer'

export default combineReducers({
    usuario: authReducer,
    gestionCreditos: gestionCreditoReducer
})