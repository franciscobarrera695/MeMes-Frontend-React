import axios from "axios";
import { createContext, useState, useEffect } from "react";


const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacion,setPublicacion] = useState([])
 

  useEffect(()=>{
      const obtenerPost = async () =>{
          try {
              const token = sessionStorage.getItem('x-access-token')
              if(!token) {
                return;}
              const config = {
                headers:{
                    "Content-Type":"application/json",
                    "x-access-token":token
                }
            }
            const res = await axios('http://localhost:5000/api/post',config)
              setPublicaciones(res.data)
          
          } catch (error) {
              console.log(error)
          }
      }
      obtenerPost()
  },[])

  const guardarPost = async(publicacion) =>{
console.log(publicacion)
    const token = sessionStorage.getItem('x-access-token')
        const config = {
            headers:{
                "Content-Type":"application/json",
                "x-access-token":token
            }
        }
    if(publicacion.id){
      const res = await axios.put(`http://localhost:5000/api/post/${publicacion.id}`,publicacion,config)

      const publicacionesActualizadas = publicaciones.map(publicacionState => publicacionState._id === res.data._id ? res.data : publicacionState)
      setPublicaciones(publicacionesActualizadas)
    }else{
      try {
        
        const res = await axios.post('http://localhost:5000/api/post',publicacion,config)
        const {user_id,...nuevaData} = res.data
      setPublicaciones([nuevaData,...publicaciones])
        
        


       
    } catch (error) {
        console.log(error)
    }
    }
    
    
  }
  const setEdicion = (publicacion) => {
    setPublicacion(publicacion)
  }

  const eliminarPublicacion = async id =>{

    const token = sessionStorage.getItem('x-access-token')
    if(!token) {return;}
    const config = {
      headers:{
          "Content-Type":"application/json",
          "x-access-token":token
      }
  }
    
    const confirmar = window.confirm('Confirmas que deseas Eliminar')
    if(confirmar){
      try {
        const {data} = await axios.delete(`http://localhost:5000/api/post/${id}`,config)

        const pacienteActualizado = publicaciones.filter(publicacionState => publicacionState._id !== id)
        
        setPublicaciones(pacienteActualizado)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const resetPublicaciones = () => {
    setPublicaciones([]);
}

  return (
    <PostContext.Provider
      value={{
        resetPublicaciones,
        publicaciones,
        guardarPost,
        setEdicion,
        eliminarPublicacion,
        publicacion,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
