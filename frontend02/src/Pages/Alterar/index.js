import React, { useState, useRef } from 'react';
import './index.css'
import ListaNegra from '../../services/ListaNegraApi';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import 'react-toastify/dist/ReactToastify.css';
import Menu from  '../../Components/Menu'
import Footer from "../../Components/Footer"

const api = new ListaNegra();

export default function Alterar (props) {

    const loadingBar = useRef(null);

     const [id] = useState(props.location.state.id); //codigo que importa o estado da outra pagina
     const [nome, setNome] = useState(props.location.state.nome);
     const [inclusao, setInclusao] = useState(props.location.state.inclusao.substr(0, 10));
     const [motivo, setMotivo] = useState(props.location.state.motivo);
     const [local, setLocal] = useState(props.location.state.local);
     const [foto, setFoto] = useState(props.location.state.foto);

     console.log(foto)

     

     const alterarClick = async () => {

       try{
         loadingBar.current.continuousStart();

         //Se os nome do estado e do req forem iguais não precisa passar os dois
          const request = {
            nome: nome,
            motivo: motivo,
            inclusao: inclusao,
            local: local,
            foto: foto,
          };

          console.log(request);

        await api.alterar(id, request );

        loadingBar.current.complete();
       
        toast.dark("Alterado com sucesso!!!")
     
      }catch(e){
        console.log(e.response.data)
        toast.error(e.response.data.erro)
      }

     }


    return (
      <>
        <LoadingBar height={4} color="#f11946" ref={loadingBar} />
        <Menu />
        <div className="containerAlterar">
          <LoadingBar height={4} color="#f11946" ref={loadingBar} />

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
              <label>Foto: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                onChange={(e) => setFoto(e.target.files[0])}
                className="form-control-file"
                type="file"
              ></input>
            </div>

            <div className="inputsAlterar">
              <button onClick={alterarClick} className="btn btn-success">
                Alterar
              </button>
            </div>
          </div>

          <ToastContainer />
        </div>

        <Footer/>
      </>
    );
}