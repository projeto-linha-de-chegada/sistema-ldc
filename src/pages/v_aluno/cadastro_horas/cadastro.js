import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BackupIcon from '@material-ui/icons/Backup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    const [selectedDateInicio, setSelectedDateInicio] = React.useState(Date.now());
    const [selectedDateFim, setSelectedDateFim] = React.useState(Date.now());
    const [categoria, setCategoria] = React.useState('');
    const [subCategoria, setSubCategoria] = React.useState('');

    const i = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const ii = ["a", "b", "c"];
    const iii = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const iv = ["a", "b", "c", "d"];
    const v = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const vi = ["a", "b", "c", "d"];
    const vii = ["a", "b", "c", "d", "e"];

    var arr = i;

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
        
        console.log(event.target.value);
        
        switch (event.target.value) {
            case 1:
                arr = i;
                break;
            case 2:
                arr = ii;
                break;
            case 3:
                arr = iii;
                break;
            case 4:
                arr = iv;
                break;
            case 5:
                arr = v;
                break;
            case 6:
                arr = vi;
                break;
            case 7:
                arr = vii;
                break;
        }

    };

    const handleChangeSubCategoria = (event) => {
        setSubCategoria(event.target.value);
        console.log("selecione subc: " + event.target.value);
    };

    const handleDateChangeInicio = (date) => {
        setSelectedDateInicio(date);
    };

    const handleDateChangeFIm = (date) => {
        setSelectedDateFim(date);
    };

    return (

        <form className={classes.root} noValidate autoComplete="off">

            <div>
                <br></br>
                <h1 style={{ textAlign: "center", marginTop: '10px' }}>Informações básicas</h1>
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
                        label="Inicio da atividade"
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
                        label="Fim da atividade"
                        value={selectedDateFim}
                        onChange={handleDateChangeFIm}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>


                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={categoria}
                        onChange={handleChangeCategoria}
                        className={classes.selectEmpty}
                    >
                        <MenuItem value={1}>I</MenuItem>
                        <MenuItem value={2}>II</MenuItem>
                        <MenuItem value={3}>III</MenuItem>
                        <MenuItem value={4}>IV</MenuItem>
                        <MenuItem value={5}>V</MenuItem>
                        <MenuItem value={6}>VI</MenuItem>
                        <MenuItem value={7}>VII</MenuItem>
                    </Select>
                </FormControl>

                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Sub-Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={subCategoria}
                        onChange={handleChangeSubCategoria}
                        className={classes.selectEmpty}
                    >
                        {arr.map((number) =>
                            <MenuItem value={number}>{number}</MenuItem>
                        )}
                    </Select>
                </FormControl>

                <TextField
                    id="outlined-number"
                    label="Quantidade de Horas"
                    type="number"
                    defaultValue="0"
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
    );
}

