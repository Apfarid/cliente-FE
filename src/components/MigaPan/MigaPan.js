import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './MigasEstilos.css'
import { Link as Lin } from 'react-router-dom'

export default function ActiveLastBreadcrumb({datosVista}) {
  return (
    <div className="migas">

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={Lin} to="/" >
            Inicio
          </Link>
          
          <Link
            color="secondary"
            aria-current="page"
            >
            {datosVista.nombre}
          </Link>
        </Breadcrumbs>
      </div>
  );
}
