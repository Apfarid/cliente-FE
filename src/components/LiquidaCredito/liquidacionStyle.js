import { makeStyles } from '@material-ui/core/styles';

export const LiquidacionCredito = makeStyles(theme => ({
    root: {
      width: '100vw',
      
      margin:'auto',
      overflowX: 'auto',
      
    },
    table: {
      maxWidth: 500,
      margin: '0 auto'
    },
    container: {
      width: '80%',
      display:'flex',
      justifyContent:'center',
      margin: '0 auto'
    },

    group: {
      display:'flex',
      justifyContent: ' space-between',
      marginTop: 20
    },
    
    posTres: {
      with:'50%',
      margin: '0px 60px 0 60px',
      


    },

    bold: {
      with:'50%',
      margin: '0px 60px 0 60px',
      fontWeight: 'bold'
      


    },

    subGroup: {

    },

    respuesta: {
      fontSize: 14,
      color:'#bdbdbd'
    },

    banerInfo:{
      display:'flex'
    }


  }));