import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"




const Header = () => {
    
    const {cerrarSesion} = useAuth()
    

  return (
    <header className='py-8 bg-indigo-600 shadow'>
        <div className="container mx-auto flex flex-col justify-between items-center lg:flex-row">
            <h1 className='font-bold text-2xl text-indigo-300 text-center '>{" "} 
              
                <Link to="/inicio" className='text-white font-black'>MeMes</Link>
            </h1>
            <nav className="flex flex-col items-center lg:flex-row gap-4 pt-3 ">
                <Link to="/inicio" className="text-white text-sm uppercase font-bold">Inicio</Link>
                <Link to="/inicio/perfil" className="text-white text-sm uppercase font-bold">Perfil</Link>
                <button
                type="button"
                className="text-white text-sm uppercase font-bold"
                onClick={() => { cerrarSesion();}}
                >Cerrar Sesion</button>
            </nav>
        </div>
    </header>
  )
}

export default Header