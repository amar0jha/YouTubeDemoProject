import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
// import SingleReel from '../reel';
import shortsVideos from '../../../videos.json';
import SingleShortVideo from '../shortVideos';
import { useDispatch } from 'react-redux';
import { addVideoHistory } from '../../redux/actions/videoHistoryActions';


const ShortsVideoComponent = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shorts, setShorts] = useState(shortsVideos);

  const handleChangeIndexValue = ({ index }: any) => {
    setCurrentIndex(index);
    const video = shorts[index];

    dispatch(addVideoHistory(video));
  };

  const handleLikePress = (index: number) => {
    const updatedPosts = [...shorts];
    updatedPosts[index].likeCounts = updatedPosts[index].likeCounts + (updatedPosts[index].liked ? -1 : 1);
    updatedPosts[index].liked = !updatedPosts[index].liked;
    setShorts(updatedPosts);
  };
  const handleDislikePress = (index: number) => {
    const updatedPosts = [...shorts];
    updatedPosts[index].dislikeCounts = updatedPosts[index].disliked
      ? updatedPosts[index].dislikeCounts - 1
      : updatedPosts[index].dislikeCounts + 1;
    updatedPosts[index].disliked = !updatedPosts[index].disliked;
    setShorts(updatedPosts);
  };
  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={shortsVideos}
      renderItem={({item, index}:any) => (
        <SingleShortVideo
        item={item} 
        index={index} 
        currentIndex={currentIndex} 
        likeCounts={item.like}
        liked={item.liked}
        onLikePress={handleLikePress}
        dislikeCounts={item.disLike}
        disliked={item.disliked}
        onDislikePress={handleDislikePress}
        />
      )}
      keyExtractor={(item:any, index:any) => index}
    />
  );
};
export default ShortsVideoComponent;