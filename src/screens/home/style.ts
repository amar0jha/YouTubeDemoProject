import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    // containerSecond:{
    //     marginTop:20,
    // },

    tabsContainer: {
        paddingTop: 16,
        paddingHorizontal: 16,
      },
      tabItem: {
        marginRight: 14,
        backgroundColor: '#E5E5E5',
        borderRadius: 8,
      },
      tabText: {
        fontSize: 16,
        paddingVertical: 9,
        paddingHorizontal: 11,
        fontWeight: '700',
      },
      selectedTab: {
        backgroundColor: 'black',
      },
      selectedTabText: {
        color: 'white',
      },
      lastTabItem: {
        backgroundColor: colors.white, 
        borderColor: colors.white,
      },
      lastTabText: {
        fontSize: 16,
        paddingVertical: 9,
        paddingHorizontal: 11,
        fontWeight: '700',
        color:'#0457db',
      },
})
export default styles