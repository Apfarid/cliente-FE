import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {LiquidacionCredito} from "./liquidacionStyle";
import Typography from '@material-ui/core/Typography';

const TAX_RATE = 0.19;





function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(unit) {
  return unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Prestamo', 10),
  createRow('Interes:', 0, 45.99),
  createRow('Interes Moratorio', 0, 17.99),
  createRow('Primera Cobranza', 0, 17.99),
  createRow('Gastos de Cobranza', 0, 17.99),
  createRow('Administración', 0, 17.99),
  createRow('servicios Tecnologicos y Plataforma', 0, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const LiquidaCredito = () => {


  const classes = LiquidacionCredito()

  return (
    <div className={classes.container}>
    <Paper className={classes.root}>

      <div className={classes.banerInfo}>
        <Typography className={classes.bold} >
          EMAIL: <span className={classes.respuesta}> ayuda@easycreditcolombia.com</span>
        </Typography>
        <Typography className={classes.bold} >
          TELEFONO: <span className={classes.respuesta}> +57 317 365 87 87</span>
        </Typography>

      </div>





      <div className = {classes.group}>
        <div className={classes.subGroup}>
        <Typography className={classes.bold} >
          CREDITO: <span className={classes.respuesta}> ksdsd</span>
        </Typography>
        <Typography className={classes.posTres} >
          FECHA DE INICO: <span className={classes.respuesta}> 01/01/2018</span>
        </Typography>
        <Typography className={classes.posTres} >
          FECHA DE VENCIMIENTO: <span className={classes.respuesta}> 01/15/2018</span>
        </Typography>
        <Typography className={classes.posTres} >
          DOCUMENTO: <span className={classes.respuesta}> 1.025.630</span>
        </Typography>
        <Typography className={classes.posTres} >
          NOMBRE: <span className={classes.respuesta}> Mario Perez</span>
        </Typography>
        <Typography className={classes.posTres} >
          CELULAR: <span className={classes.respuesta}> 3023126655</span>
        </Typography>
        <Typography className={classes.posTres} >
          CORREO ELECTRONICO: <span className={classes.respuesta}> @gmail.com</span>
        </Typography>
        <Typography className={classes.posTres} >
          DIRECCION: <span className={classes.respuesta}> Clle 20 </span>
        </Typography>
        </div>

        <div className={classes.subGroup}>
        <Typography className={classes.bold} >
          DETALLLES: 
        </Typography>
        <Typography className={classes.posTres} >
          PLAZO APROBADO: <span className={classes.respuesta}> 15 dias</span>
        </Typography>
        <Typography className={classes.posTres} >
          MONTO DEL CREDITO: <span className={classes.respuesta}> $ 250.000</span>
        </Typography>
        
        </div>
      </div>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Descuento</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Iva</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total a Pagar</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography className={classes.bold} >
          IVA REGIMEN COMÚN
      </Typography>
      <Typography className={classes.posTres} >
         - RESOLUCIÓN DE LA FACTURACIÓN #18762000622784 DEL 13/10/2016
        </Typography>
      <Typography className={classes.posTres} >
         - NO SOMOS GRANDES CONTRIBUYENTES - NO SOMOS AUTORRETENEDORES DE IVA
        </Typography>
    </Paper>
    </div>
  );
}

export default LiquidaCredito;