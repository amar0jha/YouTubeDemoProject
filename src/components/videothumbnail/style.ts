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
    backgroundColor: colors.transparent, 
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  timeText:{
    color:colors.white,
    fontWeight:'400',
    fontSize:16,
  },
  videoContainer:{
    flex:1
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
  containerVideo:{
    flexDirection:'row',
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


  progressBarContainer: {
    position: 'relative',
    bottom: 40,
    // left: 10,
    // right: 10,
    width: '100%',
    justifyContent: 'center',
},
progressBar: {
    width: '100%',
    height: 40,
},
progressTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
},
progressTimeText: {
    color: colors.white,
    fontSize: 14,
},
fullScreenBtn: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  zIndex: 10,
},
fullExitBtn:{
  width:20,
  height:20,
  tintColor:colors.white,
},

fullScreenImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},

// fullScreenBtn: {
//   position: 'absolute',
//   bottom: 20,
//   right: 20,
//   zIndex: 10,
// },

// fullExitBtn: {
//   width: 40,
//   height: 40,
//   tintColor: colors.white,
// },


});

export default styles;
