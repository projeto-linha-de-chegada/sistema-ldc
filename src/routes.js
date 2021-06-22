import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

//pages import
import Login from "./pages/login/Login";
import Aluno_Dashboard from "./pages/v_aluno/painel_controle/Dashboard";
import Aluno_Dashboard_Horas from "./pages/v_aluno/lista_horas/Dashboard";
import Aluno_Dashboard_Cadastro from "./pages/v_aluno/cadastro_horas/Dashboard";
import Aluno_Cadastro from "./pages/cadastro/cadastro_aluno";

//auth
import StoreProvider from './components/Store/Provider';
import PrivateRoute from "./components/Routes/Private/private";

function Routes(){

    return(
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <PrivateRoute path = "/minhas_horas" component={Aluno_Dashboard_Horas}/>
                    <PrivateRoute path = "/cadastrar_hora" component={Aluno_Dashboard_Cadastro}/>
                    <Route exact path = "/" component={Login}/>
                    <Route path = "/cadastro" component={Aluno_Cadastro}/>
                    <PrivateRoute path = "/Dashboard" component={Aluno_Dashboard}/>
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}

export default Routes;