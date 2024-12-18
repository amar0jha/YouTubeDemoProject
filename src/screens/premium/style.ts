import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  itemsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backArrow:{
    height:25,
    width:25,
  },
  backArrowContainer: {
    position: 'absolute', 
    top: 20, 
    left: 20, 
    zIndex: 1,
  },
  logoImage: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
  },
  marginTop40: {
    marginTop: 40,
  },
  someImage: {
    width: 300,
    height: 150,
    resizeMode: "contain",
  },
  textBold: {
    color: colors.black,
    fontSize: 32,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal:20,
    fontWeight:'700',
  },
  text: {
    color: colors.black,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal:20,
  },
  space40: {
    height: 40,
  },
  space10: {
    height: 10,
  },
  space20: {
    height: 20,
  },
  premiumButton: {
    width:'95%',
    backgroundColor: colors.lightBlue,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  premiumButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
  },
  saveMoneyText: {
    color: colors.black,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
  blueText: {
    color: colors.darkBlue,
    fontWeight: "400",
    fontSize:16,
  },
  rowContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
  },
  
});

export default styles;
