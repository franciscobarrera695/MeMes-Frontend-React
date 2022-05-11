import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/Axios.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const authUser = async () => {
      const token = sessionStorage.getItem("x-access-token");
      if (!token) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      };
      try {
        const res = await clienteAxios("/perfil", config);
        setAuth(res.data);
      } catch (error) {
        console.log(error.response);
        setAuth({});
      }
      setCargando(false);
    };
    authUser();
  }, []);

  const cerrarSesion = () => {
    sessionStorage.removeItem("x-access-token");
    setAuth({});
  };

  const actualizarPerfil = async (datos) => {
    const token = sessionStorage.getItem("x-access-token");
    if (!token) {
      setCargando(false);
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    try {
      const url = `/perfil/${datos._id}`;
      await clienteAxios.put(url, datos, config);
      return {
        msg: "Actualizaste tus datos correctamente",
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const guardarPassword = async (datos) => {
    const token = sessionStorage.getItem("x-access-token");
    if (!token) {
      setCargando(false);
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    try {
      const url = "/actualizar-password";
      const res = await clienteAxios.put(url, datos, config);
      return {
        msg: res.data.msg,
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };
  const actualizarImagenPerfil = async (datos) => {
      
    const token = sessionStorage.getItem("x-access-token");
    if (!token) {
      setCargando(false);
      return;
    }
    const configImg = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": token,
        }
      };
    try {
     
      const form = new FormData();
      for (const key in datos) {
        form.append(key, datos[key]);
      }
    
      const url = "/actualizar-imagen-perfil";
      const res = await clienteAxios.put(url, form, configImg);
      return {
        msg: res.data.msg,
      };
    } catch (error) {
      console.log(error)
      return window.alert('Por favor,Primero seleccione una imagen')
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        setCargando,
        cerrarSesion,
        actualizarPerfil,
        guardarPassword,
        actualizarImagenPerfil,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
