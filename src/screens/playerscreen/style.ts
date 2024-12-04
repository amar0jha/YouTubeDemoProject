import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    marginBottom: 10,
  },
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
})
export default styles