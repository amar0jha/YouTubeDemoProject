
import { StyleSheet } from "react-native"

const styles = StyleSheet.create ({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    container1:{
        flex: 1,
        justifyContent:'flex-start',
        // backgroundColor:'grey',
    },
    logoImage:{
        height:30,
        
        // paddingVertical:5,
        width:'60%',
        justifyContent:'flex-start',
        // alignItems:'flex-start',
        marginHorizontal:15,
        resizeMode:'contain',
    },
    headerIcons:{
        height:25,
        width:25,
        marginStart:10,
        marginEnd:15,
    },
    iconsContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
        // backgroundColor:'green',
    }   
})

export default styles
