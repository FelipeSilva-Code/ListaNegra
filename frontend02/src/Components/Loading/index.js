import React from "react"
import "./styles.css"
import ReactLoading from 'react-loading';


export default function Loading () {
    const color = "black";
    const type = "spinningBubbles";
    return (
      <div className="containerLoading">
        <ReactLoading type={type} color={color} height={150} width={150} />
      </div>
    );
}