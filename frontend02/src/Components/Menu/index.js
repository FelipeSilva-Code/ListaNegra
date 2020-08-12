import React from'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function Menu (){
    return(
        <div className="divHeader">
          <header className="menu">
             <Link className="imgLogo" to="/"><img className="imgLogo"  src="https://fontmeme.com/permalink/200812/a7b26cf805b9c79f5231316f98a530fb.png" alt="netflix-font"/></Link>
          </header>
        </div>
    )
}