import React, { useEffect, useState } from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import NavBar from '../NavBar';
import Portas from "../../../portas";
import Paper from '@material-ui/core/Paper';
import Table from 'react-bootstrap/Table';
import TextField from '@material-ui/core/TextField';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Path from "path";

//auth
import StoreContext from '../../../components/Store/Context';
import { useContext } from 'react';

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

export default function ManterAtividades() {
    const { token } = useContext(StoreContext);
    const [atividades, setAtividades] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [titulo, setTitulo] = useState();
    const [categoria, setCategoria] = React.useState('');
    const [subCategoria, setSubCategoria] = React.useState('');
    const [quantHoras, setQuantHoras] = React.useState('');
    const [docLink, setDocLink] = React.useState('');
    const [pdf, setPdf] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [selectedDateInicio, setSelectedDateInicio] = React.useState(new Date());
    const [selectedDateFim, setSelectedDateFim] = React.useState(new Date());
    const [editID, setEditID] = useState();
    const [nomeAntigoPdf, setNomeAntigoPdf] = React.useState();

    const handleDateChangeInicio = (date) => {
        setSelectedDateInicio(date);
    };

    const handleDateChangeFim = (date) => {
        setSelectedDateFim(date);
    };

    const changeHandlerPdf = (event) => {
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const openLink = (id) => {
        if (id === "" || id === null || id === undefined) {
            alert("Não foi cadastrado Link nessa atividade");
            return;
        }
        window.open(id, '_blank');
    }

    const openPdf = (id) => {
        if (id === "" || id === null || id === undefined) {
            alert("Não foi cadastrado pdf nessa atividade");
            return;
        }
        const getPdf = async () => {
            try {
                const response = await fetch(Portas().serverHost + "/download/" + id,
                    {
                        method: "GET",
                    }
                );
                var resJSON = await response;
                console.log(id);
                console.log(resJSON)
                window.open(resJSON.url, '_blank');

            } catch (err) {
                console.log(err);
                alert("Houve um erro no GetPdf")
            }
        }

        getPdf();
    }

    const toDate = (data) => {
        const newDate = new Date(data[6] + data[7] + data[8] + data[9] + "-" + data[3] + data[4] + "-" + data[0] + data[1] + "T06:00:00Z");
        return newDate;
    }

    const handleOpen = (id) => {
        console.log("Opened row: " + editID);
        setEditID(id);
        setOpen(true);

        //preencher campos com registro selecionado 
        for (var i = 0; i < atividades.length; i++) {
            if (atividades[i].id === id) {
                setNomeAntigoPdf(atividades[i].nome_pdf);
                setTitulo(atividades[i].titulo);
                setCategoria(atividades[i].categoria);
                setSubCategoria(atividades[i].sub_categoria);
                setQuantHoras(atividades[i].quantidade_horas);
                setDescricao(atividades[i].descricao);
                setPdf(atividades[i].nome_pdf);
                setDocLink(atividades[i].doc_link);
                setSelectedDateInicio(toDate(atividades[i].data_inicio));
                setSelectedDateFim(toDate(atividades[i].data_fim));
            }
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        console.log(id)
    }

    const updateAtividade = async () => {
        console.log("updating row: " + editID);
        var selectedCategoria = categoria;
        var selectedSubCategoria = subCategoria;
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

        console.log("Titulo: " + titulo + " descrição: " + descricao + " quantHoras: " + quantHoras + " link: " + docLink
            + " dataInicio: " + selectedDateInicio + " dataFim: " + selectedDateFim + " categoria: " + selectedCategoria + " subcategoria: " + selectedSubCategoria);

        //tratamentos

        if (titulo === "" || descricao === "" || quantHoras === "") {
            alert("Preencha todos os campos marcados com (*)");
            return;
        }

        if (quantHoras < 1) {
            alert("Quantidade de horas inválida");
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
            alert("Ano de inicio é está no futuro");
            return;
        }

        if (intAnoFim > anoAtual) {
            alert("Ano de fim está no futuro");
            return;
        }

        //se ano inicio é depois do ano fim 
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
        //se mes for no futuro
        if (intAnoInicio === anoAtual) {
            if (mesAtual < intMesInicio) {
                alert("Mês de inicio está no futuro");
                return;
            }
        }
        if (intAnoFim === anoAtual) {
            if (mesAtual < intMesFim) {
                alert("Mês de fim está no futuro");
                return;
            }
        }

        //se ano for igual
        if (result === 0) {
            //se mes inicio é depois de mes fim
            if (result1 < 0) {
                alert("Mês de inicio depois do mês de fim");
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
                    alert("Dia de inicio está no futuro");
                    return;
                }
                if (diaAtual < intDiaFim) {
                    alert("Dia de fim está no futuro");
                    return;
                }
            }
        }

        //se ano e mes for iguais, verifique se intervalo de dias é valido
        if (result === 0) {
            if (result1 === 0) {
                if (intDiaFim < intDiaInicio) {
                    alert("Dia de Inicio depois do dia de Fim");
                    return;
                }
            }
        }

        //Tornar padrão de data para o postgres
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

        //fazer o update 
        const UpdateAtividadeComPdf = async () => {
            try {
                var nomePdf = token + Date.now() + Path.extname(selectedFile.name);

                console.log("input:")

                const responsePdf = await fetch(Portas().serverHost + "/atividades/pdf/" + nomePdf, {
                    method: "POST",
                    body: selectedFile
                });

                var resJSON1 = await responsePdf.json();
                if (resJSON1 !== "PDF Cadastrado") {
                    console.log("erro")
                    alert("Falha no Upload do arquivo");
                    return;
                }

                const body = { nomePdf, titulo, dataInicio, dataFim, descricao, docLink, quantHoras, selectedCategoria, selectedSubCategoria, token, nomeAntigoPdf };
                console.log(body);
                const response = await fetch(Portas().serverHost + "/atividades/pdf/" + editID, {
                    method: "PUT",
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

        const updateAtividadeSemPdf = async () => {
            try {
                const nomePdf = pdf;
                const body = { nomePdf, titulo, dataInicio, dataFim, descricao, docLink, quantHoras, selectedCategoria, selectedSubCategoria, token };
                const response = await fetch(Portas().serverHost + "/atividades/" + editID, {
                    method: "PUT",
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
            UpdateAtividadeComPdf();
        }
        else {
            console.log("Enviando sem pdf")
            updateAtividadeSemPdf();
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <Paper elevation={12} style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Titulo</th>
                            <th>Inicio</th>
                            <th>Fim</th>
                            <th style={{ textAlign: "center" }}>Categoria</th>
                            <th style={{ textAlign: "center" }}>SubCategoria</th>
                            <th style={{ textAlign: "center" }}>QuantHoras</th>
                            <th style={{ textAlign: "center" }}>Descrição</th>
                            <th style={{ textAlign: "center" }}>Link</th>
                            <th style={{ textAlign: "center" }}>Pdf</th>
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
                                <td onClick={() => openLink(atividade.doc_link)} style={{ cursor: "pointer", color: "blue" }}>Link Anexado</td>
                                <td onClick={() => openPdf(atividade.nome_pdf)} style={{ cursor: "pointer", color: "blue" }}>Pdf Anexado</td>
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

                                    >
                                        <div style={{ alignItems: "center", justifyContent: "center ", display: "grid", }}>
                                            <h2 style={{ textAlign: "center", marginTop: '10px' }}>Editar Atividade</h2>
                                            <TextField
                                                style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }}
                                                label="Titulo*"
                                                type="search"
                                                variant="outlined"
                                                value={titulo}
                                                inputProps={{ maxLength: 199 }}
                                                onChange={e => setTitulo(e.target.value)} />

                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    margin="normal"
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

                                                style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }}
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
                                                style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }}
                                                select
                                                label="Sub Categoria*"
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
                                                style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }}
                                                label="Quantidade de Horas*"
                                                type="number"
                                                defaultValue={0}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant="outlined"
                                                value={quantHoras}
                                                onInput={(e) => {
                                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4)
                                                }}
                                                onChange={e => setQuantHoras(e.target.value)}
                                            />
                                            <TextField
                                                style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }}
                                                label="Descrição*"
                                                multiline
                                                rows={4}
                                                type="search"
                                                variant="outlined"
                                                value={descricao}
                                                inputProps={{ maxLength: 4999 }}
                                                onChange={e => setDescricao(e.target.value)} />

                                            <TextField
                                                style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }}
                                                label="Link"
                                                type="search"
                                                variant="outlined"
                                                value={docLink}
                                                inputProps={{ maxLength: 999 }}
                                                onChange={e => setDocLink(e.target.value)} />

                                            <form method="post" encType="multipart/form-data">
                                                <input type="file" name="file" accept="application/pdf" onChange={changeHandlerPdf} style={{ marginTop: "5px", marginLeft: "5px", marginBottom: "5px", marginRight: "5px" }} />
                                            </form>
                                            <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>Somente arquivos .pdf</h4>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <button
                                                className="btn btn-success"
                                                onClick={updateAtividade}
                                                style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}
                                            >
                                                Editar
                                            </button>
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
            </Paper >
        </div >
    )
}