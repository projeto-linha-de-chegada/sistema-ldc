import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Portas from "../../../portas";
import Paper from '@material-ui/core/Paper';
import Table from 'react-bootstrap/Table';

export default function ManterAlunos() {
    const [alunos, setAlunos] = useState([]);

    //pegar registros de alunos
    const getAlunos = async () => {
        try {
            const response = await fetch(Portas().serverHost + "/alunos",
                {
                    method: "GET",
                }
            );
            var resJSON = await response.json();
            console.log(resJSON)
            setAlunos(resJSON);

        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getAlunos();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <NavBar></NavBar>
            <Paper elevation={12} style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Matricula</th>
                            <th>Curso</th>
                            <th>Email</th>
                            <th>Ativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.curso}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.ativo.toString()}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                    >
                                        Ativar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                    >
                                        Suspender
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Paper >
        </div>
    )
}