import React, {useEffect} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HistoryIcon from '@material-ui/icons/History';
import { Link } from 'react-router-dom'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ReplayIcon from '@material-ui/icons/Replay';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';


export const mainListItems = (

  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem button component={Link} to="/contrato">
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Contrato" />
    </ListItem>

    <ListItem button component={Link} to="/solicitud-credito">
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Solicitud Credito" />
    </ListItem>

    <ListItem button component={Link} to="/historico-credito">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Historico Creditos" />
    </ListItem>
    
    <ListItem button component={Link} to="/liquidar-credito">
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Liquidar Credito" />
    </ListItem>
    <ListItem button component={Link} to="/renovacion-credito">
      <ListItemIcon>
        <ReplayIcon />
      </ListItemIcon>
      <ListItemText primary="Renovación Credito" />
    </ListItem>

    <ListItem button component={Link} to="/crear-cuenta">
      <ListItemText primary="Crear usuario" />
    </ListItem>
    <ListItem button component={Link} to="/formulario-registro">
      <ListItemText primary="Formulario Ingreso" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  {/*/gestor-claves
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button component={Link} to="/detalle">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>

    */}
  </div>
);


