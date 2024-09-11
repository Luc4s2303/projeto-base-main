
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
return (
    <div>

<footer>
        <Link to={'/login'}
          className='btn '>
          Acesso Restrito
        </Link>
        <Link to={'/login'}
          className='btn '>
          Sobre nós
        </Link>
      </footer>


    </div>
)

}
export default Footer