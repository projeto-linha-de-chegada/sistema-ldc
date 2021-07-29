import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import NavBar from '../NavBar';
import Portas from "../../../portas";
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Table from 'react-bootstrap/Table';


//auth
import StoreContext from '../../../components/Store/Context';
import { useContext } from 'react';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: top + "%",
        left: left + "%",
        transform: "translate(-" + top + "%,-" + left + "%)",
    };
}

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    root2: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    typography: {
        padding: theme.spacing(2),
    },
    root1: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
}));


export default function ManterAtividades() {
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();
    const { token } = useContext(StoreContext);
    const [atividades, setAtividades] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [editID, setEditID] = useState();

    //pegar registros de atividades
    const getAtividades = async () => {
        try {
            const response = await fetch(Portas().serverHost + "/atividades/" + token,
                {
                    method: "GET",
                }
            );
            var resJSON = await response.json();
            setAtividades(resJSON);

        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getAtividades();
    }, []);

    const openPdf = (id) =>{
        const getPdf = async() => {
            try{
                const response = await fetch(Portas().serverHost + "/download/" + id,
                {
                    method: "GET",
                }
            );
            var resJSON = await response;
            console.log(id);
            console.log(resJSON)
            window.open(resJSON.url, '_blank');

            }catch(err){
                console.log(err);
                alert("Houve um erro no GetPdf")
            }
        }

        getPdf();
    }

    const handleOpen = (id) => {
        setEditID(id);
        setOpen(true);

        //preencher campos com registro atual 
        for (var i = 0; i < atividades.length; i++) {
            /*
            if (clientes[i].id === id) {
                setNome(atividades[i].nome);
                setEndereco(atividades[i].endereco);
                setTelefone(atividades[i].telefone);
            }
            */
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        console.log(id)
    }


    return (
        <div>
            <NavBar></NavBar>
            <Paper elevation={12} style={{marginLeft: "20px", marginRight: "20px"}}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Inicio</th>
                            <th>Fim</th>
                            <th>Categoria</th>
                            <th>SubCategoria</th>
                            <th>QuantHoras</th>
                            <th>Descrição</th>
                            <th>Link</th>
                            <th>Pdf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {atividades.map(atividade => (
                            <tr key={atividade.id}>
                                <td>{atividade.titulo}</td>
                                <td>{atividade.data_inicio}</td>
                                <td>{atividade.data_fim}</td>
                                <td>{atividade.categoria}</td>
                                <td>{atividade.sub_categoria}</td>
                                <td>{atividade.quantidade_horas}</td>
                                <td>{atividade.descricao}</td>
                                <td><a href={atividade.doc_link} target="_blank" rel="noreferrer" style={{color: "blue"}}>Link Anexado</a></td>
                                <td onClick={() => openPdf(atividade.nome_pdf)}><a style={{cursor: "pointer", color: "blue"}}>Pdf Anexado</a></td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleOpen(atividade.id)}
                                    >
                                        Editar
                                    </button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >
                                        <div style={modalStyle} className={classes.paper}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <button
                                                    className="btn btn-success"
                                                    style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}
                                                >
                                                    Editar
                                                </button>
                                            </div>
                                        </div>
                                    </Modal>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(atividade.id)}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Paper>
        </div>
    )
}