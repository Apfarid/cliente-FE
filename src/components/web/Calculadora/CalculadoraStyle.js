import { makeStyles } from '@material-ui/core/styles';
 
export const calculadoraStyle = makeStyles((theme) => ({
  root:{
    display:'flex',
//    justifyContent:'center'
  },

    card: {
      backgroundColor:'#0074bc',
      borderRadius:15
    },

    margin: {
      height: theme.spacing(3),
    },

    roota: {
      minWidth: 275,
      borderRadius: 15
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 13,
    },
    pos: {
      marginBottom: 20,
      backgroundColor:'#fff',
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      color:'black',
      margin: 5,
      width: '100%'
    },
    posTitle: {
      marginBottom: 3,
      color:'#fff',
      width: '100%',
      textAlign:'justify',
      fontSize: 12,

    },

    group: {
      //display: 'flex',
      //justifyContent:'space-between',
      margin: '0 50px 0 50px'
    },
    
    days: {
      margin: '0 10px 20px 10px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'#EEEEED',
      borderRadius:10,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 10 
    },

    posDos: {
     marginTop: 40,

    },


    
    valorSolicitado:{
      background: '#0074bc',
      borderRadius: '10px',
      color: 'white',
      fontWeight: 'bold',
      padding: '0.5em 2em',
    },
    
    texto:{
      padding: '0.5em 2em',
      textAlign:'center',
      color: 'white'
    },
    
    picker: {
      fontSize:50
    },

    slider:{
      //width: '100%',
      //margin: '0 auto',
      paddingLeft:15,
      width:'100%',
      paddingRight: 10,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      
    },

    slide: {
      display:'flex',
      width:'90%',
      justifyContent:'center',
      marginLeft:15,
      marginBottom: 10
    },

    monto: {

      display:'flex',
      justifyContent:'space-between'
    },

    montoText:{
      color: '#fff',
      fontSize: 10,
      marginTop: 13
    },

    boton: {
      backgroundColor: '#ffede2e',
      borderRadius: 50,
      fontWeight:'bold',
      width:'100%'
    },

    espacio:{
      marginBottom: 20
    }



  }));
  