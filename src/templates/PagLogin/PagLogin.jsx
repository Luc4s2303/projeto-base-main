import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import backgroundImage from '../../assets/images/fundo2.jpg';// Imagem de fundo
import professorImage from '../../assets/images/imagemchapeu.jpg'; // Imagem para o botão do professor
import alunoImage from '../../assets/images/imagemlapis.jpg'; // Imagem para o botão do aluno
import Fundacao from '../Funcacao.jsx/Fundacao';
import "./PagLogin.css"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [dados, setDados] = useState([])
    const [clicou, setClicou] = useState(false)

    function enviarDados(){
        console.log(dados)
        axios.post('http://localhost:8080/cadProfessor', 
            {data: dados,
                mode: 'no-cors',
                headers: {                  
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization", 
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                    "Content-Type": "application/json;charset=UTF-8"                   
                },
            }
        ).then(response => console.log(response))
        .then(dados => alert('Dados enviados com sucesso'))
        .catch(error => console.log(error))
    }
    
    useEffect(()=>{
        console.log(dados)
       clicou ? enviarDados() : console.log(dados)
       return (()=>setClicou(false))
    }, [clicou])

  const navigate = useNavigate();
  
  const [isStudentModalOpen, setStudentModalOpen] = useState(false);
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [isStudentModalOpenLogin, setStudentModalOpenLogin] = useState(false);
  const [isTeacherModalOpenLogin, setTeacherModalOpenLogin] = useState(false);
  const [isAvisoProfessor, setAvisoProfessor] = useState(false);

  const openStudentModal = () => setStudentModalOpen(true);
  const openTeacherModal = () => setTeacherModalOpen(true);
  const openStudentModalLogin = () => setStudentModalOpenLogin(true);
  const openTeacherModalLogin = () => setTeacherModalOpenLogin(true);
  const openAvisoProfessor = () => setAvisoProfessor(true);


  const closeModal = () => {
    setStudentModalOpen(false);
    setTeacherModalOpen(false);
  };

  const closeModalLogin = () => {
    setStudentModalOpenLogin(false);
    setTeacherModalOpenLogin(false);
  };

  const closeAvisoProfessor = () =>{
    setTeacherModalOpen(false);
    setAvisoProfessor(false);
  }

  
  const proxpagina = () => {
    navigate('/PagProfessor'); // Usa useNavigate para redirecionar
  };

  const proxpagina2 = () => {
    navigate('/PagAluno'); // Usa useNavigate para redirecionar
  };
 
  const proxpagina3 = () => {
    navigate('/PagAviso'); // Usa useNavigate para redirecionar
  };
  return (

<>
<Fundacao />
   <div>
        <h1>Cadastrar Professor</h1>
        <Formik
            initialValues={{
                id: 0,
                nome: '',
                email: '',
                senha: '',
                certificado: null,
                endereco: '',
                cpf: '',
                statusProf: 'ATIVO'
            }}
            onSubmit={(values, actions) => {

                if(values.nome.length > 0){
                        setTimeout(() => {
                        setDados({
                            nome: values.nome,
                            email: values.email,
                            senha: values.senha,
                            certificado: values.certificado,
                            endereco: values.endereco,
                            cpf: values.cpf,
                            statusProf: values.statusProf
                        })
                        console.log(dados)
                        setClicou(true)
                        // alert(JSON.stringify(values, null, 2));
                        // console.log(JSON.stringify(values, null, 2));
                        // actions.setSubmitting(false);
                    }, 1000);
                } else {
                    alert('Favor preencher informações!')
                }
                
            }}
        > 
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <input
                            type="number"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.id}
                            placeholder='id'
                            name="id"
                            disabled
                        />
                        {props.errors.id && <div id="feedback">{props.errors.id}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.nome}
                            placeholder="Seu nome"
                            name="nome"
                        />
                        {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                            placeholder="E-mail"
                        />
                        {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.senha}
                            name="senha"
                            placeholder="Senha"
                        />
                        {props.errors.senha && <div id="feedback">{props.errors.senha}</div>}
                    </div>
                    <div>
                        <input
                            type="image"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.certificado}
                            name="certificado"
                            placeholder="Foto do Certificado"
                            hidden
                        />
                        {props.errors.certificado && <div id="feedback">{props.errors.certificado}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.endereco}
                            name="endereço"
                            placeholder="Seu endereço"
                        />
                        {props.errors.endereco && <div id="feedback">{props.errors.endereco}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.cpf}
                            name="cpf"
                            placeholder="CPF"
                        />
                        {props.errors.cpf && <div id="feedback">{props.errors.cpf}</div>}
                    </div>
                    <div>
                        <select
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.statusProf}
                            name="statusProf"
                        >
                            <option>ATIVO</option>
                            <option>INATIVO</option>
                        </select>
                        {props.errors.statusProf && <div id="feedback">{props.errors.statusProf}</div>}
                    </div>
                    
                    <button type="submit">SALVAR</button>
                </form>
            )}
        </Formik>
    </div>
  </>
  );

  
};

export default LoginPage;
