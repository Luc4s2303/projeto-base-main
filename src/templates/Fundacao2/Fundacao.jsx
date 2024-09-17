
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Fundacao.css'
import Logo from '../../assets/images/Logo1.png';

function Fundacao2 () {
    const [count, setCount] = useState(0)
    return(
      <>
     
        <div className=''>
        <nav className="navbar navbar-expand-lg menu">
          <div className="container-fluid">
          <img className="logo" src={Logo} alt="Logo" />
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
              
              <ul className="navbar-nav">

            
               
                <li className="nav-item">
                  <a className="nav-link" href="/PagPerfilProf">Perfil</a>
                </li>
                <li className="nav-item">
                    <div className="di">
                <a className="nav-link" href="/PagProfessor">Área Professor</a>
                </div>
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

export default Fundacao2;