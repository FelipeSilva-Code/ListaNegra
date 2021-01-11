import React from "react";
import "./styles.css";
import Menu from "../MenuLogado"
import Footer from "../Footer";

export default function ContainerTotalLogado(props){

    const estado = props.estado;

    return(
        <>
            <Menu estado={estado} />
                <div className="containerTotalLogado">
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}