import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Portas from "../../portas";

//auth
import { useContext } from 'react';
import StoreContext from "../../components/Store/Context";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Direitos reservados ©'}
      <Link color="primary" href="https://team-pldc.herokuapp.com/" target="_blank">
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
    backgroundImage: "url('./background/bg1.jpg')",
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

export default function SignInSide() {
  const classes = useStyles();
  const { setToken } = useContext(StoreContext);
  const { token } = useContext(StoreContext);

  //impede que o user entre na tela de login se já houver um login feito
  if (token) {
    window.location = "/alunoHome";
  }

  const login = (resJSON, email, senha) => {
    console.log(resJSON.email + " " + resJSON.senha + " " + resJSON.usertoken);

    if (email === resJSON.email && senha === resJSON.senha) {
      setToken(resJSON.usertoken);
    }

    else {
      alert("Login falhou!");
    }

  }

  //função que verifica se o usuario existe na tabela de pendentes
  const validar_login_pendentes = async (email, senha) => {
    try {
      const body = { email, senha };
      const response = await fetch(Portas().serverHost + "/alunos/verifyP",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      const resJSON = await response.json();
      console.log(resJSON);

      if (resJSON.email === email && resJSON.senha === senha) {
        alert("Usuário ainda não foi aprovado pelo Administrador!");
        return;
      }
      else{
        alert("Usuário invalido");
        return;
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  //função que verifica se o usuario existe
  const validar_login = async () => {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if(email === "" || senha === ""){
      alert("Campos não preenchidos");
      return;
    }

    try {
      const body = { email, senha };
      const response = await fetch(Portas().serverHost + "/alunos/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      const resJSON = await response.json();
      console.log(resJSON)

      if (resJSON.email === email && resJSON.senha === senha) {
        login(resJSON, email, senha);
      }
      else{
        validar_login_pendentes(email, senha);
      }


    } catch (err) {
      console.error(err.message);
    }
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
            Acesso ao Sistema
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
              id="entrar"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={validar_login}
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
                <Link href="/cadastro" variant="body2">
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