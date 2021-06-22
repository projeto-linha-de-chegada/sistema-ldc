import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'titulo', title: 'Titulo' },
  { name: 'inicio', title: 'Inicio' },
  { name: 'fim', title: 'Fim' },
  { name: 'horas', title: 'Horas' },
  { name: 'categoria', title: 'Categoria' },
  { name: 'subcategoria', title: 'Subcategoria' },
  { name: 'descricao', title: 'Descrição' },
  { name: 'link', title: 'Link' },
  { name: 'documento', title: 'Documento' },
];
const rows = [
  { id: 0, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
    { id: 1, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
    { id: 2, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
    { id: 3, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
    { id: 4, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
    { id: 5, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
    { id: 6, titulo: 'Curso de Python', inicio: "dd/mm/yyyy", fim: "dd/mm/yyyy", horas: "10", categoria: "I",
    subcategoria: "II", descricao: "cursinho de python em evento X ministrado por pf Y", link: "www.sla.com", documento: "certificado.pdf" },
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
