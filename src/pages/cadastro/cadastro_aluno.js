import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import validator from 'validator';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Direitos reservados ©'}
            <Link color="blue" href="https://team-pldc.herokuapp.com/" target="_blank">
                Projeto Linha de Chegada
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: lista_bgs[2],
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

var lista_bgs = [
    "url('./imgs_login/bg1.jpg')",
    "url('./imgs_login/bg2.jpg')",
    "url('./imgs_login/bg3.jpg')"];

var controller = 0;


export default function SignInSide() {
    const classes = useStyles();

    async function mudaImg() {
        let imagem_atual = document.getElementById("image");
        imagem_atual.style.backgroundImage = lista_bgs[controller];
        controller++;
        if (controller == lista_bgs.length) {
            controller = 0;
        }
    }

    let loop = setInterval(mudaImg, 5000);

    function validarCadastro() {
        var nome = document.getElementById("nome").value;
        var matricula = document.getElementById("matricula").value;
        var curso = document.getElementById("curso").value;
        var email = document.getElementById("email").value;
        var cf_email = document.getElementById("cf_email").value;
        var senha = document.getElementById("senha").value;
        var cf_senha = document.getElementById("cf_senha").value;

        if(nome == "" || matricula == "" || curso == "" || email == "" || cf_email == ""
            || senha == "" || cf_senha == "" ){
                alert("Por favor, preencha todos os campos");
                return;
        }

        if(validator.isEmail(email) == false){
            alert("formato de email incorreto");
            return;
        }

        if(email != cf_email){
            alert("Emails diferentes");
            return;
        }
        
        if(senha.length < 6){
            alert("Senha com menos de 6 digitos");
            return;
        }

        if(senha != cf_senha){
            alert("Senhas diferentes")
            return;
        }

        //campos de cadastro foram validados;

        

    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} id="image" />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar alt="LDC Icone" className={classes.avatar} src="./plc_logo.ico">
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Cadastro de aluno
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome completo"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="matricula"
                            label="Matricula"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="curso"
                            label="Curso"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="cf_email"
                            label="Confirme o Email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Senha"
                            type="password"
                            id="senha"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Confirme a senha"
                            type="password"
                            id="cf_senha"
                        />
                        {/* in button if wnat join with enter type="submit"*/}
                        <Button
                            id="entrar"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={validarCadastro}
                        >
                            Cadastrar
                        </Button>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}