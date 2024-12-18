import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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

  const [selectedTab, setSelectedTab] = useState<string>('All');

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 5;

  const loadMoreVideos = () => {
    if (loading) return;

    setLoading(true);
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;

    let filteredVideos = videosData.slice(startIndex, endIndex);
    if (selectedTab !== 'All') {
      filteredVideos = filteredVideos.filter(video => video.tag === selectedTab);
    }
    setVideos(prevVideos => [...prevVideos, ...filteredVideos]);
    setLoading(false);
    setCurrentPage(prevPage => prevPage + 1);
  };
    
  useEffect(() => {
    loadMoreVideos();
  }, [selectedTab]);

  // const loadMoreVideos = () => {
  //   if (loading) return;

  //   setLoading(true);
  //   const startIndex = (currentPage - 1) * videosPerPage;
  //   const endIndex = startIndex + videosPerPage;
  //   const newVideos = videosData.slice(startIndex, endIndex);

  //   setVideos(prevVideos => [...prevVideos, ...newVideos]);
  //   setLoading(false);
  //   setCurrentPage(prevPage => prevPage + 1);
  // };

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const renderItem = ({ item }: any) => (
    <HomeVideoItems
      video={item}
      onPress={() => handleVideo(item)}
      needProfileIcon
      needMoreIcon
      needAutoPlay={false}
    />
  );
  const handleKeyExtractor = (item: any) => item.id.toString();

  const handleVideo = (video: any) => {
    navigation.navigate('PlayerScreen', { videoData: video });
  };

  const handleLoadMore = () => {
    loadMoreVideos();
  };

  const tabItems = ['All', 'Music', 'Indian pop music', 'T-Series', 'Neha Kakkar', 'Live', 'News', 'Mixes', 'Bhojpuri cinema', 'Comedy clubs', 'Jukebox', 'Movie musicals', 'Dramedy', 'Rahat Fateh Ali Khan', 'Volleyball', 'Reverbation', 'Recently uploaded', 'Posts', 'News to you', 'Send feedback'];

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
    setVideos([]); 
    setCurrentPage(1);
  };

  const renderItemTab = ({ item, index }: any) => (
    <TouchableOpacity
      style={[
        styles.tabItem,
        selectedTab === item ? styles.selectedTab : null,
        index === tabItems.length - 1 && styles.lastTabItem
      ]}
      onPress={() => handleTabSelect(item)}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === item ? styles.selectedTabText : null,
          index === tabItems.length - 1 && styles.lastTabText
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HomeHeader youtubeLogo onSearchPress={handleSearchPress} />
      <View>
        <FlatList
          data={tabItems}
          keyExtractor={(item) => item}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
          renderItem={renderItemTab}
        />
      </View>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={handleKeyExtractor}
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
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
