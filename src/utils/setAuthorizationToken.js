import axios from 'axios'

export default function setAuthorizationToken(token){
    if (token) {
        axios.defaults.headers.common['token'] = `Beater ${token}`
    }else {
        delete axios.defaults.headers.common['token']   
    }
}