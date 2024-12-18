import React from 'react';
import { View } from 'react-native';
import styles from './style';
import VideosComponent from '../videothumbnail';

const ThumbnailComponent = ({
  video,
  forward,
  backward,
  play,
  pause,
  time,
  volume,
  fullScreen,
  showProgressBar,
  styles,
  needAutoPlay
}: any) => {
  console.log('needAutoPlay', needAutoPlay)
  return (
    <View style={styles}>
      <VideosComponent
        video={video}
        forward={forward}
        backward={backward}
        play={play}
        pause={pause}
        time={time}
        volume={volume}
        showProgressBar={showProgressBar}
        fullScreen={fullScreen}
        needAutoPlay={!needAutoPlay}
      />
    </View>
  );
};

export default ThumbnailComponent;
