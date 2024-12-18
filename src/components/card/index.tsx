import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Icons, Images } from '../../assets';
import styles from './style';
import colors from '../../theme/color';
import FooterItems from '../footer';
import ThumbnailComponent from '../thumbnail';

const HomeVideoItems = ({ video, onPress, needProfileIcon, needMoreIcon, needAutoPlay }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ThumbnailComponent needAutoPlay = {needAutoPlay} playOnThisScreen video={video} time styles={styles.containerImage1} />
      <FooterItems video={video} needProfileIcon={needProfileIcon} needMoreIcon={needMoreIcon} />
    </TouchableOpacity>
  );
};

export default HomeVideoItems;
