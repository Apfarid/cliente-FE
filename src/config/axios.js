import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://cryptic-lake-31823.herokuapp.com/'
})

export default clienteAxios