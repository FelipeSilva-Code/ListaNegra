import React, { useState, useRef, useEffect } from 'react';
import ListaNegraApi from '../../services/ListaNegraApi'
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import { Link } from 'react-router-dom';
import Menu from '../../Components/MenuLogado';
import Footer from "../../Components/Footer"



const api = new ListaNegraApi();

export default function Consultar( props ) {

  const [responseLogado, setResponseLogado] = useState(props.location.state);
    
  const loadingBar = useRef(null);
  
  const [registros, setRegistros] = useState([]);

  
  const consultarClick = async () => {
   
  
    loadingBar.current.continuousStart();

    const lns = await api.consultar(responseLogado.idUsuario); 
    
     setRegistros([...lns])

      loadingBar.current.complete();
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

  useEffect(() => {
    consultarClick();
  }, [])
    
    return (
      <>
        <Menu  estado={responseLogado}/>
        <div className="containerConsultar">
          <div className="containerCentroConsultar">
            <LoadingBar height={4} color="#f11946" ref={loadingBar} />

            <h1 className="tituloConsultar">Sua Lista Negra</h1>

            <div className="tableConsultar">
              {registros.length === 0 && (
                <div className="listaVaziaDiv">
                  <h3>
                    A sua Lista Negra está vazia. <br />O seu coraçãozinho não
                    tem guardado rancor de ninguém.
                    <br/>
                    <Link to={{pathname:"/adicionarNaLista", state: responseLogado}} >Adicionar na Lista Negra</Link>
                  </h3>
                </div>
              )}

              {registros.length !== 0 && (
                <table className="table table-hover">
                  <thead className="thead">
                    <tr>
                      <th>Foto</th>
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
                        <td>
                          <img
                            src={api.buscarImagem(item.foto)}
                            alt=""
                            height="32"
                          />
                        </td>
                        <td>{item.nome}</td>
                        <td>{item.motivo}</td>
                        <td>{new Date(item.inclusao).toLocaleString()}</td>
                        <td>{item.local}</td>
                        <td>
                          <button
                            className="DeletarConsult btn btn-danger"
                            onClick={() => deletarClick(item.id)}
                          >
                            Perdoar
                          </button>
                        </td>
                        <td>
                          <Link
                            className="AlterarConsult btn btn-success"
                            to={{
                              pathname: "/alterar",
                              state: item,
                            }}
                          >
                            Alterar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="btnConsultar">
              <button className="btn btn-warning" onClick={consultarClick}>
                Consultar
              </button>
            </div>

            <ToastContainer />
          </div>
        </div>

        <Footer />
      </>
    );  
}




