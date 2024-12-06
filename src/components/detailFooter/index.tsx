import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Icons, Images} from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { addSubscription, removeSubscription } from '../../redux/actions/subscriptionActions';

const DetailFooter = ({ videoData }: any) => {
  const { id, channelName, profileImage, subscribers } = videoData;
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isBellIconVisible, setIsBellIconVisible] = useState(false);
  const dispatch = useDispatch();

  const subscriptions = useSelector(state => state.subscriptions.subscriptions);

  useEffect(() => {
    const isAlreadySubscribed = subscriptions.some(video => video.id === id);
    setIsSubscribed(isAlreadySubscribed);
    setIsBellIconVisible(isAlreadySubscribed); 
  }, [subscriptions, id]);

  const handleSubscribe = () => {
    if (isSubscribed) {
      dispatch(removeSubscription(videoData));  
    } else {
      dispatch(addSubscription(videoData));  
    }
    setIsSubscribed(!isSubscribed);
    setIsBellIconVisible(!isBellIconVisible); 
  };

  const handleBellClick = () => {
    dispatch(removeSubscription(videoData));
    setIsSubscribed(false);
    setIsBellIconVisible(false);  
  };

  const listItems = [
    { id: '1', image: Icons.thumbsUpIcon, text: 'Like' },
    { id: '2', image: Icons.thumbsDownIcon, text: 'Dislike' },
    { id: '3', image: Icons.shareIcon, text: 'Share' },
    { id: '4', image: Icons.shortsUnSelected, text: 'Remix' },
    { id: '5', image: Icons.downloadVideoIcon, text: 'Download' },
    { id: '6', image: Icons.clipIcon, text: 'Clip' },
    { id: '7', image: Icons.savePlaylistIcon, text: 'Save' },
    { id: '8', image: Icons.reportIcon, text: 'Report' },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity>
      <View style={styles.listBg}>
        <Image source={item.image} style={styles.imageSize} />
        <Text style={styles.listText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileSubscribeContainer}>
        <TouchableOpacity>
          <View style={styles.ProfileAndChannelCont}>
            <Image source={{ uri: profileImage }} style={styles.imageSizeProfile} />
            <View style={styles.channelNameandSubs}>
              <Text numberOfLines={1} style={styles.channelHeading}>
                {channelName}
              </Text>
              <Text style={styles.numOfSubsText}>{subscribers}</Text>
            </View>
          </View>
        </TouchableOpacity>

       
        {!isSubscribed && (
          <TouchableOpacity onPress={handleSubscribe}>
            <View style={styles.subscribeBg}>
              <Text style={styles.textSubscribe}> Subscribe </Text>
            </View>
          </TouchableOpacity>
        )}

        
        {isBellIconVisible && (
          <TouchableOpacity onPress={handleBellClick}>
            <View style={styles.bellIconBg}>
              <Image source={Icons.notificationIcon} style={styles.bellIconSize} />
              <Image source={Icons.downArrowIcon} style={styles.bellIconSize} />
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.commonMargin}></View>
      <FlatList
        data={listItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

export default DetailFooter;
