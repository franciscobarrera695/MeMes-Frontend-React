import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from '../config/Axios.config'

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [alerta,setAlerta] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if([nombre,email,password,rpassword].includes("")){
      setAlerta({msg:"hay campos vacios", error:true})
      return;
    }
    if(password !== rpassword){
      setAlerta({msg:"los passw no son iguales", error:true})
      return
    }
    if(password.length < 6){
      setAlerta({msg:"el password es muy corto,minimo 6 caracteres", error:true})
      return
    }
    setAlerta({})
     await clienteAxios.post("/register", {
      name:nombre,
      email,
      password,
    });
    navigate('/perfil')
  }
  const {msg}  = alerta




  return (

    

    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu Cuenta y Conoce al Resto{" "}
          <span className="text-black">Del Mundo</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta}/>}
        <form action="" onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Repetir Password
            </label>
            <input
              type="password"
              placeholder="Repetir Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={rpassword}
              onChange={e => setRpassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="shadow-lg shadow-indigo-500/50 bg-indigo-700 w-full py-3 px-8 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            ¿Ya tienes una cuenta? Inicia Sesion
          </Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to="/reset-password"
          >
            Olvide mi Password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Register;
