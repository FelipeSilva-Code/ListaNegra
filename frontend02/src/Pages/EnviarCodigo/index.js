import React from "react";
import "./styles.css"
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer"
import Loading from "../../Components/Loading";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha"
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ListaNegraApi from "../../services/ListaNegraApi";
import { toast, ToastContainer } from "react-toastify";

const api = new ListaNegraApi();

export default function EnviarCodigo (props) {

    const [responseConta, setResponseConta] = useState(props.location.state);

    const [mostrarLoading, setMostrarLoading] = useState(false);

    const history = useHistory();

    const voltar = () => {
        history.push("/logar");
    }

    const gerarCodigo = async () => {
        try {

            setMostrarLoading(true)
            
            const resp = await api.gerarCodigo(responseConta.email);

            const novoResponse = {
                responseConta: responseConta,
                codigo: resp
            };

            history.push({pathname:"/inserirCodigo", state: novoResponse});
        
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
            <div className="enviarCodigoContainer">
                <ContainerEsqueceuSenha>
                    <h3>Enviar Codigo</h3>

                    
                    <div className="divInfoContaEnviarCodigo">
                        <h5>
                            Nome: {responseConta.nome}
                            <br/>
                            <br/>
                            O email será enviadado para: 
                            <br/>
                            {responseConta.email}
                        </h5>
                    </div>

                    <div className="divBtnsEnviarCodigo">
                        <div>
                            <Link to="/procurarConta">
                               Não é você?
                            </Link>    
                        </div>

                        <div className="btnsCancelarEConfirmarEnviarCodigo">
                            <button onClick={voltar} className="btn btn-outline-danger">Cancelar</button>
                            <button onClick={gerarCodigo} className="btn btn-outline-success">Confirmar</button>
                        </div>
                    </div>

                </ContainerEsqueceuSenha>
            </div>
        <Footer/>
        </>
    )
}