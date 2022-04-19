import {useState,useEffect,createContext} from "react";
import axios from "axios";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [cargando,setCargando] = useState(true)
    const [auth,setAuth] = useState({})
    useEffect(()=>{
        const authUser = async () =>{
            const token = sessionStorage.getItem('x-access-token')   
            if(!token) {
                setCargando(false)
                return
            }
            const config = {
                headers:{
                    "Content-Type":"application/json",
                    "x-access-token":token
                }
            }
            try {
                const url = "http://localhost:5000/perfil"
                const res = await axios(url,config)  
            setAuth(res.data)
            } catch (error) {
                console.log(error.response)
                setAuth({})
            } 
            setCargando(false)
        }
        authUser()
    },[])

    const cerrarSesion = () =>{
        sessionStorage.removeItem('x-access-token')
        setAuth({})
    }

    const actualizarPerfil = async (datos) => {
        const token = sessionStorage.getItem('x-access-token')   
        if(!token) {
            setCargando(false)
            return
        }
        const config = {
            headers:{
                "Content-Type":"application/json",
                "x-access-token":token
            }
        }
        try {
            const url = `http://localhost:5000/perfil/${datos._id}`
            await axios.put(url,datos,config)
            return{
                msg:'Actualizaste tus datos correctamente'
            }
        } catch (error) {
            return {
                msg:error.response.data.msg,
                error:true
            }
        }
    }


    const guardarPassword = async(datos)=>{
        const token = sessionStorage.getItem('x-access-token')   
        if(!token) {
            setCargando(false)
            return
        }
        const config = {
            headers:{
                "Content-Type":"application/json",
                "x-access-token":token
            }
        }
        try {
            const url = 'http://localhost:5000/actualizar-password/'
            const res = await axios.put(url,datos,config)
            return {
                msg:res.data.msg
            }
        } catch (error) {
            return {
                msg:error.response.data.msg,
                error:true
            }
        }
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                setCargando,
                cerrarSesion,
                actualizarPerfil,
                guardarPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext