import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Page404 from './pages/Page404';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
  document.getElementById('root')
);