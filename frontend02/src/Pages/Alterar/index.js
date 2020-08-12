import React, { useState, useRef } from 'react';
import './index.css'
import ListaNegra from '../../services/ListaNegraApi';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import 'react-toastify/dist/ReactToastify.css';
import Menu from  '../../Components/Menu'

const api = new ListaNegra();

export default function Alterar (props) {

    const loadingBar = useRef(null);

     const [id, setId] = useState();
     const [nome, setNome] = useState();
     const [inclusao, setInclusao] = useState();
     const [motivo, setMotivo] = useState();
     const [local, setLocal] = useState();

     const alterarClick = async () => {

        let r = window.confirm("Você irá editar uma pessoa da lista negra!!!");

        if(r === true){
         loadingBar.current.continuousStart();

        await api.alterar(id, {
            nome: nome,
            inclusao: inclusao,
            motivo: motivo,
            local: local
        });

         loadingBar.current.complete();
       
        toast.dark("Alterado com sucesso!!!")
    }
       else{
           return "Você apertou Cancelar!!!"
       }

     }


    return(
       <>
        <LoadingBar
                height={4}
                color="#f11946"
                ref={loadingBar}
            />
            <Menu/>
        <div className="containerAlterar">
            <LoadingBar
                height={4}
                color="#f11946"
                ref={loadingBar}
            />

            

            <div className="containerCentralAlterar">
 

            <h1>Alterar Informações</h1>


            <div className="inputsAlterar">
                    <label>Nome: &nbsp; &nbsp;</label>
                    <input onChange={(e) => setNome(e.target.value)} className="form-control" type="text"></input>
            </div>

            <div className="inputsAlterar">
                    <label>Motivo:&nbsp; &nbsp;</label>
                    <input onChange={(e) => setMotivo(e.target.value)} className="form-control" type="text"></input>
            </div>

            <div className="inputsAlterar">
                    <label>Inclusao: &nbsp;</label>
                    <input onChange={(e) => setInclusao(e.target.value)} className="form-control" type="date"></input>
            </div>

            <div className="inputsAlterar">
                    <label>Local: &nbsp; &nbsp; &nbsp;</label>
                    <select onChange={(e) => setLocal(e.target.value)} className="form-control">
                    <option value="Escola">Escola</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Rua">Rua</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className="inputsAlterar">
                    <button onClick={alterarClick} className="btn btn-success">Alterar</button>
            </div>
            
                      
            </div>
    
         <ToastContainer/>
        </div>
        </>
    )
}