import React, { Fragment} from "react";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BackupIcon from '@material-ui/icons/Backup';
import NavBar from '../NavBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
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
    const [selectedDateInicio, setSelectedDateInicio] = React.useState(Date.now());
    const [selectedDateFim, setSelectedDateFim] = React.useState(Date.now());
    const [categoria, setCategoria] = React.useState('');
    const [subCategoria, setSubCategoria] = React.useState('');

    const handleDateChangeInicio = (date) => {
        setSelectedDateInicio(date);
    };

    const handleDateChangeFIm = (date) => {
        setSelectedDateFim(date);
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
        console.log(event.target.value);
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className={classes.root}>
                <Grid >
                    <h1 style={{ textAlign: "center", marginLeft: "30px", marginRight: "30px", color: "white" }}>Formulário de Cadastro</h1>
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
                                            id="outlined-search"
                                            label="Titulo*"
                                            type="search"
                                            variant="outlined" />

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Inicio da atividade*"
                                                value={selectedDateInicio}
                                                onChange={handleDateChangeInicio}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Fim da atividade*"
                                                value={selectedDateFim}
                                                onChange={handleDateChangeFIm}
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
                                            id="outlined-number"
                                            label="Quantidade de Horas*"
                                            type="number"
                                            defaultValue={0}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="outlined-search"
                                            label="Descrição*"
                                            multiline
                                            rows={4}
                                            type="search"
                                            variant="outlined" />

                                    </div>


                                    <div>
                                        <br></br>
                                        <h1 style={{ textAlign: "center", marginTop: '10px' }}>Anexos</h1>
                                    </div>

                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "grid", }}>

                                        <TextField
                                            id="outlined-search"
                                            label="Link"
                                            type="search"
                                            variant="outlined" />

                                        <ListItem button>
                                            <ListItemIcon>
                                                <BackupIcon />
                                            </ListItemIcon>
                                            <ListItemText primary=".pdf complementar" />
                                        </ListItem>
                                    </div>
                                    <div style={{ alignItems: "center", justifyContent: "center ", display: "grid", marginTop: "30px" }}>
                                        <Button variant="contained" color="primary">
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

