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
}: any) => {
  return (
    <View style={styles.containerImage}>
      <VideosComponent
        video={video}
        forward={forward}
        backward={backward}
        play={play}
        pause={pause}
        time={time}
      />
    </View>
  );
};

export default ThumbnailComponent;
