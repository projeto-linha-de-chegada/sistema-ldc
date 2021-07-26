import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import NavBar from "../NavBar";
import Grid from '@material-ui/core/Grid';

/*
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: top + "%",
        left: left + "%",
        transform: "translate(-" + top + "%,-" + left + "%)",
    };
}
*/


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

export default function Home() {
    //const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <div className={classes.root}>
                <Grid>
                    <Grid item xs={12} style={{ marginLeft: "20px", marginRight: "20px" }}>
                        <Paper elevation={10}>
                            <Fragment>
                                <h1>Main</h1>
                            </Fragment>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Box pt={4}>
                <Copyright />
            </Box>
        </div>
    )
}