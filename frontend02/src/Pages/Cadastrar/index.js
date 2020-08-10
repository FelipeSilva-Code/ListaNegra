import React, { useState, useRef } from "react";
import ListaNegra from '../../services/ListaNegraApi';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const api = new ListaNegra()


export default function Cadastrar() {
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [inclusao, setInclusao] = useState();
    const [local, setLocal] = useState();


    const salvarClick = async () => {
        
        const resp = await
        api.cadastrar({
            nome: nome,
            motivo: motivo,
            inclusao: inclusao,
            local: local

        });

        toast.dark("Cadastrado na lista negra!!!")
    }


  
    return(
        <div>
           
            <div>
                <h1>Cadastrar na Lista Negra</h1>
            </div>
    
            <div>
                <label>Nome:</label>
                <input type="text"
                value={nome} 
                onChange={e => setNome(e.target.value)}
                />
            </div>
    
            <div>
                <label>Motivo:</label>
                <input type="text"
                value={motivo}
                onChange={e => setMotivo(e.target.value)}
                />
            </div>

            <div>
                <label>Data:</label>
                <input type="date"
                value={inclusao}
                onChange={e => setInclusao(e.target.value)}
                />
            </div>

            <div>
                <label>Local:</label>
                <select onChange={e => setLocal(e.target.value)} id="local">
                    <option value="Escola">Escola</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Rua">Rua</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
    
            <button onClick={salvarClick}>Cadastrar</button>
            <ToastContainer/>
        </div>
    )
}