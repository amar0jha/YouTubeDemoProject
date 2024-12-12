import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeVideoItems from '../../components/card';
import HomeHeader from '../../components/header';
import { useSelector } from 'react-redux';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import strings from '../../theme/string';


const DownloadScreen = () => {
  const downloads = useSelector((state) => state.downloads.downloads);
    const navigation = useNavigation(); 

    const handleSearchPress = () => {
        navigation.navigate('SearchScreen');
      };
 const renderItem = ({ item }: any) => <HomeVideoItems video={item} needProfileIcon needMoreIcon />;

  const handleKeyExtractor = (item: any) => item.id.toString();

  return (
    <View style={styles.container}>
        <HomeHeader showBackButton onBackPress={() => navigation.goBack()} onSearchPress={handleSearchPress}/>
      <Text style={styles.headerText}>{strings.Downloads}</Text>
      {downloads.length === 0 ? (
        <Text style={styles.emptyHistory}>{strings.NoDownloadedVideo}</Text>
      ) : (
        <FlatList
          data={downloads}
          renderItem={renderItem}
          bounces={false}
          keyExtractor={handleKeyExtractor}
        />
      )}
    </View>
  );
};

export default DownloadScreen;
