import React from "react";
import "./styles.css";
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha";
import { useState } from "react";
import ListaNegraApi from "../../services/ListaNegraApi";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const api = new ListaNegraApi();

export default function NovaSenha (props) {

    const [idUsuario, setIdUsuario] = useState(props.location.state.idUsuario);
    
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");

    const [mostrarLoading, setMostrarLoading] = useState(false);

    const history = useHistory();

    const alterarSenha = async () => {

        setMostrarLoading(true);
        
        try {

            const req = {
            "Senha1": senha1,
            "Senha2": senha2
        };

        await api.alterarSenha(req, idUsuario);

        history.push("/logar");

        setMostrarLoading(false);

        } catch (e) {
            
            setMostrarLoading(false);
            toast.error(e.response.data.erro);

        }

    }

    const voltar = () => {
        history.push("/logar")
    }

    return(
        <>
        {mostrarLoading == true && 
            <Loading/>
        }
        <Menu/>
         <ToastContainer/>
            <div className="containerNovaSenha">
                <ContainerEsqueceuSenha>
                    <h3>Alterar Senha</h3>

                    <div className="divInputsNovaSenha">
                        <label>
                            Nova Senha
                            <input onChange={e => setSenha1(e.target.value)} type="password" className="form-control"/>
                        </label>

                        <label>
                            Repita a senha
                            <input onChange={e => setSenha2(e.target.value)} type="password" className="form-control"/>
                        </label>
                    </div>

                    <div className="divBtnsProcurarConta">
                        <button onClick={voltar} className="btn btn-outline-danger">Cancelar</button>
                        <button onClick={alterarSenha} className="btn btn-outline-success">Confirmar</button>
                    </div>

                </ContainerEsqueceuSenha>
            </div>
        <Footer/>
        </>
    )
}