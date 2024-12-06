import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    subscriptionsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      },
      selectedTab: {
        backgroundColor: 'black',
      },
      selectedTabText: {
        color: 'white',
      },
      subscriptionsContainer: {
        paddingVertical: 16,
        marginTop: 8,
      },
      subscriptionContainer: {
        alignItems: 'center',
        marginRight: 16,
      },
      thumbnail: {
        width: 64,
        height: 64,
        backgroundColor: 'red',
        borderRadius: 32,
      },
      subscriptionName: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
        width: 64,
      },
      allText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 12,
        padding: 12,
      },
      tabsContainer: {
        paddingVertical: 16,
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
      emptyHistory: {
        fontSize: 16,
        fontWeight: '500',
        margin: 10,
        textAlign: 'center',
        color: colors.grey,
      },
  });

  export default styles