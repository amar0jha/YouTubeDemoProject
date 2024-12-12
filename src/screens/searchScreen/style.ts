import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: colors.white,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    backButton: {
      marginRight: 10,
    },
    backImage: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    searchInput: {
      flex: 1,
    },
    micButton: {
      marginLeft: 10,
    },
    micIcon: {
      width: 40,
      height: 40,
    },
    results: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    noResultsText: {
      textAlign: 'center',
      fontSize: 18,
      color: '#777',
      marginTop: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 15,
      alignItems: 'center',
    },
    moreButton: {
      paddingRight: 10,
    },
    moreIcon: {
      width: 24,
      height: 24,
    },
    middleContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10,
    },
    description: {
      fontWeight: 'bold',
      fontSize: 14,
      color: colors.black,
      flexWrap: 'nowrap', 
      overflow: 'hidden',
      // textOverflow: 'ellipsis',  
    },
    profileImage: {
      width: 50,
      height: 40,
      borderRadius: 2,
    //   resizeMode:'cover'
    },
    historyContainer: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    historyTitle: {
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 16,
    },
    historyItem: {
      paddingVertical: 8,
    },
    historyText: {
      fontSize: 14,
      color: '#555',
    },
  });

  export default styles