import React from "react";
import "./styles.css";
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha"
import Loading from "../../Components/Loading"
import { useHistory } from "react-router-dom";
import ListaNegraApi from "../../services/ListaNegraApi";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const api = new ListaNegraApi();

export default function ProcurarConta () {

    const history = useHistory();

    const [email, setEmail] = useState("");

    const [mostrarLoading, setMostrarLoading] = useState(false);

    const voltar = () => {
        history.push("/logar");
    }

    const procurarConta = async () => {
        try {
            
            setMostrarLoading(true);
            const resp = await api.procurarConta(email)
            history.push({pathname:"/enviarCodigo", state:resp})
            setMostrarLoading(false);
        
        } catch (e) {
            
            setMostrarLoading(false);
            toast.error(e.response.data.erro);
            
        }
    }
    return(
        <>
        {mostrarLoading == true && 
            <Loading/>
        }
        <Menu/>
         <ToastContainer/>
          <div className="procurarContaContainer">

              <ContainerEsqueceuSenha>
                <h3>Procurar Conta</h3>

                <div className="divInputProcurarConta">
                    <label>Ensira o email que esta cadastrado
                        <input onChange={e => setEmail(e.target.value)} placeholder="insira o email" type="text" className="form-control"/>
                    </label>
                </div>

                <div className="divBtnsProcurarConta">
                    <button onClick={voltar} className="btn btn-outline-danger">Cancelar</button>
                    <button onClick={procurarConta} className="btn btn-outline-success">Confirmar</button>
                </div>
              </ContainerEsqueceuSenha>    


          </div>
        <Footer/>
        </>
    )
}