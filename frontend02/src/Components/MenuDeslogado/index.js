import React from'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function MenuDeslogado (){
    return (
      <div className="divHeader">
        <header className="menu">
          <Link className="imgLogo" to="/">
              <img
                className="imgLogo"
                src="https://fontmeme.com/permalink/201129/cbae2c1ae5adc3a2c88d474953393a0e.png"
                alt="netflix-font"
              />
          </Link>

  
        </header>
      </div>
    );
}