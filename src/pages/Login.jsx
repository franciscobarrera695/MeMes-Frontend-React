import { Link,useNavigate } from "react-router-dom";
import {useState} from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/Axios.config"
import useAuth from "../hooks/useAuth";

const Login = () => {
  const {setAuth} = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta,setAlerta] = useState({})
  const navigate = useNavigate()


  const handleSubmit = async e => {
    e.preventDefault()
    if([email,password].includes("")){
      setAlerta({msg:"hay campos vacios", error:true})
      return;
  }
  try {
    const res = await clienteAxios.post("/login", {
      email,
      password,
    });
    sessionStorage.setItem('x-access-token', res.data.token);
    setAuth(res.data)
    navigate('/inicio')
   /* if(res.status === 200){
      alert(res.data.message)
      window.location.href = 'http://localhost:3000/perfil';*/
    
  } catch (e) {
    setAlerta({msg:e.response.data,error:true})
    
  }
}
  const {msg}  = alerta

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Inicia Sesion a la <span className="text-black">Red Social</span>{" "}Que estas esperando
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      {msg && <Alerta alerta={alerta}/>}
        <form action="" onSubmit={handleSubmit}>
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
          <input
            type="submit"
            value="Iniciar Sesion"
            className="bg-indigo-700 w-full py-3 px-8 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto shadow-lg shadow-indigo-500/50 "
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/register">
            ¿No tienes una cuenta? Registrate
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

export default Login;
