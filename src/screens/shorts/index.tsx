import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Icons} from '../../assets';
import ShortsVideoComponent from '../../components/shortsVideo';
import {useNavigation} from '@react-navigation/native';

const Shorts = () => {
  const navigation=useNavigation();
  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topViewText}>
          Shorts
        </Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={handleSearchPress}>
        <Image source={Icons.searchIcon}
          style={styles.headerImage}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Icons.moreIcon}
          style={styles.headerImgMore}
        />
        </TouchableOpacity>
        </View>
      </View>
          <ShortsVideoComponent />
    </View>
  );
};
export default Shorts;
