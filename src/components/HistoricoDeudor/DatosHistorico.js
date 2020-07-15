import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { formateador } from "../../Helper";

const DatosHistorico = ({ credito, index }) => {
  const valor = credito?.valorAprobado ? credito?.valorAprobado : 0;
  return (
    <TableRow>
      <TableCell numeric>{index + 1} -</TableCell>
      <TableCell numeric>{credito?.id}</TableCell>
      <TableCell>{credito?.fechaAprobado}</TableCell>
      <TableCell>{credito?.fechaPreaprobado}</TableCell>
      <TableCell>{credito?.fechaRechazado}</TableCell>
      <TableCell>$ {formateador(valor) || ""}</TableCell>
      <TableCell>
        {credito?.diasPrestamo} {credito?.diasPrestamo < 1 ? "dia" : "días"}
      </TableCell>
    </TableRow>
  );
};

export default DatosHistorico;
