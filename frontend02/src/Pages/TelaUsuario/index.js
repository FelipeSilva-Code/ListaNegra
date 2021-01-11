import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer";
import Menu from "../../Components/MenuLogado";
import "./styles.css";
import ListaNegraApi from "../../services/ListaNegraApi";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Components/Loading";

const api = new ListaNegraApi();

export default function TelaUsuario (props) {

    const [idUsuario, setIdUsario] = useState(props.location.state.idUsuario);
    const [nome, setNome] = useState(props.location.state.nomeUsuario);
    const [email, setEmail] = useState(props.location.state.email);
    const [responseLogado, setResponseLogado] = useState(props.location.state);
    const [mostrarLoading, setMostrarLoading] = useState(false);

    const history = useHistory();

    const voltarClick = () => {
        history.push({pathname: "/homeLogado", state: responseLogado});
    }

    const alterarDados = async () => {
        try {
              
        setMostrarLoading(true);

        const request = {
        "IdUsuario": idUsuario,
        "NomeUsuario": nome,
        "Email": email
        };

        const resp = await api.alterarDadosUsuario(request);

        toast.success("Dados alterados com sucesso!");

        setResponseLogado(resp);

        setMostrarLoading(false)
            
        } catch(e) {
            
        setMostrarLoading(false);
        toast.error(e.response.data.erro);

        }
    }

    const irParaTelaDeAlterarSenha = () => {
      history.push({pathname:"/alterarSenha", state: props.location.state});
    } 

    return (
      <>
        {mostrarLoading === true && <Loading />}
        <Menu estado={props.location.state} />
        <ToastContainer />

        <div className="containerTelaUsuario">
          <div className="contMeioUsario">
            <h3>Seus Dados</h3>

            <div className="usuarioInput">
              <label className="loginInput">
                Nome:
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </label>
            </div>

            <div className="usuarioInput">
              <label className="loginInput">
                E-mail:
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </label>
            </div>

            <div className="divAlterarSenhaTelaUsuario">
              <button
                onClick={irParaTelaDeAlterarSenha}
                className="btn btn-outline-primary"
              >
                Alterar Senha
              </button>
            </div>

            <div className="divBtnUsuario">
              <button onClick={voltarClick} className="btn btn-danger">
                &nbsp; Voltar &nbsp;
              </button>
              <button onClick={alterarDados} className="btn btn-success">
                Alterar
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}