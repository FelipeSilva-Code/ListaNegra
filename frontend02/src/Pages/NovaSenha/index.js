import React from "react";
import "./styles.css";
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha";

export default function NovaSenha () {
    return(
        <>
        <Menu/>
            <div className="containerNovaSenha">
                <ContainerEsqueceuSenha>
                    <h3>Alterar Senha</h3>

                    <div className="divInputsNovaSenha">
                        <label>
                            Nova Senha
                            <input type="password" className="form-control"/>
                        </label>

                        <label>
                            Repita a senha
                            <input type="password" className="form-control"/>
                        </label>
                    </div>

                    <div className="divBtnsProcurarConta">
                        <button className="btn btn-outline-danger">Cancelar</button>
                        <button className="btn btn-outline-success">Confirmar</button>
                    </div>

                </ContainerEsqueceuSenha>
            </div>
        <Footer/>
        </>
    )
}