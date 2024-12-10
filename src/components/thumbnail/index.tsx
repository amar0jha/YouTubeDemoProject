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
  fullScreen,
  showProgressBar,
  styles
}: any) => {
  return (
    <View style={styles}>
      <VideosComponent
        video={video}
        forward={forward}
        backward={backward}
        play={play}
        pause={pause}
        time={time}
        showProgressBar={showProgressBar}
        fullScreen={fullScreen}
      />
    </View>
  );
};

export default ThumbnailComponent;
