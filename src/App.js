import React, {Component} from 'react';

//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';

//pages import
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"


function App(props) {
  return (
      <div>
      <header>
      </header>
      <main>
      <Switch>
        <Route exact path = "/" component={Login}></Route>
        <Route path = "/Cadastro" component={Cadastro}></Route>
      </Switch>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;