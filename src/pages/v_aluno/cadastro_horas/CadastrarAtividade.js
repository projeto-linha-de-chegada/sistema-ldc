import React, { Fragment, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import Grid from '@material-ui/core/Grid';
import Portas from "../../../portas";

//auth
import StoreContext from '../../../components/Store/Context';
import { useContext } from 'react';

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

var categorias = [
    { value: 'I', label: 'I', }, { value: 'II', label: 'II', }, { value: 'III', label: 'III', }, { value: 'IV', label: 'IV', }, { value: 'V', label: 'V', }, { value: 'VI', label: 'VI', }, { value: 'VII', label: 'VII', },
];

var subCategoriasI = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', }, { value: 'd', label: 'd', }, { value: 'e', label: 'e', }, { value: 'f', label: 'f', }, { value: 'g', label: 'g', }, { value: 'h', label: 'h', },
];

var subCategorias = subCategoriasI;

var subCategoriasII = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', },
];

var subCategoriasIII = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', }, { value: 'd', label: 'd', }, { value: 'e', label: 'e', }, { value: 'f', label: 'f', }, { value: 'g', label: 'g', }, { value: 'h', label: 'h', }, { value: 'i', label: 'i', }, { value: 'j', label: 'j', },
];

var subCategoriasIV = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', }, { value: 'd', label: 'd', },
];

var subCategoriasV = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', }, { value: 'd', label: 'd', }, { value: 'e', label: 'e', }, { value: 'f', label: 'f', }, { value: 'g', label: 'g', }, { value: 'h', label: 'h', },
];

var subCategoriasVI = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', }, { value: 'd', label: 'd', },
];

var subCategoriasVII = [
    { value: 'a', label: 'a', }, { value: 'b', label: 'b', }, { value: 'c', label: 'c', }, { value: 'd', label: 'd', }, { value: 'e', label: 'e', },
];



