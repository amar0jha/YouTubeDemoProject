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

  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isDownload, setIsDownload] = useState(false);


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

  const handleLike =() =>{
    setIsLike(!isLike)
    // setIsDisLike(isDisLike)
  };
  const handleDisLike =() =>{
    setIsDisLike(!isDisLike)
    // setIsLike(isLike)
  };

  const handleSave =() =>{
    setIsSave(!isSave)
    // setIsLike(isLike)
  }
  const handleDownload =() =>{
    setIsDownload(!isDownload)
    // setIsLike(isLike)
  }

  const listItems = [
    { id: '1', image : isLike ?  Icons.likedVideoIcon : Icons.thumbsUpIcon, text: 'Like' , onPress: handleLike},
    { id: '2', image: isDisLike ? Icons.disLikedVideoIcon :  Icons.thumbsDownIcon, text: 'Dislike' , onPress: handleDisLike},
    { id: '3', image: Icons.shareIcon, text: 'Share' },
    { id: '4', image: Icons.shortsUnSelected, text: 'Remix' },
    { id: '5', image: isDownload? Icons.downloadedIcon: Icons.downloadVideoIcon, text: 'Download', onPress:handleDownload },
    { id: '6', image: Icons.clipIcon, text: 'Clip' },
    { id: '7', image: isSave? Icons.saveVideoIcon: Icons.savePlaylistIcon, text: 'Save',onPress:handleSave },
    { id: '8', image: Icons.reportIcon, text: 'Report' },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={item.onPress}>
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
