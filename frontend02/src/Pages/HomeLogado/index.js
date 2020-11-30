import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Components/Menu';
import Footer from "../../Components/Footer"
import AdicionarNaLista from "../../assets/images/addNaLista.svg"
import Listar from "../../assets/images/ListarNaLista.svg";
import "./style.css"

export default function HomeLogado() {
  return (
    <>
      <Menu />
      <div className="ContainerHomeLogado">
        <div className="HomeLogadoDiv">
          <h2 className="tituloLogado">
            Olá, John
            <br />
            Desabafe com a gente.
          </h2>

          <div className="containerLogadoMeio">
            <div>
              <h3>
                <Link to="/adicionarNaLista">Adicionar na Lista Negra</Link>
              </h3>
              <div className="backgroundDoHomeLogado">
                <img src={AdicionarNaLista} />
              </div>
            </div>

            <div>
              <h3>
                <Link to="/consultar">Consultar na Lista Negra</Link>
              </h3>
              <div className="backgroundDoHomeLogado">
                <img src={Listar} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}


