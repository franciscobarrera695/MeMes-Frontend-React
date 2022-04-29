import { useState,useRef } from "react";
import Form from "../components/Form";
import ListPost from "../components/ListPost";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Perfil = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const { auth,actualizarImagenPerfil } = useAuth();
  const [image,setImage] = useState([])


  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
    
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setImage(fileObj)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    actualizarImagenPerfil({image})
  }

  
  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl flex flex-col items-center lg:flex-row">
        <div className="mx-5">
          <img
          onClick={handleClick}
            className="w-40"
            src={ auth.image?.url || "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg " }
            alt="Perfil"
          />

<div>
 <form action=""onSubmit={handleSumbit}>
 <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button className="block bg-indigo-600 py-2 px-2 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/50 "
            
            type="submit"
            >Cambiar Imagen</button>
 </form>
 
      
  
    </div>
          
        </div>
        <div className="mx-3">
          <p className="font-bold uppercase text-indigo-600 my-2">
            Nombre:{" "}
            <span className="font-semibold normal-case text-black">
              {auth.name}
            </span>
          </p>
          <p className="font-bold uppercase text-indigo-600 my-2">
            Email:{" "}
            <span className="font-semibold normal-case text-black">
              {auth.email}
            </span>
          </p>
          <p className="font-bold uppercase text-indigo-600 my-2">
            Telefono:{" "}
            <span className="font-semibold normal-case text-black">{}</span>
          </p>
          <Link
            to="/perfil/configuracion/cambiar-password"
            className="font-bold uppercase text-gray-400"
          >
            Cambiar Password
          </Link>
        </div>

        <div className="py-5  lg:ml-auto ms:mx-auto">
          <Link
            className="block bg-indigo-600 py-3 px-10 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/50 "
            to="/perfil/configuracion/editar-perfil"
          >
            Editar Perfil
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <button
          className="bg-indigo-600 text-white text-bold uppercase mx-10 p-3 rounded-md md:hidden hover:bg-indigo-800 shadow-lg shadow-indigo-500/50"
          type="button"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
        </button>
        <div
          className={`${
            mostrarFormulario ? "block" : "hidden"
          } md:block md:w-1/2 lg:2/5`}
        >
          <Form />
          
        </div>
        <div className="md:w-1/2 lg:3/5">
          <ListPost />
        </div>
      </div>
    </>
  );
};

export default Perfil;
