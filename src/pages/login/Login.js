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

var entrar = () => {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;
  //alert("email: " + email + "\nsenha: " + senha);
}

var lista_bgs = [
  "url('./imgs_login/bg1.jpg')",
  "url('./imgs_login/bg2.jpg')",
  "url('./imgs_login/bg3.jpg')"];
  
var controller = 0;


export default function SignInSide() {
  const classes = useStyles();

  async function mudaImg(){
    let imagem_atual = document.getElementById("image");
    imagem_atual.style.backgroundImage = lista_bgs[controller];
    controller++;
    if(controller == lista_bgs.length){
      controller = 0;
    } 
  }

  let loop = setInterval(mudaImg, 3000);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} id="image"/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar alt="LDC Icone" className={classes.avatar} src="./plc_logo.ico">
          </Avatar>
          <Typography component="h1" variant="h5">
            Acesso ao sistema
          </Typography>
          <form className={classes.form} noValidate>
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* in button if wnat join with enter type="submit"*/}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={entrar}
              href="/Dashboard"
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem conta? Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}