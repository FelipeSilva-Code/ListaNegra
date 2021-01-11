import React from "react";
import "./styles.css";
import Menu from "../MenuDeslogado"
import Footer from "../Footer";

export default function ContainerTotalDeslogado(props){
    return(
        <>
            <Menu/>
                <div className="containerTotalDeslogado">
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}