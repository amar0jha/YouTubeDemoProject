import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeVideoItems from '../../components/card';
import HomeHeader from '../../components/header';
import { useSelector } from 'react-redux';
import styles from './style';
import {useNavigation} from '@react-navigation/native';


const DownloadScreen = () => {
  const downloads = useSelector((state) => state.downloads.downloads);
    const navigation = useNavigation(); 

    const handleSearchPress = () => {
        navigation.navigate('SearchScreen');
      };
 const renderItem = ({ item }: any) => <HomeVideoItems video={item} needProfileIcon needMoreIcon />;
// const renderItem = ({ item }: any) => (
//   <View style={styles.historyItemContainer}>
//     {/* Video on the Left */}
//     <View style={styles.leftContainer}>
//       <Image source={{ uri: item.videoImage }} style={styles.videoThumbnail} />
//     </View>

//     {/* Footer Items (Description, Channel, Views) on the Right */}
//     <View style={styles.rightContainer}>
//       <Text style={styles.description}>{item.description}</Text>
//       <Text style={styles.channelName}>{item.channelName}</Text>
//       <Text style={styles.views}>{item.views} views</Text>
//     </View>
//   </View>
// );

  const handleKeyExtractor = (item: any) => item.id.toString();

  return (
    <View style={styles.container}>
        <HomeHeader showBackButton onBackPress={() => navigation.goBack()} onSearchPress={handleSearchPress}/>
      <Text style={styles.headerText}>Downloads</Text>
      {downloads.length === 0 ? (
        <Text style={styles.emptyHistory}>No downloaded videos yet.</Text>
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
