import React from "react";
import "./styles.css";
import Menu from "../../Components/MenuDeslogado";
import Footer from "../../Components/Footer";
import ContainerEsqueceuSenha from "../../Components/ContainerEsqueceuSenha"

export default function ProcurarConta () {
    return(
        <>
        <Menu/>
          <div className="procurarContaContainer">

              <ContainerEsqueceuSenha>
                <h3>Procurar Conta</h3>

                <div>
                    <label>Ensira o email que esta cadastrado
                        <input placeholder="insira o email" type="text" className="form-control"/>
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