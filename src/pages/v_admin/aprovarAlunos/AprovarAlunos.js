import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Portas from "../../../portas";
import Paper from '@material-ui/core/Paper';
import Table from 'react-bootstrap/Table';

export default function ManterAlunos() {
    const [alunos, setAlunos] = useState([]);

    //pegar registros de alunos pendentes
    const getAlunos = async () => {
        try {
            const response = await fetch(Portas().serverHost + "/alunosPendentes",
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

    const liberarAcesso = (id) => {
        console.log("Liberando: " + id);
        const addToAlunos = async() => {
            try {
                const response = await fetch(Portas().serverHost + "/liberarAcessoAluno/" + id,
                    {
                        method: "GET",
                    }
                );
                var resJSON = await response.json();
                alert(resJSON);
                window.location = "/aprovarAlunos";
    
            } catch (err) {
                alert(err);
            }
        }
        addToAlunos();

    }

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
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.curso}</td>
                                <td>{aluno.email}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => liberarAcesso(aluno.id)}
                                    >
                                        Liberar Acesso
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                    >
                                        Negar Acesso
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