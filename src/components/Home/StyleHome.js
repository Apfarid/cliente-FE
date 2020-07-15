import { makeStyles } from '@material-ui/core/styles';

export const homeStyle = makeStyles(theme => ({
  contenedor:{
    display:'flex',
    justifyContent:'center',
    marginTop: 100,
    color:'#e0e0e0',
    textAlign:'center'
    
  },

  titleD: {
    fontWeight: 600,
    fontSize: 30
    
},

contenedorDatoTitle: {
  display:'flex',
  width: '100%',
    marginTop: 40,
    marginBottom: 20,
    justifyContent:'center',
},

campo: {

  borderRadius: 50,
  background: '#0074bc',
  color: '#fff',
  margin: '0px 20px',
  padding: '5px 50px',
  fontWeight: 600,
  fontSize: 30

},

}));
  