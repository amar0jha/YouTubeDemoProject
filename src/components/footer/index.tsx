import { View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React, { useRef } from 'react';
import { Icons, Images } from '../../assets';
import styles from './style';
import colors from '../../theme/color';
import RBSheet from 'react-native-raw-bottom-sheet';
import MoreOptionScreen from '../more';

const FooterItems = ({ video, needProfileIcon, needMoreIcon }: any) => {

  const refRBSheet = useRef<any>();

  const handleMoreOption = () => {
    refRBSheet.current.open();
  };

  const handleQueScreen = () => {

  }

  const moreOptionList = [
    { icon: Icons.playQueueIcon, text: 'Play next in queue', onPress: () => { handleQueScreen }, onPressP: Icons.pIcon },
    { icon: Icons.saveWatchLaterIcon, text: 'Save to Watch Later', onPress: () => { }, },
    { icon: Icons.savePlaylistIcon, text: 'Save to playlist', onPress: () => { } },
    { icon: Icons.downloadVideoIcon, text: 'Download video', onPress: () => { } },
    { icon: Icons.shareIcon, text: 'Share', onPress: () => { } },
    { icon: Icons.notInterested, text: 'Not Interested', onPress: () => { } },
    { icon: Icons.dontRecommendChannel, text: 'Don\'t recommend channel', onPress: () => { } },
    { icon: Icons.reportIcon, text: 'Report', onPress: () => { } },

  ]

  const renderItem = ({ item, index }: any) => (
    <MoreOptionScreen
      index={index}
      icon={item.icon}
      text={item.text}
      onPress={item.onPress}
      onPressP={item.onPressP}
    />
  );

  return (

    <View style={styles.detailsContainer}>
      <View style={styles.profileAndHeader}>

        {needProfileIcon && <View style={styles.iconSizeRound}>
          <Image style={styles.profileImage} source={{ uri: video.profileImage }} />
        </View>}

        <View style={styles.belowHeader}>
          <Text style={styles.descriptionHeader} numberOfLines={2}>
            {video.description}
          </Text>
          <View style={styles.timeAndView}>
            <View style={{ flexDirection: 'row' }}>
              <Text numberOfLines={2}>{`${video.channelName} . ${video.views} . ${video.timeAgo}`}</Text>
            </View>
          </View>
        </View>
      </View>

      {needMoreIcon && <TouchableOpacity style={styles.moreIconContainer} onPress={handleMoreOption}>
        <Image source={Icons.moreIcon} style={styles.iconSize} />
      </TouchableOpacity>}

      <RBSheet
        ref={refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        draggable={true}
        height={Dimensions.get('window').height / 2}
        style={{ overflow: 'hidden' }}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#E5E5E5',
            width: '12%',
          },
          container: {
            borderRadius: 20,
            // marginHorizontal:20,
            marginTop: 'auto',
            // marginBottom: 60,
          },
        }}
        onClose={() => console.log('Bottom Sheet closed')}>
        <FlatList
          data={moreOptionList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString} />

        {/* <MoreOptionScreen icon={Icons.playQueueIcon } text='Play next in queue' onPress={handleQueScreen}/> */}

      </RBSheet>

    </View>

  );
};

export default FooterItems;
