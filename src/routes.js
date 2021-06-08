import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

//pages import
import Login from "./pages/login/Login";
import Aluno_Dashboard from "./pages/v_aluno/painel_controle/Dashboard";

//auth
import StoreProvider from './components/Store/Provider';
import PrivateRoute from "./components/Routes/Private/private";

function Routes(){

    return(
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route exact path = "/" component={Login}/>
                    <PrivateRoute path = "/Dashboard" component={Aluno_Dashboard}/>
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}

export default Routes;