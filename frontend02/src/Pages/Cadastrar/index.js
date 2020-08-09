import React, { useState, useRef } from "react";
import ListaNegra from '../../services/ListaNegraApi';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const api = new ListaNegra()


export default function Cadastrar() {
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");

    const salvarClick = async () => {
        
        const resp = await
        api.cadastrar({
            nome: nome,
            motivo: motivo
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
    
            <button onClick={salvarClick}>Cadastrar</button>
            <ToastContainer/>
        </div>
    )
}