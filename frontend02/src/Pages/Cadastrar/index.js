import React, { useState} from "react";
import ListaNegra from '../../services/ListaNegraApi';
import {ToastContainer, toast} from 'react-toastify';
import  './index.css';
import 'react-toastify/dist/ReactToastify.css'

const api = new ListaNegra()

export default function Cadastrar() {
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [inclusao, setInclusao] = useState();
    const [local, setLocal] = useState();

    const salvarClick = async () => {
        
      await api.cadastrar({
            nome: nome,
            motivo: motivo,
            inclusao: inclusao,
            local: local
        });
        toast.dark("Cadastrado na lista negra!!!")
    }
  
    return(
        <div className="containerCadastrar">
            <div className="containerCentroCadastrar">
            
                <div>
                    <h2 className="tituloCadastrar">Cadastrar na Lista Negra</h2>
                </div>
            
                <div className="inputsCadastrar">
                    <label>Nome:&nbsp; &nbsp;</label>
                    <input className="form-control" type="text"
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    />
                </div>
        
                <div className="inputsCadastrar">
                    <label>Motivo: &nbsp; </label>
                    <input className="form-control" type="text"
                    value={motivo}
                    onChange={e => setMotivo(e.target.value)}
                    />
                </div>

                <div className="inputsCadastrar">
                    <label>Data:&nbsp;&nbsp;&nbsp; &nbsp;</label>
                    <input className="form-control"type="date"
                    value={inclusao}
                    onChange={e => setInclusao(e.target.value)}
                    />
                </div>

                <div className="inputsCadastrar">
                    <label>Local: &nbsp; &nbsp;</label>
                    <select className="form-control" onChange={e => setLocal(e.target.value)} id="local">
                        <option value="Escola">Escola</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Rua">Rua</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                
                <div className="inputsCadastrar">
                    <button className="btn btn-primary" onClick={salvarClick}>Cadastrar</button>
                </div>
           
                <ToastContainer/>
            </div>
        </div>
    )
}