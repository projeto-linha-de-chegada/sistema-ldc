import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'titulo', title: 'Titulo' },
  { name: 'horas', title: 'Horas' },
];
const rows = [
  { id: 0, titulo: 'Curso de Python', horas: '10' },
  { id: 1, titulo: 'Resumo de encontro Universitario', horas: '16' },
];

export default () => (
  <Paper>
    <Grid
      rows={rows}
      columns={columns}
    >
      <Table />
      <TableHeaderRow />
    </Grid>
  </Paper>
);
