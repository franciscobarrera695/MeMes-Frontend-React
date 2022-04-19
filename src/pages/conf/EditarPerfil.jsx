import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import useAuth from "../../hooks/useAuth";
import Alerta from "../../components/Alerta";

const EditarPerfil = () => {

  const {auth,actualizarPerfil} = useAuth()
  const [perfil,setPerfil] = useState({})
  const [alerta,setAlerta] = useState({})
  
  useEffect(() => {
    setPerfil(auth)
  }, [auth])

  const handleSubmit =async e => {
    e.preventDefault()

    const {nombre,email} = perfil

    if([nombre,email].includes('')){
      setAlerta({
        msg:"Email y Nombre son obligatorios",
        error:true
      })
      return
    }
    const resultado = await actualizarPerfil(perfil)
    setAlerta(resultado)
  }
  const {msg} = alerta
  return (
    <>
      <nav>
        <Link
          to="/perfil/configuracion/editar-perfil"
          className="font-bold uppercase text-gray-400 mx-2"
        >
          Perfil
        </Link>
        <Link
          to="/perfil/configuracion/cambiar-password"
          className="font-bold uppercase text-gray-400"
        >
          Cambiar Password
        </Link>
      </nav>
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Informacion Aqui</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta}/>}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="text-gray-600 uppercase font-bold">
                Nombre:
              </label>
              <input
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                name="name"
                value={perfil.name || ""}
                onChange={e=>{setPerfil({
                  ...perfil,[e.target.name] : e.target.value
                })}}
              />
            </div>
            <div className="my-3">
              <label className="text-gray-600 uppercase font-bold">
                Email:
              </label>
              <input
              
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                name="email"
                value={perfil.email || ""}
                onChange={e=>{setPerfil({
                  ...perfil,[e.target.name] : e.target.value
                })}}
              />
            </div>
            <div className="my-3">
              <label className="text-gray-600 uppercase font-bold">
                Telefono:
              </label>
              <input
              disabled
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                name="telefono"
              />
            </div>
            <input type="submit"
              value="Guardar Cambios"
              className="bg-indigo-600 w-full p-3 my-3 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/50 "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
