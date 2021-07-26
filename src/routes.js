import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//pages import
import Login from "./pages/login/Login";
import Aluno_Home from "./pages/v_aluno/view_inicial/Home";
import Aluno_Cadastro from "./pages/cadastro/cadastro_aluno";
import Aluno_Cadastrar_Atividade from "./pages/v_aluno/cadastro_horas/CadastrarAtividade";

//auth
import StoreProvider from './components/Store/Provider';
import PrivateRoute from "./components/Routes/Private/private";

export default function Routes(){
    return(
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route exact path = "/" component={Login}/>
                    <Route path = "/cadastro" component={Aluno_Cadastro}/>
                    <PrivateRoute path = "/alunoHome" component={Aluno_Home}/>
                    <PrivateRoute path = "/cadastrarAtividade" component={Aluno_Cadastrar_Atividade}/>
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}