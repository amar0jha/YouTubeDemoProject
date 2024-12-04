import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  containerImage: {
    height: 300, 
    width: '100%',
    position: 'relative', 
  },
  videoTimeContainer: {
    position: 'absolute', 
    bottom: 10, 
    right: 10, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  timeText:{
    color:colors.white,
    fontWeight:'400',
    fontSize:16,
  },
  imageSize: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'stretch', 
  },
 
 


backgroundVideo:{
    width:'100%',
    height:'100%',
},
videoScreenContainer:{
    width:'100%',
    height:'100%',
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
},
loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], 
  },
  controlBtnStyle:{
    width:40,
    height:40,
    tintColor:colors.white,
  },
  controlBtnPlayPause:{
    width:40,
    height:40,
    tintColor:colors.white,
    marginHorizontal:10,
  },
});

export default styles;
