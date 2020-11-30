import React, { useState} from "react";
import ListaNegra from '../../services/ListaNegraApi';
import {ToastContainer, toast} from 'react-toastify';
import  './index.css';
import 'react-toastify/dist/ReactToastify.css'
import Menu from "../../Components/Menu"
import Footer from "../../Components/Footer"

const api = new ListaNegra()

export default function Cadastrar() {
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [inclusao, setInclusao] = useState("");
    const [local, setLocal] = useState("Outro");
    const [foto, setFoto] = useState("user.png");

    const salvarClick = async () => {
      
      try {
           await api.cadastrar({
                nome: nome,
                motivo: motivo,
                inclusao: inclusao,
                local: local,
                foto: foto
            });

            setNome("");
            setMotivo("");
            setLocal("dd/mm/aaaa");
            setInclusao("")          

          toast.dark("Cadastro na lista negra!!!")
      } catch(e) {
        toast.error(e.response.data.erro); 
      }

    }
  
    return (
      <>
        <Menu />
        <div className="containerCadastrar">
          <div className="containerCentroCadastrar">
            <div>
              <h2 className="tituloCadastrar">
                Adicionar na <span>Lista Negra</span>
              </h2>
            </div>

            <div className="inputsCadastrar">
              <label>Nome:&nbsp; &nbsp;</label>
              <input
                className="form-control"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="inputsCadastrar">
              <label>Motivo: &nbsp; </label>
              <input
                className="form-control"
                type="text"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
              />
            </div>

            <div className="inputsCadastrar">
              <label>Data:&nbsp;&nbsp;&nbsp; &nbsp;</label>
              <input
                className="form-control"
                type="date"
                value={inclusao}
                onChange={(e) => setInclusao(e.target.value)}
              />
            </div>

            <div className="inputsCadastrar">
              <label>Local: &nbsp; &nbsp;</label>
              <select
                className="form-control"
                onChange={(e) => setLocal(e.target.value)}
                id="local"
                value={local}
              >
                <option value="Outro">Outro</option>
                <option value="Escola">Escola</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Rua">Rua</option>
                <option value="Familía">Familia</option>
                <option value="Estadio">Estadio</option>
                <option value="Mercado">Mercado</option>
                <option value="Internet">Internet</option>
              </select>
            </div>

            <div className="inputsCadastrar">
              <label>Foto:&nbsp;&nbsp;&nbsp; &nbsp;</label>
              <input
                onChange={(e) => setFoto(e.target.files[0])}
                className="form-control-file"
                type="file"
              />
            </div>

            <div className="inputsCadastrar">
              <button className="btn btn-primary" onClick={salvarClick}>
                Cadastrar
              </button>
            </div>

            <ToastContainer />
          </div>
        </div>

        <Footer/>
      </>
    );
}