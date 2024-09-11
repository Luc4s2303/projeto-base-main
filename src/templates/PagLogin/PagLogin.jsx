
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PagLogin.css'
import Fundacao from '../Funcacao.jsx/Fundacao';
import imagemchapeu from '../../assets/images/imagemchapeu.jpg';
import imagemtemplo from '../../assets/images/fundo2.jpg';
import imagemtlapis from '../../assets/images/imagemlapis.jpg';

function PagLogin(){
    return(<>
        
        <Fundacao />
        
        
            
        <img src={imagemtemplo} className='imagemtemplo'alt="" />
        <div className='div12'>
            <h1 className='texto8'>Sou professor</h1> 
            <p className='texto9'>Faça login como prefessor</p>
            <img src={imagemchapeu} className='imagem5' alt="" />

            <p className='texto10'>Criar nova conta como professor</p>
        </div>

        <div className='div13'>
            <h1 className='texto11'>Sou aluno</h1>
            <p className='texto12'>Faça login como aluno</p>
            <img src={imagemtlapis} className='imagemlapis'alt="" />
            <p className='texto13'>Criar uma noca conta como aluno</p>
        </div>
        
        
        </> 
    
    )


}
export default PagLogin