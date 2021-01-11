import React, { useState, useRef } from "react";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha"
import Loading from "../../Components/Loading";
import ListaNegraApi from "../../services/ListaNegraApi";
import { useHistory } from "react-router-dom";
import ContainerTotalLogado from "../../Components/ContainerTotal";

const api = new ListaNegraApi()

export default function AlterarSenha (props) {

    const history = useHistory();

    const [responseLogado, setResponseLogado] = useState(props.location.state);

    const [senhaAtual, setSenhaAtual] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");

    const [mostrarLoading, setMostrarLoading] = useState(false);

    const alterarSenha = async () => {
        try {
          
            setMostrarLoading(true);

            const req = {
                "SenhaAtual": senhaAtual,
                "Senha1": senha1,
                "Senha2": senha2
            };

            console.log(req);

            await api.novaSenha(req, responseLogado.idUsuario);
        
            history.push({pathname:"/usuario", state: props.location.state});

            setMostrarLoading(false);
        }
         catch (e) {
            
            setMostrarLoading(false);
            toast.error(e.response.data.erro);
        
        }
    }


    const voltar = () => {
        history.goBack();
    }


    return(
        <>
        {mostrarLoading === true &&
            <Loading/>
        }
        <ContainerTotalLogado estado={responseLogado}>
         <ToastContainer/>
            <div className="containerAlterarSenha">
                <ContainerEsqueceuSenha>
                    <h3>Alterar Senha</h3>

                    <div className="divInputsAlterarSenha">
                        <label>Senha Atual 
                            <input onChange={e => setSenhaAtual(e.target.value)} type="password" className="form-control"/>
                        </label>

                        <div className="divNovaSenhaAlterarSenha">
                            <label>Nova Senha
                                <input onChange={e => setSenha1(e.target.value)} type="password" className="form-control"/>
                            </label>

                            <label>Repita a Senha
                                <input onChange={e => setSenha2(e.target.value)} type="password" className="form-control"/>
                            </label>
                        </div>
                    </div>
                    
                    <div className="divBtnsProcurarConta">
                        <button onClick={voltar} className="btn btn-outline-danger">Cancelar</button>
                        <button onClick={alterarSenha} className="btn btn-outline-success">Confirmar</button>
                    </div>

                </ContainerEsqueceuSenha>
            </div>
        </ContainerTotalLogado>
        </>
    )
}