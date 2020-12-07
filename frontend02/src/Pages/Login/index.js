import React, { useState } from "react"
import "./styles.css";
import Menu from "../../Components/MenuDeslogado"
import Footer from "../../Components/Footer"
import { Link, useHistory } from "react-router-dom";
import ListaNegra from "../../services/ListaNegraApi";
import { ToastContainer, toast } from "react-toastify";

const api = new ListaNegra();

export default function Login () {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();


  const history = useHistory();

  const Logar = async () => {

    try {

        const request = {
          "Email": email,
          "Senha": senha,
        };

        let resp = await api.logar(request);

        resp = resp.data;

        
       
        history.push({
          pathname:"homeLogado",
          state:resp
        });

  
      
    } catch (e) {

        toast.error(e.response.data.erro)
    }

  }
    return (
      <>
        <ToastContainer/>
        <Menu />

        <div className="ContainerTotalLogin">
          <div className="loginCont">
            <h1>Login</h1>

            <div className="inputLogin">
              <label>
                E-mail<input onChange={e => setEmail(e.target.value)} className="inputEmailLogin form-control"></input>
              </label>
            </div>

            <div className="inputLogin">
              <label>
                Senha<input type="password" onChange={e => setSenha(e.target.value)} className="inputSenhaLogin form-control"></input>
              </label>
            </div>

            <div className="botoesLogin">
              <button onClick={Logar} className="btn btn-success">Entrar</button>
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