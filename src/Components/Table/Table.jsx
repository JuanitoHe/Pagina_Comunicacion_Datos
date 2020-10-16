import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    width: 'calc(100vw - 44px)'
  },
}));

export default function BasicTable(props) {
  function createData(url, nombreTarea, fecha, correo) {
    return { url, nombreTarea, fecha, correo };
  }
  // Obteber alumno
  const alumnoSeleccionado = props.alumnoSeleccionado
  const correo = alumnoSeleccionado.correo
  const rows = [];
  alumnoSeleccionado.tareas.forEach((tarea) => {
    rows.push(
      createData(tarea.url, tarea.nombre, tarea.fecha, correo)
    )
  })

  const classes = useStyles();
  const descargarArchivo = (urlDelArchivo) => {
    window.open(process.env.PUBLIC_URL+urlDelArchivo, '_blank')
  }  

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descarga</TableCell>
            <TableCell>Nombre de la tarea</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Correo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
              <TableRow
                key={row.nombreTarea}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  descargarArchivo(row.url)
                }}
              >
                <TableCell>
                  <CloudDownloadIcon />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nombreTarea}
                </TableCell>
                <TableCell align="right">{row.fecha}</TableCell>
                <TableCell align="right">{row.correo}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
