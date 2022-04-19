import { Outlet,Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Spinner from "../components/Spinner"

const AuthRouteLayout = () => {
  
  const {auth,cargando} = useAuth()

  if(cargando){
    return <Spinner/>
  }
  return (
      
      <>
      
    
    <Header/>
    {auth?._id ? (
    <main className="container mx-auto mt-10">

    
    <Outlet/>
    </main>
    )  : <Navigate to="/"/>}
      
    </>
  )

  }
export default AuthRouteLayout