export default function FormPropsTextFields() {
    const classes = useStyles();
    const [categoria, setCategoria] = React.useState('');
    const [subCategoria, setSubCategoria] = React.useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const { token } = useContext(StoreContext);

    const changeHandler = (event) => {
        try {
            if (event.target.files[0].type !== "application/pdf" || event.target.files[0].type === undefined) {
                alert("Arquivo inválido, insira .pdf");
                return;
            }
            setSelectedFile(event.target.files[0]);
            setIsFilePicked(true);
        }
        catch (err) { };
    };

    const handleChangeSubCategoria = (event) => {
        setSubCategoria(event.target.value);
    }

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
        switch (event.target.value) {
            case "I":
                subCategorias = subCategoriasI;
                break;
            case "II":
                subCategorias = subCategoriasII;
                break;
            case "III":
                subCategorias = subCategoriasIII;
                break;
            case "IV":
                subCategorias = subCategoriasIV;
                break;
            case "V":
                subCategorias = subCategoriasV;
                break;
            case "VI":
                subCategorias = subCategoriasVI;
                break;
            case "VII":
                subCategorias = subCategoriasVII;
                break;
            default:
                break;
        }
        //console.log(event.target.value);
    }

    const cadastrar = () => {
        var titulo = document.getElementById("titulo").value;
        var descricao = document.getElementById("descricao").value;
        var link = document.getElementById("link").value;
        var quantHoras = parseInt(document.getElementById("quantHoras").value, 10);
        var dataInicio = document.getElementById("dataInicio").value;
        var dataFim = document.getElementById("dataFim").value;
        var selectedCategoria = document.getElementById("categoria").value;
        var selectedSubCategoria = document.getElementById("subcategoria").value;

        //fix component bug
        if (dataInicio !== "") {
            if (dataInicio[4] !== "-" || dataInicio[7] !== "-") {
                alert("Data inválida");
                return;
            }
        }

        if (dataFim !== "") {
            if (dataFim[4] !== "-" || dataFim[7] !== "-") {
                alert("Data inválida");
                return;
            }
        }

        if (dataFim !== "") {
            dataFim = dataFim[8] + dataFim[9] + dataFim[7] + dataFim[5] + dataFim[6] + dataFim[4] + dataFim[0] + dataFim[1] + dataFim[2] + dataFim[3];
        }
        if (dataInicio !== "") {
            dataInicio = dataInicio[8] + dataInicio[9] + dataInicio[7] + dataInicio[5] + dataInicio[6] + dataInicio[4] + dataInicio[0] + dataInicio[1] + dataInicio[2] + dataInicio[3];
        }

        console.log("Titulo: " + titulo + " descrição: " + descricao + " quantHoras: " + quantHoras + " link: " + link
            + " dataInicio: " + dataInicio + " dataFim: " + dataFim + " categoria: " + selectedCategoria + " subcategoria: " + selectedSubCategoria);

        //tratamentos

        if (titulo === "" || descricao === "" || quantHoras === "" || dataInicio === "" || dataFim === "") {
            alert("Preencha todos os campos marcados com (*)");
            return;
        }

        if (quantHoras < 1) {
            alert("Quantidade de horas inválida");
            return;
        }

        //tratamentos data
        //ano
        var anoFim = dataFim[6] + dataFim[7] + dataFim[8] + dataFim[9];
        var anoInicio = dataInicio[6] + dataInicio[7] + dataInicio[8] + dataInicio[9];
        var intAnoFim = parseInt(anoFim, 10);
        var intAnoInicio = parseInt(anoInicio, 10);
        var result = intAnoFim - intAnoInicio;

        var anoAtual = new Date().getFullYear();
        //se ano for no futuro
        if (intAnoFim > anoAtual) {
            alert("Ano de fim inválido");
            return;
        }
        if (intAnoInicio > anoAtual) {
            alert("Ano de inicio inválido");
            return;
        }

        //se ano inicio é depois do ano fim 
        if (result < 0) {
            alert("Data inválida");
            return;
        }

        //mes
        var mesFim = dataFim[3] + dataFim[4];
        var mesInicio = dataInicio[3] + dataInicio[4];
        var intMesFim = parseInt(mesFim, 10);
        var intMesInicio = parseInt(mesInicio, 10);
        var result1 = intMesFim - intMesInicio;

        var mesAtual = new Date().getMonth() + 1;
        //console.log(mesAtual + " " + intMesInicio + " " + intMesFim);
        //se mes for no futuro
        if (intAnoInicio === anoAtual) {
            if (mesAtual < intMesInicio) {
                alert("Mês de inicio é no futuro");
                return;
            }
        }
        if (intAnoFim === anoAtual) {
            if (mesAtual < intMesFim) {
                alert("Mês de fim é no futuro");
                return;
            }
        }

        //se ano for igual
        if (result === 0) {
            //se mes inicio é depois de mes fim
            if (result1 < 0) {
                alert("Periodo inválido");
                return;
            }
        }

        //dia

        var diaFim = dataFim[0] + dataFim[1];
        var diaInicio = dataInicio[0] + dataInicio[1];
        var intDiaFim = parseInt(diaFim, 10);
        var intDiaInicio = parseInt(diaInicio, 10);

        //se dia esta no futuro
        var diaAtual = new Date().getDate();
        if (result === 0) {
            if (result1 === 0) {
                if (diaAtual < intDiaInicio) {
                    alert("Dia de inicio é no futuro");
                    return;
                }
                if (diaAtual < intDiaFim) {
                    alert("Dia de fim é no futuro");
                    return;
                }
            }
        }

        //se ano e mes for iguais, verifique se intervalo de dias é valido
        if (result === 0) {
            if (result1 === 0) {
                if (intDiaFim < intDiaInicio) {
                    alert("Inicio depois do Fim");
                    return;
                }
            }
        }

        const insertAtividadeComPdf = async (formData) => {
            try {
                console.log(selectedFile)
                const body = { selectedFile, titulo, dataInicio, dataFim, descricao, link, quantHoras, selectedCategoria, selectedSubCategoria, token };

                const response = await fetch(Portas().serverHost + "/atividades/pdf", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });

                var resJSON = await response.json();
                alert(resJSON);

            } catch (err) {
                console.log(err.message);
            }
        }

        const insertAtividade = async () => {
            try {
                const body = { titulo, dataInicio, dataFim, descricao, link, quantHoras, selectedCategoria, selectedSubCategoria, token };
                const response = await fetch(Portas().serverHost + "/atividades", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });

                var resJSON = await response.json();
                alert(resJSON);

            } catch (err) {
                console.log(err.message);
            }
        }


        if (isFilePicked) {
            const formData = new FormData();
            formData.append('File', selectedFile);
            console.log("Enviando com pdf: ")
            insertAtividadeComPdf(formData);
        }
        else {
            console.log("Enviando sem pdf")
            insertAtividade();
        }

    }


    return (
        <div>
            <NavBar></NavBar>
            <div className={classes.root}>
                <Grid >
                    <h1 style={{ textAlign: "center", marginLeft: "30px", marginRight: "30px", color: "blue" }}>Formulário de Cadastro</h1>
                    <Paper elevation={10}>
                        <Fragment>
                            <div className={classes.root}>
                                <form className={classes.root1} noValidate autoComplete="off">
                                    <div>
                                        <br></br>
                                        <h2 style={{ textAlign: "center", marginTop: '10px' }}>Informações básicas</h2>
                                    </div>

                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "grid", }}>
                                        <TextField
                                            id="titulo"
                                            label="Titulo*"
                                            type="search"
                                            variant="outlined" />

                                        <TextField
                                            id="dataInicio"
                                            label="Inicio da Atividade*"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                        <TextField
                                            id="dataFim"
                                            label="Fim da Atividade*"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />


                                        <TextField
                                            style={{ marginBottom: "10px", marginTop: "10px" }}
                                            id="categoria"
                                            select
                                            label="Categoria*"
                                            value={categoria}
                                            onChange={handleChangeCategoria}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                        >
                                            {categorias.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>

                                        <TextField
                                            style={{ marginBottom: "10px", marginTop: "10px" }}
                                            id="subcategoria"
                                            select
                                            label="Sub-Categoria*"
                                            value={subCategoria}
                                            onChange={handleChangeSubCategoria}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                        >
                                            {subCategorias.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>

                                        <TextField
                                            id="quantHoras"
                                            label="Quantidade de Horas*"
                                            type="number"
                                            defaultValue={0}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="descricao"
                                            label="Descrição*"
                                            multiline
                                            rows={4}
                                            type="search"
                                            variant="outlined" />

                                    </div>
                                    <div>
                                        <br></br>
                                        <h2 style={{ textAlign: "center", marginTop: '10px' }}>Complementos</h2>
                                    </div>

                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "flex" }}>

                                        <TextField
                                            id="link"
                                            label="Link"
                                            type="search"
                                            variant="outlined" />
                                    </div>
                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "flex", marginTop: "10px" }}>
                                        <form method="post" encType="multipart/form-data" action="http://10.0.0.107:5000/atividades/pdf">
                                            <input type="file" name="file" accept="application/pdf" onChange={changeHandler} style={{marginRight: "20px"}}/>
                                            <input type="submit" value="Upload"></input>
                                        </form>
                                    </div>
                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "flex", marginTop: "5px" }}>
                                        <h4 style={{ fontSize: "10px" }}>Somente arquivos .pdf</h4>
                                    </div>
                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "grid", marginTop: "30px" }}>
                                        <Button variant="contained" color="primary" onClick={cadastrar}>
                                            Adicionar atividade
                                        </Button>
                                        <br></br>
                                    </div>
                                </form>
                            </div>
                        </Fragment>
                    </Paper>
                </Grid>
            </div>
        </div>
    );
}

