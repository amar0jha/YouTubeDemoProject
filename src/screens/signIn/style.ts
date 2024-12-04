import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
    // container:{
    //     justifyContent:'center',
    //     alignItems:'center',
    //     flex:1,
    //     // backgroundColor:'green'
    // },
    // img:{
    //     height:100,
    //     width:300
    // },
    // title:{
    //     marginBottom:40
    // },
    // idInput:{
    //     borderWidth:1,
    //     width:'80%',
    //     fontSize:14,
    //     borderRadius:5,
    //     padding:10,
    //     marginBottom:10,
    //     borderColor:'grey',
    //     backgroundColor:'lightgrey'
    // },
    // forget:{
    //     // backgroundColor:'red',
    //     // left:110
    //     // justifyContent:'flex-end',
    //     // alignContent:'flex-end',
    //     flexDirection:'column',
    //     width:'100%',
    //     alignItems:'flex-end',
    //     right:40
    // }


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      // alignItems: 'center',
      // backgroundColor:'red',
      // marginHorizontal:30
    },
    logoImage: {
      marginBottom: 40,
      resizeMode:'contain',
      alignSelf: 'center',
      height:50
    },
    subContainer: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal:30
    },
    forgotPass: {
      marginTop: 14,
      // alignSelf: 'center',
      // left:140,
      color: '#3797EF',
      alignItems:'flex-end',
      top:8
    },
    forgotPassText: {
      fontSize: 15,
      color: '#3797EF',
    },
    facebookContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 40,
      alignItems:'center'
    },
    facebookLogo: {
      width: 30,
      height: 25,
      marginRight: 10,
      alignSelf:'center'
    },
    facebookText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#3797EF',
    },
    line: {
      width: 140,
      height: 1,
      borderWidth: 1,
      marginTop: 10,
      opacity: 0.1,
    },
    orContainer: {
      marginHorizontal: 20,
    },
    orText: {
      fontSize: 20,
      color: 'grey',
    },
    dividerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 40,
    },
    signUpContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 50,
    },
    newAccountText: {
      fontSize: 16,
    },
    signupText: {
      fontSize: 16,
      color: '#3797EF',
    },
    error: {
      color: 'red',
    },
    inputView: {
      borderWidth: 1,
      width: '100%',
      height: 45,
      // justifyContent:'center',
      borderColor: '#ccc',
      borderRadius: 5,
      // marginTop:16,
      paddingHorizontal: 10,
      fontSize: 16,
      // color:'red',
      // backgroundColor:'yellow',
      // alignSelf:'center',
    },
    facebook:{
    
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 8,
    },
})

export default styles