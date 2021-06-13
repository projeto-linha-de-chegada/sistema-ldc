import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
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

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };

    const handleChangeSubCategoria = (event) => {
        setSubCategoria(event.target.value);
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
                <h1 style={{ textAlign: "center", marginTop: '10px' }}>Informações básicas</h1>
            </div>
            <div>
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
                        <MenuItem value={1}>I</MenuItem>
                        <MenuItem value={2}>II</MenuItem>
                        <MenuItem value={3}>III</MenuItem>
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
                <h1 style={{ textAlign: "center", marginTop: '10px' }}>Anexos</h1>
            </div>

            <TextField
                id="outlined-search"
                label="Link"
                type="search"
                variant="outlined" />

            <div style={{ display: "inline-block" }}>
                <ListItem button>
                    <ListItemIcon>
                        <BackupIcon />
                    </ListItemIcon>
                    <ListItemText primary=".pdf complementar" />
                </ListItem>
            </div>
        </form>
    );
}

