import axios from "axios";

const clienteAxios = axios.create({
    baseURL:`https://memes-web.herokuapp.com/`
})

export default clienteAxios