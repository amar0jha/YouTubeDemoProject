import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../theme/color';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor:'green',
  },
  historyItemContainer: {
    width: screenWidth / 2,
    marginRight: 10, 
    marginLeft: 10,
    padding: 10,
    height:'40%'
  },
  
  profileContainer: {
    // flex:1,
    marginVertical: 20,
    // backgroundColor:'red',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  profileImageContainer:{
    width: 50,
    height: 50,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    resizeMode: 'cover',
  },
  channelNameContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  channelIdContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
    marginEnd: 10,
  },
  idText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black,
    // marginEnd:10,
  },
  lineView: {
    width: 2,
    height: 2,
    borderRadius: 1,
    color: colors.black,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    // alignItems:'center',
    // justifyContent:'center',
    // alignContent:'center',
    alignSelf: 'center',
  },
  channelText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.grey,
    // marginStart:10,
  },

  listBg: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    marginRight: 15,
  },
  imageSize: {
    height: 15,
    width: 15,
  },

  listText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
    marginStart: 8,
    textAlign: 'center',
  },
  flatlistContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  listHeaders: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  listHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    textAlign: 'center',
  },
  viewAllBg: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },

  imageSizeProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  subscribeBg: {
    backgroundColor: colors.black,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  textSubscribe: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    alignItems:'center',
  },
  numOfSubsText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.grey,
    marginStart:10,
    // maxWidth:'36%',
  },
  profileSubscribeContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  channelHeading: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.black,
    // maxWidth:'70%',
  },
  channelNameandSubs:{
    alignItems:'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    // marginVertical: 10,
  },
  ProfileAndChannelCont:{
    flexDirection: 'row',
  },
  bellIconBg: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems:'center',
  },
  bellIconSize: {
    height: 18,
    width: 18,
    marginHorizontal:2,
  },

  containerImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
export default styles;
