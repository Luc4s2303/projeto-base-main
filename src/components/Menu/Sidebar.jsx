import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from '../../assets/images/system-logo_24_x_24.png';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
            
                <span className="fw-bold fst-italic">Administração</span>
            </div>

            <nav className="nav flex-column">
                <Link className="nav-link" aria-current="page" to={'/home'}>Solicitações</Link>
                <Link className="nav-link" to={'/mensagem'}>Professores</Link>
                <Link className="nav-link" to={'/usuario'}>Cursos</Link>
                <Link className="nav-link" to={'/usuario'}>Alunos</Link>
            </nav>
        </div>
    )
}

export default Sidebar