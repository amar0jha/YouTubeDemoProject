import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style';
import { Icons } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { addSubscription, removeSubscription } from '../../redux/actions/subscriptionActions';
import { addDownload, removeDownload } from '../../redux/actions/downloadActions';
import Share from 'react-native-share';

const DetailFooter = ({ videoData }: any) => {
  const [videoStates, setVideoStates] = useState<any>({});

  const { id, channelName, profileImage, subscribers } = videoData;
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isBellIconVisible, setIsBellIconVisible] = useState(false);
  const dispatch = useDispatch();

  const subscriptions = useSelector((state) => state.subscriptions.subscriptions);
  const downloads = useSelector((state) => state.downloads.downloads);

  useEffect(() => {
    const isAlreadySubscribed = subscriptions.some((video) => video.id === id);
    setIsSubscribed(isAlreadySubscribed);
    setIsBellIconVisible(isAlreadySubscribed);
  }, [subscriptions, id]);


  const handleShare = () => {
    Share.open({
      message:
        videoData.videoImage,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });

  }

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

  // const handleAction = (action: string) => {
  //   setVideoStates((prevState) => {
  //     const currentState = prevState[id] || {};
  //     if (action === 'isLiked') {
  //       return {
  //         ...prevState,
  //         [id]: {
  //           ...currentState,
  //           isLiked: !currentState.isLiked,
  //           isDisliked: false,
  //         },
  //       };
  //     }
  //     if (action === 'isDisliked') {
  //       return {
  //         ...prevState,
  //         [id]: {
  //           ...currentState,
  //           isDisliked: !currentState.isDisliked,
  //           isLiked: false,
  //         },
  //       };
  //     }
  //     return {
  //       ...prevState,
  //       [id]: {
  //         ...currentState,
  //         [action]: !currentState[action],
  //       },
  //     };
  //   });
  // };

  const handleAction = (action: string) => {
    setVideoStates((prevState) => {
      const currentState = prevState[id] || {};
  
      if (action === 'isLiked') {
        return {
          ...prevState,
          [id]: {
            ...currentState,
            isLiked: !currentState.isLiked,    
            isDisliked: false,                 
          },
        };
      }
  
      if (action === 'isDisliked') {
        return {
          ...prevState,
          [id]: {
            ...currentState,
            isDisliked: !currentState.isDisliked,  
            isLiked: false,                       
          },
        };
      }
  
      return {
        ...prevState,
        [id]: {
          ...currentState,
          [action]: !currentState[action],
        },
      };
    });
  };
  

  const handleDownload = () => {
    const isDownloaded = downloads.some((video) => video.id === id);

    if (isDownloaded) {
      dispatch(removeDownload(videoData));
    } else {
      dispatch(addDownload(videoData));
    }

    setVideoStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isDownloaded: !isDownloaded,
      },
    }));
  };

  const listItems = [
    {
      id: '1',
      image: videoStates[id]?.isLiked ? Icons.likedVideoIcon : Icons.thumbsUpIcon,
      text: videoStates[id]?.isLiked ? 'Liked' : 'Like',
      onPress: () => handleAction('isLiked'),
    },
    {
      id: '2',
      image: videoStates[id]?.isDisliked ? Icons.disLikedVideoIcon : Icons.thumbsDownIcon,
      text: videoStates[id]?.isDisliked ? 'Disliked' : 'Dislike',
      onPress: () => handleAction('isDisliked'),
    },
    { id: '3', image: Icons.shareIcon, text: 'Share', onPress: handleShare },
    { id: '4', image: Icons.shortsUnSelected, text: 'Remix' },
    {
      id: '5',
      image: videoStates[id]?.isDownloaded ? Icons.downloadedIcon : Icons.downloadVideoIcon,
      text: videoStates[id]?.isDownloaded ? 'Downloaded' : 'Download',
      onPress: handleDownload,
    },
    { id: '6', image: Icons.clipIcon, text: 'Clip' },
    {
      id: '7',
      image: videoStates[id]?.isSaved ? Icons.saveVideoIcon : Icons.savePlaylistIcon,
      text: videoStates[id]?.isSaved ? 'Saved' : 'Save',
      onPress: () => handleAction('isSaved'),
    },
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
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

export default DetailFooter;
