import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets';
import styles from './style';
import colors from '../../theme/color';
import FooterItems from '../footer';
import ThumbnailComponent from '../thumbnail';

const HomeVideoItems = ({video,onPress,needProfileIcon,needMoreIcon}:any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <View style={styles.containerImage}>
      <Image source={{ uri: video.videoImage }} style={styles.imageSize} />
        <View style={styles.videoTimeContainer}>
          <Text style={styles.timeText}>{video.videoTime}</Text>
        </View>
      </View> */}
      <ThumbnailComponent video={video} time/>
      <FooterItems video={video} needProfileIcon={needProfileIcon} needMoreIcon={needMoreIcon}/>
    </TouchableOpacity>
  );
};

export default HomeVideoItems;
