import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer";
import MenuDeslogado from "../../Components/MenuDeslogado";
import "./styles.css";

export default function TelaUsuario (props) {

    const [nome, setNome] = useState(props.location.state.nomeUsuario);
    const [email, setEmail] = useState(props.location.state.email);
    const [senha, setSenha] = useState(props.location.state.senha);
    const [mostrarSenha, setMostrarSenha] = useState("password");

    const showSenha = () => {
        if(mostrarSenha == "password")
            setMostrarSenha("text")

        else
            setMostrarSenha("password")

    }

    const history = useHistory();

    const voltarClick = () => {
        history.goBack();
        console.log("pq n foi?")
    }

    console.log(props);

    return(
        <>
            <MenuDeslogado/>
            
            <div className="containerTelaUsuario">

                <div className="contMeioUsario">

                 <h3>Seus Dados</h3>     
                 
                 <div className="usuarioInput">
                    <label className="loginInput">Nome:<input value={nome} onChange={e => setNome(e.target.value)}  className="form-control" type="text" /></label>
                  </div>

                  <div className="usuarioInput">
                     <label className="loginInput">E-mail:<input value={email} onChange={e => setEmail(e.target.value)}  className="form-control" type="text" /></label>
                  </div>

                  <div className="usuarioInput">
                     <label className="loginInput">Senha:<input value={senha} onChange={e => setSenha(e.target.value)} type={mostrarSenha} className="form-control" /></label>
                     
                     {mostrarSenha == "password" && 
                        <i onClick={showSenha} class="far fa-eye"></i>
                     }
                     
                     {mostrarSenha == "text" && 
                        <i onClick={showSenha} class="far fa-eye-slash"></i>
                     }
                  </div>

                  <div className="divBtnUsuario">
                      <button onClick={voltarClick} className="btn btn-danger">Cancelar</button>
                      <button className="btn btn-success">Alterar</button>
                  </div>

                </div>  

            </div>

            <Footer/>
        </>
    )
}