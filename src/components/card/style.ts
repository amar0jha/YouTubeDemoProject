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
  detailsContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    paddingVertical: 10, 
   
  },
  profileAndHeader: {
    // backgroundColor:'yellow',
    flexDirection: 'row', 
    // alignItems: 'center', 
  },
  belowHeader: {
    // backgroundColor:'lightblue',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    width:'80%'
  },
  timeAndView: {
    marginTop:3,
    // backgroundColor:'lightblue',
    flexDirection: 'row', 
       width:'80%'
    // justifyContent: 'flex-start', 
  },
  iconSize: {
    width: 30,
    height: 30,
  },
  iconSizeRound: {
    resizeMode:'contain',
    // backgroundColor: 'red', 
    marginRight: 10,
    // alignItems:'center',
    // justifyContent:'center'
  },
  profileImage:{
    width: 40,
    height: 40,
    borderRadius: 20, 
    // backgroundColor: 'red', 
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  moreIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
