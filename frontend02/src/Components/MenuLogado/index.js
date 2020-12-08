import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function MenuLogado(props) {
  return (
    <div className="divHeader">
      <header className="menuLogado">
  
          <img
            className="imgLogoLogado"
            src="https://fontmeme.com/permalink/201129/cbae2c1ae5adc3a2c88d474953393a0e.png"
            alt="netflix-font"
          />
    

      <div>
        <Link className="linkMenuLogado" to={{pathname:"/usuario", state:props.estado}}>
            <i className="fas fa-user-circle"></i>
        </Link>
      </div>

      </header>
    </div>
  );
}
