import { useEffect, useState } from "react"
import Alerta from "./Alerta"
import usePost from "../hooks/usePost"

const Form = () => {

    const [nombre,setNombre] = useState('')
    const [imagen,setImagen] = useState('')
    const [id,setId] = useState(null)


    const [alerta,setAlerta] = useState('')

    const {guardarPost , publicacion} = usePost()

    useEffect(()=>{
        if(publicacion?.title){
            setNombre(publicacion.title)
            setImagen(publicacion.image)
            setId(publicacion._id)
        }
    },[publicacion])



    const handleSubmit = e => {
        e.preventDefault()
        if([nombre,imagen].includes('')){
            setAlerta({msg:'Todos los campos son obligatorios',error:true})
            return;
        }
        setAlerta({
            msg:'Guardado Correctamente'
        })
        guardarPost({
            title:nombre,image:imagen,id
        })
        setNombre('')
        setImagen('')
        setId('')
    }
    const {msg} = alerta
    //input imagen
    //disabled
    //file
  return (
    <>
     <h2 className='font-black text-3xl text-center'>Formulario</h2>
     <p className='text-xl mt-5 mb-10 text-center'>Publica tus <span className='text-indigo-600 font-bold'>
          Memes</span></p>
    {msg && <Alerta alerta={alerta}/> }
    <form 
    onSubmit={handleSubmit}
    action="" 
    method=""
    className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="mb-5">
            <label className="text-gray-700 uppercase font-bold">Post</label>
            <input id="meme" type="text" placeholder="agrega una descripcion..." className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre} onChange={e =>setNombre(e.target.value) }/>
        </div>
        <div className="mb-5">
            <label className="text-gray-700 uppercase font-bold">Image</label>
            
            <input  id="meme" type="text" placeholder="agrega una descripcion..." className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={imagen} onChange={e=>setImagen(e.target.value)}/>
        </div>
        <input type="submit" value={id?'Guardar Cambios ':"Agregar Publicacion"} className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/50 "/>
    </form>
    </>
    )
}

export default Form