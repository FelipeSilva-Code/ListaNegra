import React, { useState, useRef } from 'react';
import ListaNegraApi from '../../services/ListaNegraApi'
import LoadingBar from 'react-top-loading-bar';

const api = new ListaNegraApi();

export default function Consultar() {
    
  const loadingBar = useRef(null);
    
  
  const [registros, setRegistros] = useState([]);

  
  const consultarClick = async () => {
  
    loadingBar.current.continuousStart();

    const lns = await api.consultar() 
     setRegistros([...lns])

      loadingBar.current.complete();
  }

  
    
    return (
      <div>
        <LoadingBar
          height={4}
          color="#f11946"
          ref={loadingBar}
        />
        <h1>Consultar na Lista Negra</h1>

        <div>
          <button onClick={consultarClick}>Consultar</button>
        </div>

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Motivo</th>
                <th>Inclusao</th>
              </tr>
            </thead>

            <tbody>
              {registros.map((item) => (
                <tr key={item.id}>
                  <td scope="row">#{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.motivo}</td>
                  <td>{new Date(item.inclusao + "Z").toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}