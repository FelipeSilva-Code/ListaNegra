import React, { useState, useRef } from 'react';
import ListaNegraApi from '../../services/ListaNegraApi'
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import { Link } from 'react-router-dom';
import Menu from '../../Components/Menu'


const api = new ListaNegraApi();

export default function Consultar() {
    
  const loadingBar = useRef(null);
  
  const [registros, setRegistros] = useState([]);

  const [pessoa, setPessoa] = useState({nome:"" , motivo:"", inclusao:"", local:""});



  
  const consultarClick = async () => {
   
  
    loadingBar.current.continuousStart();

    const lns = await api.consultar() 
     setRegistros([...lns])

      loadingBar.current.complete();
  }

   const dadosAlterar = (item) => {

    setPessoa(pessoa.nome = item.nome,
              pessoa.motivo = item.motivo,
              pessoa.inclusao = item.inclusao,
              pessoa.local = item.local);

              console.log(pessoa)
  }


  const deletarClick = async (id) => {
    
    
    var r = window.confirm("Você irá excluir uma pessoa da lista negra!");

    if (r === true) {
      loadingBar.current.continuousStart();

      await api.deletar(id);

      toast.dark("Excluido com sucesso!!!")

      consultarClick();

      loadingBar.current.complete();
    }
    else {
      return "Você pressionou Cancelar!";
    }

  }
    
    return (
      <>
      <Menu/>
      <div className="containerConsultar">
        <div className="containerCentroConsultar">
              <LoadingBar
                height={4}
                color="#f11946"
                ref={loadingBar}
              />
            
              <h1 className="tituloConsultar">Consultar na Lista Negra</h1>
             
          <div className="tableConsultar">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Motivo</th>
                  <th>Inclusao</th>
                  <th>Local</th>
                  <th>Excluir</th>
                  <th>Alterar</th>
                </tr>
              </thead>

              <tbody>
                {registros.map((item) => (
                  <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.motivo}</td>
                    <td>{new Date(item.inclusao + "Z").toDateString()}</td>
                    <td>{item.local}</td>
                    <td><button className="btn btn-danger" onClick={() => deletarClick(item.id)}>Deletar</button></td>
                    <td><Link to='/alterar'>
                         <button className="btn btn-info"
                         onClick={() => dadosAlterar(item)}>
                         Alterar
                      </button></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="btnConsultar">
            <button className="btn btn-warning" onClick={consultarClick}>Consultar</button>
          </div>
          
        

          <ToastContainer/>
        </div>
      </div>
      </>
    );  
}




