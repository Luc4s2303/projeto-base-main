
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Fundacao.css'
import Logo from '../../assets/images/Logo1.png';

function Fundacao3 () {
    const [count, setCount] = useState(0)
    return(
      <>
     
        <div className=''>
        <nav className="navbar navbar-expand-lg menu">
          <div className="container-fluid">
            <Link to={"/"}>
          <img className="logo" src={Logo} alt="Logo" />
          </Link>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
              
              <ul className="navbar-nav">

            
               
                <li className="nav-item">
                  <a className="nav-link" href="/PagPerfil">Perfil</a>
                </li>
                <li className="nav-item">
                    <div className="di">
                <a className="nav-link" href="/PagAluno">Minhas Matrículas</a>
                </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Cursos2">Catálogo dos Cursos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/PagCertificados">Certificados</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        <div className='div0'></div>
        
       
       
      
      </div>
  
      <div className='div4'></div>
     
  </>

    )
}

export default Fundacao3;