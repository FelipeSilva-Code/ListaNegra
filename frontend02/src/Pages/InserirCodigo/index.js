import React from "react";
import "./styles.css"
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha";
import { Link } from "react-router-dom";

export default function InserirCodigo () {
    return(
        <>
        <Menu/>
            <div className="containerInserirCodigo">
                <ContainerEsqueceuSenha>
                    <h3>Inserir Código</h3>

                    <div className="inputInserirCodigo">
                        <label>
                            Insira o código 
                            <input placeholder="insira o código" className="form-control" />
                        </label>
                    </div>

                     <div className="divBtnsEnviarCodigo">
                        <div>
                            <Link>
                              Reenviar Código
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