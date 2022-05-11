import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../../components/Alerta";
import useAuth from "../../hooks/useAuth";

const CambiarPassword = () => {


  const {guardarPassword} = useAuth()

  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    password_actual:'',
    password_nuevo:''
  });
  const handleSubmit =async (e) => {
    e.preventDefault();
    if(Object.values(password).some(campo => campo === '')){
      setAlerta({
        msg:'Todos los Campos son obligatorios',
        error:true
      })
      return
    }
    if(password.password_nuevo.length < 6){
      setAlerta({
        msg:"El Password debe tener minimo 6 caracteres",
        error:true
      })
      return
    }
    const datos = await guardarPassword(password)
    setAlerta(datos)
  };
  const { msg } = alerta;
  return (
    <>
      <nav>
        <Link
          to="/inicio/configuracion/editar-perfil"
          className="font-bold uppercase text-gray-400 mx-2"
        >
          Perfil
        </Link>
        <Link
          to="/inicio/configuracion/cambiar-password"
          className="font-bold uppercase text-gray-400"
        >
          Cambiar Password
        </Link>
      </nav>
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Password Aqui</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="text-gray-600 uppercase font-bold">
                Password Actual:
              </label>
              <input
                type="password"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                name="password_actual"
                placeholder="Escribe tu Password actual"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label className="text-gray-600 uppercase font-bold">
                Password Nuevo:
              </label>
              <input
                type="password"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                name="password_nuevo"
                placeholder="Escribe tu nuevo Password"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <input
              type="submit"
              value="Actualizar Password"
              className="bg-indigo-600 w-full p-3 my-3 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/50 "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
