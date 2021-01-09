import React from "react";
import "./styles.css"
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer"
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha"
import { Link } from "react-router-dom";

export default function EnviarCodigo () {
    return(
        <>
        <Menu/>
            <div className="enviarCodigoContainer">
                <ContainerEsqueceuSenha>
                    <h3>Enviar Codigo</h3>

                    
                    <div className="divInfoContaEnviarCodigo">
                        <h5>
                            Nome: Felipe Conceição Silva
                            <br/>
                            <br/>
                            O email será enviadado para: 
                            <br/>
                            felipecsilva208@gmail.com
                        </h5>
                    </div>

                    <div className="divBtnsEnviarCodigo">
                        <div>
                            <Link to="/procurarConta">
                               Não é você?
                            </Link>    
                        </div>

                        <div className="btnsCancelarEConfirmarEnviarCodigo">
                            <button className="btn btn-outline-danger">Cancelar</button>
                            <button className="btn btn-outline-success">Confirmar</button>
                        </div>
                    </div>

                </ContainerEsqueceuSenha>
            </div>
        <Footer/>
        </>
    )
}