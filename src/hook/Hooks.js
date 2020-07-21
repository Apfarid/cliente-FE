import React, { useState } from "react";

const Hooks = (initialState = {}) => {
  const [estadoHome, setEstadoHome] = useState(initialState);

  let estudio = false;
  let documentos = false;
  let contador = false;
  let preaprobado = false;
  let inicio = true;
  let sinDocumentos = false;
  let paraFirmar = false;

  if (credito === null) {
    inicio = true;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.aprobado === null &&
    credito?.solicitarDocumentos === null &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.preAprobado === null
  ) {
    estudio = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.aprobado === true &&
    credito?.preAprobado === true &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.fechaFirma !== null
  ) {
    preaprobado = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.aprobado === true &&
    credito?.preAprobado === true &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.fechaFirma === null
  ) {
    paraFirmar = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.desembolsado === null &&
    credito?.rechazado === null &&
    credito?.solicitarDocumentos === true &&
    credito?.fechaFirma === null &&
    credito?.aprobado === null
  ) {
    documentos = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    (credito?.aprobado === null || credito?.aprobado === undefined) &&
    credito?.preAprobado === true &&
    (credito?.desembolsado === null || credito?.desembolsado === undefined) &&
    (credito?.rechazado === null || credito?.rechazado === undefined) &&
    (credito?.solicitarDocumentos === false ||
      credito?.solicitarDocumentos === null ||
      credito?.solicitarDocumentos === undefined) &&
    (credito?.fechaFirma === null || credito?.fechaFirma === undefined)
  ) {
    sinDocumentos = true;
    inicio = false;
  }

  if (
    credito?.solicitudCredito === true &&
    credito?.desembolsado === true &&
    credito?.rechazado === null &&
    credito?.valorAprobado !== null &&
    credito?.fechaFirma !== null
  ) {
    contador = true;
    inicio = false;
  }

  return {
    estudio,
    documentos,
    contador,
    preaprobado,
    inicio,
    sinDocumentos,
    paraFirmar,
  };
};

export default Hooks;
