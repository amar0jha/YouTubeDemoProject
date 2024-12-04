import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  // container:{
  //     flex:1,
  //     backgroundColor:colors.black,
  // },
  // backgroundVideo:{
  //     width:'100%',
  //     height:'100%',
  // },
  // videoScreenContainer:{
  //     width:'100%',
  //     height:'100%',
  //     position:'absolute',
  //     justifyContent:'center',
  //     alignItems:'center',
  // },
  // loader: {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: [{ translateX: -25 }, { translateY: -25 }],
  //   },
  //   controlBtnStyle:{
  //     width:40,
  //     height:40,
  //     tintColor:colors.white,
  //   },
  //   controlBtnPlayPause:{
  //     width:40,
  //     height:40,
  //     tintColor:colors.white,
  //     marginHorizontal:10,
  //   },

  container: {
    backgroundColor: colors.black,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
  },
  topView: {
    flexDirection: 'row', 
    height: 80,
    paddingHorizontal: 20,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'flex-end',
  },
  topViewText: {
    fontSize: 19,
    fontWeight: '700',
    color: 'white',
  },
  headerImage: {
    width: 22,
    height: 22,
    tintColor: 'white',
    resizeMode: 'contain',
    marginHorizontal:8,
  },
  headerImgMore: {
    width: 22,
    height: 22,
    tintColor: 'white',
    resizeMode: 'contain',
    marginHorizontal:8,
  },
});
export default styles;
