import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions.tsx';
import colors from '../../theme/color/index.ts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    // marginRight: 16,
  },
  left: {
    width: vw(30),
    height: vh(30),
    tintColor: colors.black,
  },
  text: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', width: '90%'},
  buttonContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
  },

  SignInContainer:{
    flex: 0.7, 
    alignItems: 'center', 
    justifyContent: 'center' ,
  },

  googleImage: {
    width: vw(70),
    height: vh(70),
    marginBottom: 40,
  },
  googleLogo: {width: vw(24), height: vh(24)},
  buttonText: {fontSize: 16, marginLeft: 23},
});
export default styles;
