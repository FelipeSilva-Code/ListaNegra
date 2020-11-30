import React from "react";
import "./styles.css";
import Menu from "../../Components/Menu"
import Footer from "../../Components/Footer"
import { Link } from "react-router-dom";

export default function Cadastrar () {
    return(
        <>
        <Menu/>
          <div className="ContainerCadastrar">

              <div className="contMeioCadastrar">
                  <h1>Crie sua conta</h1>

                  <div className="loginInputNome">
                    <label className="loginInput">Nome:<input className="form-control" type="text" /></label>
                  </div>

                  <div className="loginInputNome">
                     <label className="loginInput">E-mail:<input className="form-control" type="text" /></label>
                  </div>

                  <div className="loginInputSenha">
                     <label >Senha:<input type="password" className="inputSenhaLogin form-control" /></label>
                     <label >Confirme a Senha:<input className="inputSenhaLogin form-control" type="password" /></label>
                  </div>

                  <div>
                      <button className="btn btn-success">Cadastrar</button>
                  </div>

                  <div className="irParaTelaDeCadastrar">
                        <p>
                            Já tem uma conta? <br />
                            <Link className="linkToCad" to="/logar">
                            Logar
                            </Link>
                        </p>
                  </div>


              </div>

          </div>
        
        <Footer/>
        </>
    )
}