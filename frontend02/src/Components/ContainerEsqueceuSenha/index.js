import React from "react";
import "./styles.css";

export default function ContainerEsqueceuSenha (props) {
    return(
        <div className="esqueceuSenhaContainer">
            {props.children}
        </div>
    )
}