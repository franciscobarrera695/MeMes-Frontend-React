import axios from "axios";
import dotenv from "dotenv"
dotenv.config()
const clienteAxios = axios.create({
    baseURL:process.env.REACT_APP_URL_BACKEND
})

export default clienteAxios