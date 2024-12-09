import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,  
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,  
  },
  imageSizeBack: {
    width: 25,
    height: 25,
    tintColor: colors.white,
  },
  containerImage: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  footerContainer: {
    marginTop: 15,  
    zIndex: 5,  
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
  timeText: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 16,
  },
  imageSize: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'stretch',
  },
  flatListContainer: {
    marginTop: 15,
  },
});

export default styles;
