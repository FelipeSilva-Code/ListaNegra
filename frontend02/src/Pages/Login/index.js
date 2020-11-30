import React from "react"
import "./styles.css";
import Menu from "../../Components/Menu"
import Footer from "../../Components/Footer"
import { Link } from "react-router-dom";

export default function Login () {
    return (
      <>
        <Menu />

        <div className="ContainerTotalLogin">
          <div className="loginCont">
            <h1>Login</h1>

            <div className="inputLogin">
              <label>
                E-mail<input className="inputEmailLogin form-control"></input>
              </label>
            </div>

            <div className="inputLogin">
              <label>
                Senha<input className="inputSenhaLogin form-control"></input>
              </label>
            </div>

            <div className="botoesLogin">
              <button className="btn btn-success">Entrar</button>
            </div>

            <div className="irParaTelaDeCadastrar">
              <p>
                Ainda não tem uma conta? <br />
                <Link className="linkToCad" to="/cadastrar">
                  Cadastrar-se
                </Link>
              </p>
            </div>
          </div>
        </div>

        <Footer/>
      </>
    );
}