import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import AdicionarNaLista from './Pages/AdicionarNaLista';
import Consultar from './Pages/Consultar';
import HomeLogado from "./Pages/HomeLogado"
import Alterar from './Pages/Alterar';
import HomeDeslogado from "./Pages/HomeDeslogado"
import Login from "./Pages/Login"
import Cadastrar from './Pages/Cadastrar';
import TelaUsuario from './Pages/TelaUsuario';

export default function Routes () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeDeslogado}></Route>
          <Route path="/homeLogado" exact component={HomeLogado}/>
          <Route path="/adicionarNaLista" exact component={AdicionarNaLista}></Route>
          <Route path="/consultar" exact component={Consultar}></Route>
          <Route path="/alterar" exact component={Alterar}></Route>
          <Route path="/logar" exact component={Login}></Route>
          <Route path="/cadastrar" exact component={Cadastrar}/>
          <Route path="/usuario" exact component={TelaUsuario}/>
        </Switch>
      </BrowserRouter>
    );
}