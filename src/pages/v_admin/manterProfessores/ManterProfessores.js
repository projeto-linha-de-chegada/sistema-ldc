import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Portas from "../../../portas";
import Paper from '@material-ui/core/Paper';
import Table from 'react-bootstrap/Table';
import Copyright from "../../copyright/Copyright";

//auth
import StoreContext from '../../../components/Store/Context';
import { useContext } from 'react';

export default function ManterProfessores() {
    const { token } = useContext(StoreContext);
    const [professores, setProfessores] = useState([]);

    //pegar registros de professores
    const getProfessores = async () => {
        try {
            const response = await fetch(Portas().serverHost + "/professores/" + token,
                {
                    method: "GET",
                }
            );
            var resJSON = await response.json();
            console.log(resJSON)
            setProfessores(resJSON);

        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getProfessores();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const desativarProfessor = async (id, ativo) => {
        if(ativo === false){
            return;
        }
        try {
            const body = { id, token }
            const response = await fetch(Portas().serverHost + "/desativarProfessor",
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            var resJSON = await response.json();
            alert(resJSON)
            window.location = "/manterProfessores";

        } catch (err) {
            console.log(err);
            alert("um erro ocorreu!");
        }
    }

    const ativarProfessor = async (id, ativo) => {
        if(ativo === true){
            return;
        }
        try {
            const body = { id, token }
            const response = await fetch(Portas().serverHost + "/ativarProfessor",
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            var resJSON = await response.json();
            alert(resJSON)
            window.location = "/manterProfessores";

        } catch (err) {
            console.log(err);
            alert("um erro ocorreu!");
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <Paper elevation={12} style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Siape</th>
                            <th>Email</th>
                            <th>Ativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map(professor => (
                            <tr key={professor.id}>
                                <td>{professor.nome}</td>
                                <td>{professor.matricula}</td>
                                <td>{professor.email}</td>
                                <td>{professor.ativo.toString()}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => ativarProfessor(professor.id, professor.ativo)}
                                    >
                                        Ativar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => desativarProfessor(professor.id, professor.ativo)}
                                    >
                                        Suspender
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Paper >
            <Copyright></Copyright>
        </div>
    )
}