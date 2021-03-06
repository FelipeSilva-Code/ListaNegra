import React, { useState, useRef } from 'react';
import './index.css'
import ListaNegra from '../../services/ListaNegraApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Components/Loading";
import ContainerTotalLogado from '../../Components/ContainerTotalLogado';

const api = new ListaNegra();

export default function Alterar (props) {
     
     const [id] = useState(props.location.state.id); //codigo que importa o estado da outra pagina
     const [nome, setNome] = useState(props.location.state.nome);
     const [inclusao, setInclusao] = useState(props.location.state.inclusao.substr(0, 10));
     const [motivo, setMotivo] = useState(props.location.state.motivo);
     const [local, setLocal] = useState(props.location.state.local);
     const [foto, setFoto] = useState(null);
     const [mostrarLoading, setMostrarLoading] = useState(false);


     const alterarClick = async () => {

       try{

          setMostrarLoading(true);

         //Se os nome do estado e do req forem iguais não precisa passar os dois
          const request = {
            "nome": nome,
            "motivo": motivo,
            "inclusao": inclusao,
            "local": local,
            "foto": foto,
          };


        await api.alterar(id, request );

        setMostrarLoading(false);
       
        toast.dark("Alterado com sucesso!!!")
     
      }catch(e){

        setMostrarLoading(false);
       
        toast.error(e.response.data.erro)
      }

     }


    return (
      <>
        {mostrarLoading === true && <Loading />}
        <ContainerTotalLogado estado={props.location.state}>
          <div className="containerCentralAlterar">
            <h1>Alterar Informações</h1>

            <div className="inputsAlterar">
              <label>Nome: &nbsp; &nbsp;</label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
                type="text"
              ></input>
            </div>

            <div className="inputsAlterar">
              <label>Motivo:&nbsp; &nbsp;</label>
              <input
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="form-control"
                type="text"
              ></input>
            </div>

            <div className="inputsAlterar">
              <label>Inclusao: &nbsp;</label>
              <input
                value={inclusao}
                onChange={(e) => setInclusao(e.target.value)}
                className="form-control"
                type="date"
              ></input>
            </div>

            <div className="inputsAlterar">
              <label>Local: &nbsp; &nbsp; &nbsp;</label>
              <select
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                className="form-control"
              >
                <option></option>
                <option value="Escola">Escola</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Rua">Rua</option>
                <option value="Familía">Familia</option>
                <option value="Estadio">Estadio</option>
                <option value="Mercado">Mercado</option>
                <option value="Internet">Internet</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="inputsAlterar">
              <button onClick={alterarClick} className="btn btn-success">
                Alterar
              </button>
            </div>
          </div>

          <ToastContainer />

        </ContainerTotalLogado >
      </>
    );
}