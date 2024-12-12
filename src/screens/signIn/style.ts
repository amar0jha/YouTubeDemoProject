import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor:colors.white,
    },
    logoImage: {
      marginBottom: 15,
      resizeMode:'contain',
      alignSelf: 'center',
      height:40,
 
    },
    subContainer: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal:30
    },
    forgotPass: {
      marginTop: 14,
     
      color: colors.darkBlue,
      alignItems:'flex-end',
      top:8
    },
    forgotPassText: {
      fontSize: 15,
      color: colors.redColor,
    },
    googleContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 40,
      alignItems:'center'
    },
    googleLogo: {
      width: 25,
      height: 25,
      marginRight: 10,
      alignSelf:'center'
    },
    googleText: {
      fontSize: 14,
      fontWeight: '600',
      color:colors.black,
    },
    lineView: {
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
      color: colors.grey,
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
      color:colors.redColor,
    },
    error: {
      color: 'red',
    },
    inputContainer: {
      borderWidth: 1,
      width: '100%',
      height: 45,
      borderColor: colors.darkCloudColor,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 16,
    },
   
    errorText: {
      color: colors.red,
      fontSize: 12,
      marginTop: 8,
    },
})

export default styles