import React, { useState } from "react";
import "./styles.css";
import Menu from "../../Components/MenuLogado"
import Footer from "../../Components/Footer"
import { Link, useHistory } from "react-router-dom";
import ListaNegra from "../../services/ListaNegraApi";
import { toast, ToastContainer } from "react-toastify";

const api = new ListaNegra();

export default function Cadastrar () {
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");

    const history = useHistory();

    const Cadastrar = async () => {
        try {

               const request = {
                 "NomeUsuario": nome,
                 "Email": email,
                 "Senha1": senha1,
                 "Senha2": senha2,
               };

               let resp = await api.inscreverNoSistema(request);

               resp = resp.data

               history.push({
                 pathname: "/homeLogado",
                 state: resp
               });
            
        } catch (e) {
                toast.error(e.response.data.erro)            
        }



    }
    
    return(
        <>
        <ToastContainer/>
        <Menu/>
          <div className="ContainerCadastrar">

              <div className="contMeioCadastrar">
                  <h1>Crie sua conta</h1>

                  <div className="loginInputNome">
                    <label className="loginInput">Nome:<input onChange={e => setNome(e.target.value)}  className="form-control" type="text" /></label>
                  </div>

                  <div className="loginInputNome">
                     <label className="loginInput">E-mail:<input onChange={e => setEmail(e.target.value)}  className="form-control" type="text" /></label>
                  </div>

                  <div className="loginInputSenha">
                     <label >Senha:<input onChange={e => setSenha1(e.target.value)} type="password" className="inputSenhaLogin form-control" /></label>
                     <label >Confirme a Senha:<input onChange={e => setSenha2(e.target.value)} className="inputSenhaLogin form-control" type="password" /></label>
                  </div>

                  <div>
                      <button onClick={Cadastrar} className="btn btn-success">Cadastrar</button>
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