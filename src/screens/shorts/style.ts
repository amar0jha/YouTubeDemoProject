import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({

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
    color: colors.white,
  },
  searchContainer:{
    flexDirection:'row',
  },
  headerImage: {
    width: 22,
    height: 22,
    tintColor:colors.white,
    resizeMode: 'contain',
    marginHorizontal:8,
  },
  headerImgMore: {
    width: 22,
    height: 22,
    tintColor: colors.white,
    resizeMode: 'contain',
    marginHorizontal:8,
  },
});
export default styles;
