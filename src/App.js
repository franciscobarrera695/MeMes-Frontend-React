import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import AuthRouteLayout from "./layout/AuthRouteLayout";
import Login from "./pages/Login";
import Register from "./pages/Register"
import ConfirmEmail from "./pages/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword";
import Perfil from "./pages/Perfil";

//route/config
import EditarPerfil from "./pages/conf/EditarPerfil";
import CambiarPassword from "./pages/conf/CambiarPassword";

import {AuthProvider} from './context/AuthProvider'
import {PostProvider} from './context/PostProvider'



function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <PostProvider>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="reset-password" element={<ResetPassword/>}/>
          <Route path="confirm/:id" element={<ConfirmEmail/>}/>
        </Route>
       <Route path="/perfil" element={<AuthRouteLayout/>}>
        <Route index element={<Perfil/>}/>
        <Route path="configuracion/cambiar-password" element={<CambiarPassword/>}/>
        <Route path="configuracion/editar-perfil" element={<EditarPerfil/>}/>
       </Route>
      </Routes>
      </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
