import { StyleSheet } from "react-native";
import colors from "../../theme/color"; 

const styles = StyleSheet.create({

  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.black, 
  },
  container: {
    flex: 1,
    backgroundColor:colors.black,
  },
  containerSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
    // backgroundColor: 'green',
  },
  container1: {
    flexDirection: 'row',
  },
  imageStyleView: {
    justifyContent: 'center',
    alignItems: 'center',
    // tintColor:colors.white,
  },
  imageSize: {
    height: 27,
    width: 27,
  },
  iconImageSize: {
    height: 30,
    width: 30,
  },
  textArrange: {
    justifyContent: 'center',
  },
  textStyle: {
    marginEnd: 10,
    marginStart: 25,
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
  },
});

export default styles;
