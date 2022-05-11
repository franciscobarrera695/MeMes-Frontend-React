import { Outlet,Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"


const AuthRouteLayout = () => {
  
  const {auth,cargando} = useAuth()

  if(cargando){
    return "cargando"
  }
  return (
      
      <>
      
    
    <Header/>
    {auth._id ? (
    <main className="container mx-auto mt-10">

    
    <Outlet/>
    </main>
    )  : <Navigate to="/"/>}
      
    </>
  )

  }
export default AuthRouteLayout