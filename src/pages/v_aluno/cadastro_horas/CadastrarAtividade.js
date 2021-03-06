import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import Portas from "../../../portas";
import Path from "path";
import Copyright from "../../copyright/Copyright";

//auth
import StoreContext from '../../../components/Store/Context';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
    }, paper: {
        marginLeft: "10px",
        marginRight: "10px",
        paddingRight: "10px",
        paddingLeft: "10px",
        overflowX: "auto",
    },
    root1: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
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
    const [selectedDateInicio, setSelectedDateInicio] = React.useState(new Date());
    const [selectedDateFim, setSelectedDateFim] = React.useState(new Date());

    const handleDateChangeInicio = (date) => {
        setSelectedDateInicio(date);
    };

    const handleDateChangeFim = (date) => {
        setSelectedDateFim(date);
    };

    const changeHandler = (event) => {
        try {
            if (event.target.files[0].type !== "application/pdf" || event.target.files[0].type === undefined) {
                alert("Arquivo inv??lido, insira .pdf");
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
        var selectedCategoria = document.getElementById("categoria").value;
        var selectedSubCategoria = document.getElementById("subcategoria").value;
        var dataInicio = "";
        var dataFim = "";


        if (selectedDateInicio.toString() === "Invalid Date") {
            alert("Erro na data de Inicio");
            return;
        }
        if (selectedDateFim.toString() === "Invalid Date") {
            alert("Erro na data de Fim");
            return;
        }

        console.log("Titulo: " + titulo + " descri????o: " + descricao + " quantHoras: " + quantHoras + " link: " + link
            + " dataInicio: " + selectedDateInicio + " dataFim: " + selectedDateFim + " categoria: " + selectedCategoria + " subcategoria: " + selectedSubCategoria);

        //tratamentos

        if (titulo === "" || descricao === "" || quantHoras === "") {
            alert("Preencha todos os campos marcados com (*)");
            return;
        }

        if (quantHoras < 1) {
            alert("Quantidade de horas inv??lida");
            return;
        }

        //tratamentos data
        var anoFim = selectedDateFim.getFullYear();
        var anoInicio = selectedDateInicio.getFullYear();
        var intAnoFim = parseInt(anoFim, 10);
        var intAnoInicio = parseInt(anoInicio, 10);
        var result = intAnoFim - intAnoInicio;
        var anoAtual = new Date().getFullYear();

        //se ano for no futuro
        if (intAnoInicio > anoAtual) {
            alert("Ano de inicio ?? est?? no futuro");
            return;
        }

        if (intAnoFim > anoAtual) {
            alert("Ano de fim est?? no futuro");
            return;
        }

        //se ano inicio ?? depois do ano fim 
        if (result < 0) {
            alert("Ano de inicio depois do ano de fim");
            return;
        }

        //mes
        var mesFim = selectedDateFim.getMonth() + 1;
        var mesInicio = selectedDateInicio.getMonth() + 1;
        var intMesFim = parseInt(mesFim, 10);
        var intMesInicio = parseInt(mesInicio, 10);
        var result1 = intMesFim - intMesInicio;

        var mesAtual = new Date().getMonth() + 1;
        console.log(mesAtual + " " + intMesInicio + " " + intMesFim);
        //se mes for no futuro
        if (intAnoInicio === anoAtual) {
            if (mesAtual < intMesInicio) {
                alert("M??s de inicio est?? no futuro");
                return;
            }
        }
        if (intAnoFim === anoAtual) {
            if (mesAtual < intMesFim) {
                alert("M??s de fim est?? no futuro");
                return;
            }
        }

        //se ano for igual
        if (result === 0) {
            //se mes inicio ?? depois de mes fim
            if (result1 < 0) {
                alert("M??s de inicio depois do m??s de fim");
                return;
            }
        }

        //dia
        var diaFim = selectedDateFim.getDate();
        var diaInicio = selectedDateInicio.getDate();
        var intDiaFim = parseInt(diaFim, 10);
        var intDiaInicio = parseInt(diaInicio, 10);

        //se dia esta no futuro
        var diaAtual = new Date().getDate();
        if (result === 0) {
            if (result1 === 0) {
                if (diaAtual < intDiaInicio) {
                    alert("Dia de inicio est?? no futuro");
                    return;
                }
                if (diaAtual < intDiaFim) {
                    alert("Dia de fim est?? no futuro");
                    return;
                }
            }
        }

        //se ano e mes for iguais, verifique se intervalo de dias ?? valido
        if (result === 0) {
            if (result1 === 0) {
                if (intDiaFim < intDiaInicio) {
                    alert("Dia de Inicio depois do dia de Fim");
                    return;
                }
            }
        }

        //Tornar padr??o de data para o postgres
        var dia, mes, ano;
        if (selectedDateInicio.getMonth() + 1 < 10) {
            dia = selectedDateInicio.getDate();
            mes = selectedDateInicio.getMonth() + 1;
            ano = selectedDateInicio.getFullYear();
            dataInicio = dia + "-0" + mes + "-" + ano;
            if (dia < 10) {
                dataInicio = "0" + dia + "-0" + mes + "-" + ano;
            }
        }
        else {
            dia = selectedDateInicio.getDate();
            mes = selectedDateInicio.getMonth() + 1;
            ano = selectedDateInicio.getFullYear();
            dataInicio = dia + "-" + mes + "-" + ano;
            if (dia < 10) {
                dataInicio = "0" + dia + "-" + mes + "-" + ano;
            }
        }

        if (selectedDateFim.getMonth() + 1 < 10) {
            dia = selectedDateFim.getDate();
            mes = selectedDateFim.getMonth() + 1;
            ano = selectedDateFim.getFullYear();
            dataFim = dia + "-0" + mes + "-" + ano;
            if (dia < 10) {
                dataFim = "0" + dia + "-0" + mes + "-" + ano;
            }
        }
        else {
            dia = selectedDateFim.getDate();
            mes = selectedDateFim.getMonth() + 1;
            ano = selectedDateFim.getFullYear();
            dataFim = dia + "-" + mes + "-" + ano;
            if (dia < 10) {
                dataFim = "0" + dia + "-" + mes + "-" + ano;
            }
        }


        const insertAtividadeComPdf = async () => {
            try {
                var nomePdf = token + Date.now() + Path.extname(selectedFile.name);

                const myInput = document.getElementById('inputPdf');
                console.log(myInput.files[0]);

                const responsePdf = await fetch(Portas().serverHost + "/atividades/pdf/" + nomePdf, {
                    method: "POST",
                    body: myInput.files[0]
                });

                var resJSON1 = await responsePdf.json();
                if (resJSON1 !== "PDF Cadastrado") {
                    alert("Falha no Upload do arquivo");
                    return;
                }

                const body = { nomePdf, titulo, dataInicio, dataFim, descricao, link, quantHoras, selectedCategoria, selectedSubCategoria, token };
                console.log(body);
                const response = await fetch(Portas().serverHost + "/atividades", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });

                var resJSON = await response.json();
                alert(resJSON);
                window.location = "/manterAtividades";


            } catch (err) {
                console.log(err.message);
            }
        }

        const insertAtividade = async () => {
            try {
                var nomePdf = "";
                const body = { titulo, dataInicio, dataFim, descricao, link, quantHoras, selectedCategoria, selectedSubCategoria, token, nomePdf };
                const response = await fetch(Portas().serverHost + "/atividades", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });

                var resJSON = await response.json();
                alert(resJSON);
                window.location = "/manterAtividades";

            } catch (err) {
                console.log(err.message);
            }
        }


        if (isFilePicked) {
            console.log("Enviando com pdf: ")
            insertAtividadeComPdf();
        }
        else {
            console.log("Enviando sem pdf")
            insertAtividade();
        }

    }

    return (
        <div>
            <NavBar></NavBar>
            <h1 style={{ textAlign: "center" }}>Formul??rio de Cadastro</h1>
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={12}>
                    <form className={classes.root1} noValidate autoComplete="off">
                        <h2 style={{ textAlign: "center", marginTop: '10px' }}>Informa????es b??sicas</h2>
                        <div style={{ alignItems: "center", justifyContent: "center ", display: "grid" }}>
                            <TextField
                                id="titulo"
                                label="Titulo*"
                                type="search"
                                variant="outlined"
                                inputProps={{ maxLength: 199 }}
                            />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="DataInicio"
                                    label="Data de Inicio*"
                                    format="dd/MM/yyyy"
                                    value={selectedDateInicio}
                                    onChange={handleDateChangeInicio}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="dataFim"
                                    label="Data de Fim*"
                                    format="dd/MM/yyyy"
                                    value={selectedDateFim}
                                    onChange={handleDateChangeFim}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>

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
                                onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4)
                                }}
                            />

                            <TextField
                                id="descricao"
                                label="Descri????o*"
                                multiline
                                rows={4}
                                type="search"
                                variant="outlined"
                                inputProps={{ maxLength: 4999 }} />

                        </div>
                        <h2 style={{ textAlign: "center", marginTop: '10px' }}>Complementos</h2>
                        <div style={{ alignItems: "center", justifyContent: "center ", display: "grid", marginBottom: "10px" }}>
                            <TextField
                                id="link"
                                label="Link"
                                type="search"
                                variant="outlined"
                                inputProps={{ maxLength: 999 }} />
                        </div>
                        <form id="pdfField" method="post" encType="multipart/form-data">
                            <input id="inputPdf" type="file" name="file" accept="application/pdf" onChange={changeHandler} style={{ marginBottom: "5px" }} />
                        </form>
                        <h4 style={{ fontSize: "10px" }}>Somente arquivos .pdf</h4>
                        <Button variant="contained" color="primary" onClick={cadastrar} style={{marginTop: "10px", marginBottom: "20px"}}>
                            Adicionar atividade
                        </Button>
                    </form>

                </Paper>
            </div>
            <Copyright></Copyright>
        </div>
    );
}

