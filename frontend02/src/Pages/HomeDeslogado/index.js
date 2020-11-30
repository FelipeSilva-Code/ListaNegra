import React from "react";
import Menu from "../../Components/Menu"
import Footer from "../../Components/Footer"
import ImageLogin from "../../assets/images/undraw_Login_re_4vu2.svg";
import AddUser from "../../assets/images/addUser.svg";
import "./styles.css";
import { Link } from "react-router-dom";

export default function HomeDeslogado () {
    return (
      <>
        <Menu />

        <div className="containerDeslogado">
          <div className="tituloDeslogado">
            <h3 className="tituloTotalDeslogado">
              Olá, Seja bem-vindo(a) ao Lista Negra
            </h3>
            <h4> Aqui é um lugar criado para você dizer o que pensa, sem perder as amizades.</h4>
          </div>

          <div className="ContainerMeioHomeDeslogado">
            <div>
              <h3>Ainda não tem uma conta?</h3>
              <img className="imagemLogin" src={AddUser} />
              <Link to="cadastrar"> <p className="textoDeslogado">Cadastrar-se</p> </Link>
            </div>

            <div>
              <h3>Já tem uma conta?</h3>
               <img className="imagemLogin" src={ImageLogin} />
              <Link to="logar"> <p className="textoDeslogado">Entrar</p> </Link>
            </div>
          </div>
        </div>

        <Footer/>
      </>
    );
}