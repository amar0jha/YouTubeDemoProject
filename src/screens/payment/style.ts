import { StyleSheet } from "react-native";
import colors from '../../theme/color';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#daedf5',
      // justifyContent:'center',
      paddingHorizontal:10,
    },
    container1: {
      flex: 1,
      backgroundColor:'#daedf5',
      // justifyContent:'center',
      paddingHorizontal:10,
    },
    backgroundImage: {
      flex: 1, 
      justifyContent: 'center',
      padding: 20,
      resizeMode: 'contain',
      backgroundColor:'#daedf5',
    },
    backArrow: {
      
      width:'12%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: 10,
      padding: 10,
      marginHorizontal:10,
      alignItems:'center'
    },
    backImage: {
      height: 25,
      width: 25,
      tintColor: 'black', 
    },
  
    imageBelowBackArrow: {
      width: '80%',
      height: 250, 
      alignSelf: 'center', 
      marginBottom: 10,
      resizeMode: 'contain',
    },
  
    itemContainer: {
      
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      borderRadius: 10,
      padding: 20,
      borderColor:colors.white,
      // borderWidth:2,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    cardField: {
      height: 50,
      marginVertical: 20,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ccc',
      backgroundColor: '#f9f9f9',
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginVertical: 20,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
    },
    resultText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#333',
      marginVertical: 10,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: 300,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      borderRadius: 5,
      width: 100,
      alignItems: 'center',
    },
    modalButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

  export default styles