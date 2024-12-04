import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    marginBottom: 10,
  },
  
  detailsContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    paddingVertical: 10, 
       // backgroundColor: 'red',

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
