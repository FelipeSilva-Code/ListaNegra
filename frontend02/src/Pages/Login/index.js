import React, { useState } from "react"
import "./styles.css";
import Menu from "../../Components/MenuDeslogado"
import Footer from "../../Components/Footer"
import { Link, useHistory } from "react-router-dom";
import ListaNegra from "../../services/ListaNegraApi";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../Components/Loading";

const api = new ListaNegra();

export default function Login () {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [mostrarLoading, setMostrarLoading] = useState(false);


  const history = useHistory();

  const Logar = async () => {

    try {

        setMostrarLoading(true);

        const request = {
          "Email": email,
          "Senha": senha,
        };

        let resp = await api.logar(request);

        resp = resp.data;

        setMostrarLoading(false);
       
        history.push({
          pathname:"homeLogado",
          state:resp
        });
  
    } catch (e) {

        setMostrarLoading(false);
        toast.error(e.response.data.erro)
    }

  }
    return (
      <>
        <ToastContainer/>
        {mostrarLoading === true && 
          <Loading/>
        }
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
                <Link className="linkToCad" to="/procurarConta">
                  Esqueceu a Senha
                </Link>
                <br/>
                ou
                <br/>
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