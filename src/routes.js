import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages import
import Login from "./pages/login/Login";
import Aluno_Home from "./pages/v_aluno/view_inicial/Home";
import Aluno_Cadastro from "./pages/cadastro/cadastro_aluno";
import Aluno_Cadastrar_Atividade from "./pages/v_aluno/cadastro_horas/CadastrarAtividade";
import Aluno_Manter_Atividades from "./pages/v_aluno/manterAtividades/ManterAtividades";
import Admin_Home from "./pages/v_admin/view_inicial/Home";
import Admin_Manter_Alunos from "./pages/v_admin/manterAlunos/ManterAlunos";
import Admin_Aprovar_Alunos from "./pages/v_admin/aprovarAlunos/AprovarAlunos";
import Admin_Cadastrar_Professor from "./pages/v_admin/cadastroProfessor/CadastroProfessor";
import Admin_Manter_Professores from "./pages/v_admin/manterProfessores/ManterProfessores";
import Professor_Home from "./pages/v_professor/view_inicial/Home";

//auth
import StoreProvider from './components/Store/Provider';
import PrivateRoute from "./components/Routes/Private/private";

export default function Routes() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/cadastro" component={Aluno_Cadastro} />
                    <PrivateRoute path="/alunoHome" component={Aluno_Home} />
                    <PrivateRoute path="/manterAtividades" component={Aluno_Manter_Atividades} />
                    <PrivateRoute path="/cadastrarAtividade" component={Aluno_Cadastrar_Atividade} />
                    <PrivateRoute path="/adminHome" component={Admin_Home} />
                    <PrivateRoute path="/manterAlunos" component={Admin_Manter_Alunos} />
                    <PrivateRoute path="/aprovarAlunos" component={Admin_Aprovar_Alunos} />
                    <PrivateRoute path="/cadastroProfessor" component={Admin_Cadastrar_Professor} />
                    <PrivateRoute path="/manterProfessores" component={Admin_Manter_Professores} />
                    <PrivateRoute path="/professorHome" component={Professor_Home} />
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}