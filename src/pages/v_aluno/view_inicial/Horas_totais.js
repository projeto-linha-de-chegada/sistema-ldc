import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function HorasTotais() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Horas totais</Title>
        <Typography component="p" variant="h4">
          288H
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          Atualizado em 28/01/2021
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            Ver horas cadastradas
          </Link>
        </div>
    </React.Fragment>
  );
}