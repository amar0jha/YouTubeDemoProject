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
  // historyItemContainer: {
  //   flexDirection: 'row',
  //   marginVertical: 10,
  //   alignItems: 'center',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#e0e0e0',
  //   paddingBottom: 10,
  // },
  // leftContainer: {
  //   width: 120, // Adjust width as needed
  //   height: 80, // Maintain aspect ratio for thumbnails
  //   marginRight: 15,
  // },
  // videoThumbnail: {
  //   width: '100%',
  //   height: '100%',
  //   borderRadius: 8,
  //   resizeMode: 'cover',
  // },
  // rightContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  // description: {
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   color: '#333',
  //   marginBottom: 5,
  // },
  // channelName: {
  //   fontSize: 12,
  //   color: '#666',
  //   marginBottom: 5,
  // },
  // views: {
  //   fontSize: 12,
  //   color: '#999',
  // },
});
export default styles;
