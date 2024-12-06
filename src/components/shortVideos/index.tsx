import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { Icons } from '../../assets';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addSubscription, removeSubscription } from '../../redux/actions/subscriptionActions';

const SingleShortVideo = ({ item, index, currentIndex ,likeCounts,  disliked,   dislikeCounts, liked, onLikePress, onDislikePress }: any) => {

  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const [localLiked, setLocalLiked] = useState(liked);
  const [localLikeCounts, setLocalLikeCounts] = useState(likeCounts);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [localDisliked, setLocalDisliked] = useState(disliked);
  const [localDisLikeCounts, setLocalDisLikeCounts] = useState(dislikeCounts);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const subscriptions = useSelector((state: any) => state.subscriptions.subscriptions);

  useEffect(() => {
    const isAlreadySubscribed = subscriptions.some((video: any) => video.id === item.id);
    setIsSubscribed(isAlreadySubscribed);
  }, [subscriptions, item.id]);

  const handleSubscribe = () => {
    if (isSubscribed) {
     
      dispatch(removeSubscription(item));
    } else {
      
      dispatch(addSubscription(item));
    }
    setIsSubscribed(!isSubscribed); 
  };

  // const handleSubscribes = () => {
  //   setIsSubscribed(!isSubscribed);
    
  // };

  const onLikePressed = () => {
    setLocalLiked(!localLiked);
    onLikePress(index);
  };

  const onDislikePressed = () => {
    setLocalDisliked(!localDisliked); 
    onDislikePress(index); 
  };

  useEffect(() => {
    setLocalLikeCounts(likeCounts);
    setLocalLiked(liked);
    setLocalDisLikeCounts(dislikeCounts)
    setLocalDisliked(disliked)
  }, [likeCounts, liked,dislikeCounts,disliked]);

  return (
    <View style={styles.mainContainer}>
      <View
        style={styles.container}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => setMute(!mute)}
          style={styles.shortsContainer}>
          <Video
            videoRef={videoRef}
            repeat={true}
            resizeMode="cover"
            paused={currentIndex === index ? false : true}
            source={{ uri: item.videoImage }}
            muted={mute}
            style={styles.shorts}
          />
        </TouchableOpacity>
        <View style={styles.details}>
          <View>
            <TouchableOpacity>
              <View
                style={styles.channelDetails}>
                <View
                  style={styles.profileImg}>
                  <Image
                    source={{ uri: item.profileImage }}
                    style={styles.img}
                  />
                </View>
                <Text numberOfLines={2} style={styles.channelName}>{item.channelName}</Text>

                <TouchableOpacity onPress={handleSubscribe}>
          <View style={isSubscribed ? styles.subscribedBg : styles.subscribeBg}>
            <Text style={isSubscribed ? styles.textSubscribed : styles.textSubscribe}> {isSubscribed ? 'Subscribed' : 'Subscribe'}</Text>
          </View>
        </TouchableOpacity>

              </View>
            </TouchableOpacity>
            <Text numberOfLines={2} style={styles.captions}>
              {item.description}
            </Text>
            <View style={styles.music}>
              <Text style={styles.audioText}>Songs Audio</Text>
            </View>
          </View>
        </View>
        <View
          style={styles.iconsContainer}>
           <TouchableOpacity onPress={onLikePressed} style={styles.icons}>
            <Image
              source={localLiked ? Icons.thumbsUpLikedIcon : Icons.thumbsUpIcon}
              style={styles.likeImg}
            />
            <Text style={styles.likeCounts}>{localLikeCounts}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onDislikePressed} style={styles.icons}>
            <Image
              source={localDisliked ? Icons.thumbsDownDisLikedIcon : Icons.thumbsDownIcon} 
              style={styles.likeImg}
            />
            <Text style={styles.likeCounts}>{localDisLikeCounts}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
            <Image
              source={Icons.commentIcon}
              style={styles.commentsImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={Icons.shareShortsIcon}
              style={styles.shareImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={Icons.remixIcon}
              style={styles.shareImg}
            />
          </TouchableOpacity>
          <View
            style={styles.audio}>
            <Image
              source={{uri:item.profileImage}}
              style={styles.audioImg}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleShortVideo;