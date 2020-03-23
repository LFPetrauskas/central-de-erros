/* Arquivo de Configuração de Rotas  */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Páginas */
import Login from '../view/login';
import NovoUsuario from '../view/usuario-novo';
import UsuarioRecuperarSenha from '../view/usuario-recuperar-senha';
import Home from '../view/home';
import ErroDetails from '../view/ErroDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/novousuario' component={NovoUsuario} />
      <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
      <Route exact path='/erro' component={ErroDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;