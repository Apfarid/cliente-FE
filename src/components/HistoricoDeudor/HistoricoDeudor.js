import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./HistoricoStyle.css";
import clienteAxios from "../../config/axios";
import { useSelector } from "react-redux";
import DatosHistorico from "./DatosHistorico";
import { withRouter } from "react-router-dom";

const TablaDeudor = (props) => {
  const [credito, setCredito] = useState([]);

  const creditoInfo = async () => {
    const { data } = await clienteAxios.get("/credito", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    });
    setCredito([data.credito]);
  };

  useEffect(() => {
    creditoInfo();
  }, []);

  return (
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Consecutivo</TableCell>
            <TableCell>Fecha de Aprobación</TableCell>
            <TableCell>Fecha de PreAprobación</TableCell>
            <TableCell>Fecha Rechazado</TableCell>
            <TableCell>Monto en Pesos</TableCell>
            <TableCell>Plazo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credito.length === 0
            ? "Ho hay datos"
            : credito.map((credito, index) => (
                <DatosHistorico
                  credito={credito}
                  key={credito?.id}
                  index={index}
                />
              ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withRouter(TablaDeudor);
