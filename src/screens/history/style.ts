import {StyleSheet} from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:10,
  },
  headerText:{
    fontSize: 24,
    fontWeight: '700',
    margin: 10,
    color:colors.black,
  },
  emptyHistory:{
    fontSize: 16,
    fontWeight: '500',
    margin: 10,
    textAlign:'center',
    color:colors.grey,
  },
  
});
export default styles;
