import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"
import Cursos from "../templates/Cursos/Cursos"
import PagLogin from "../templates/PagLogin/PagLogin"
import PagPerfil from "../templates/PagPerfil/PagPerfil"
import PagPerfilProf from "../templates/PagPerfilProf/PagPerfilProf"
import PagProfessor from "../templates/PagProfessor/PagProfessor"
import NewCoursePage from "../templates/PagProfessor/PagNovoCurso"
import App2 from "../templates/AppProf/App2"
import PagAluno from "../templates/PagAluno/PagAluno"

import ForgotPass from "../templates/Login/ForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/PagLogin" element={<PagLogin />} />
        <Route path="/PagPerfil" element={<PagPerfil />} />
        <Route path="/PagProfessor" element={<PagProfessor />} />
        <Route path="/teacher-profile" element={<PagProfessor />} />
        <Route path="/new-course" element={<NewCoursePage />} />
        <Route path="/" element={<PagProfessor />} /> {/* Página inicial */}
        <Route path="/App2" element={<App2 />} />
        <Route path="/PagPerfilProf" element={<PagPerfilProf />} />
        <Route path="/PagAluno" element={<PagAluno/>} />


        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />


        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />

      </Routes>
    </div>
  )
}
export default AppRoutes