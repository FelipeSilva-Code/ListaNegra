import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Cadastrar from './Pages/Cadastrar';
import Consultar from './Pages/Consultar';
import App from './Pages/App';

export default function Routes () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/cadastrar" exact component={Cadastrar}></Route>
          <Route path="/consultar" exact component={Consultar}></Route>
        </Switch>
      </BrowserRouter>
    );
}