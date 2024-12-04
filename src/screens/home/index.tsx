import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import HomeHeader from '../../components/header';
import styles from './style';
import HomeVideoItems from '../../components/card';
import videosData from '../../../videos.json';

const Home = () => {
  const navigation = useNavigation();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 5;

  useEffect(() => {
    loadMoreVideos();
  }, []);

  const loadMoreVideos = () => {
    if (loading) return;

    setLoading(true);
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const newVideos = videosData.slice(startIndex, endIndex);

    setVideos(prevVideos => [...prevVideos, ...newVideos]);
    setLoading(false);
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const renderItem = ({item}: any) => (
    <HomeVideoItems
      video={item}
      onPress={() => handleVideo(item)}
      needProfileIcon
      needMoreIcon
    />
  );
  const handleKeyExtractor = (item: any) => item.id.toString();

  const handleVideo = (video: any) => {
    navigation.navigate('PlayerScreen', {videoData: video});
  };

  const handleLoadMore = () => {
    loadMoreVideos();
  };

  return (
    <View style={styles.container}>
      <HomeHeader youtubeLogo onSearchPress={handleSearchPress} />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={handleKeyExtractor}
        bounces={false}
        style={{marginTop: 20}}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="blue" /> : null
        }
      />
    </View>
  );
};
export default Home;
