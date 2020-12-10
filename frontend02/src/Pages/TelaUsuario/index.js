import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer";
import MenuDeslogado from "../../Components/MenuDeslogado";
import "./styles.css";
import ListaNegraApi from "../../services/ListaNegraApi";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Components/Loading";

const api = new ListaNegraApi();

export default function TelaUsuario (props) {

    const [idUsuario, setIdUsario] = useState(props.location.state.idUsuario);
    const [nome, setNome] = useState(props.location.state.nomeUsuario);
    const [email, setEmail] = useState(props.location.state.email);
    const [senha, setSenha] = useState(props.location.state.senha);
    const [mostrarSenha, setMostrarSenha] = useState("password");
    const [responseLogado, setResponseLogado] = useState(props.location.state);
    const [mostrarLoading, setMostrarLoading] = useState(false);

    const showSenha = () => {
        if(mostrarSenha == "password")
            setMostrarSenha("text")

        else
            setMostrarSenha("password")

    }

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
        "Email": email,
        "Senha": senha,
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

    console.log(props);

    return (
      <>
        {mostrarLoading === true && <Loading />}
        <MenuDeslogado />
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

            <div className="usuarioInput">
              <label className="loginInput">
                Senha:
                <input
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  type={mostrarSenha}
                  className="form-control"
                />
              </label>

              {mostrarSenha == "password" && (
                <i onClick={showSenha} class="far fa-eye"></i>
              )}

              {mostrarSenha == "text" && (
                <i onClick={showSenha} class="far fa-eye-slash"></i>
              )}
            </div>

            <div className="divBtnUsuario">
              <button onClick={voltarClick} className="btn btn-danger">
                Voltar
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