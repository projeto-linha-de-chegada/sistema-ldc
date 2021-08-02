import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBar from "../NavBar";


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

export default function Home() {
    return(
        <div>
            <NavBar></NavBar>
            <Copyright></Copyright>
        </div>
    )
}