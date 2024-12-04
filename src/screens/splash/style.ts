import {StyleSheet} from 'react-native';
import colors from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: 255,
    height: 255,
    resizeMode: 'contain',
  },
});