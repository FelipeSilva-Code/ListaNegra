import React from "react";
import "./styles.css"
import Loading from "../../Components/Loading";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ListaNegraApi from "../../services/ListaNegraApi";
import ContainerTotalDeslogado from "../../Components/ContainerTotalDeslogado";

const api = new ListaNegraApi();

export default function InserirCodigo (props) {

    const history = useHistory();

    const [codigo, setCodigo] = useState(props.location.state.codigo);
    const [responseConta, setResponseConta] = useState(props.location.state.responseConta);
    const [codigoPassado, setCodigoPassado] = useState("");
    
    const [mostrarLoading, setMostrarLoading] = useState(false);
    
    const voltar = () => {
        history.push("/logar")
    } 

    const verSeCodigoEstaCorreto = () => {

        setMostrarLoading(true)

        if(codigo !== codigoPassado){
            setMostrarLoading(false)
            toast.error("O código está incorreto ou já expirou");
        }
        else{
            history.push({pathname:"/novaSenha", state: responseConta});  
            setMostrarLoading(false); 
        }
    }

    const gerarNovoCodigo = async () => {
        try {
            
            setMostrarLoading(true);

            const resp = await api.gerarCodigo(responseConta.email);
            setCodigo(resp);

            setMostrarLoading(false);

            toast.success("Código enviado.")

        } catch (e) {

            setMostrarLoading(false);
            toast.error(e.response.data.erro)
        
        }
    }

    return(
        <>
        {mostrarLoading == true && 
            <Loading/>
        }
        <ContainerTotalDeslogado>
         <ToastContainer/>
                <ContainerEsqueceuSenha>
                    <h3>Inserir Código</h3>

                    <div className="inputInserirCodigo">
                        <label>
                            Insira o código 
                            <input onChange={e => setCodigoPassado(Number(e.target.value))} placeholder="insira o código" className="form-control" />
                        </label>
                    </div>

                     <div className="divBtnsEnviarCodigo">
                        <div>
                            <p className="pReenviarCodigo" onClick={gerarNovoCodigo}>
                              Reenviar Código
                            </p>  
                        </div>

                        <div className="btnsCancelarEConfirmarEnviarCodigo">
                            <button onClick={voltar} className="btn btn-outline-danger">Cancelar</button>
                            <button onClick={verSeCodigoEstaCorreto} className="btn btn-outline-success">Confirmar</button>
                        </div>
                    </div>
                </ContainerEsqueceuSenha>
        </ContainerTotalDeslogado>
        </>
    )
}