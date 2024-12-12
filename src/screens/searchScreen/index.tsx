import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../components/customTextInput';
import { Icons } from '../../assets'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import videoData from '../../../videos.json';
import styles from './style';
import strings from '../../theme/string';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(videoData); 
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const loadSearchHistory = async () => {
      try {
        const history = await AsyncStorage.getItem('searchHistory');
        if (history) {
          setSearchHistory(JSON.parse(history));
        }
      } catch (error) {
        console.error('Failed to load search history:', error);
      }
    };
    loadSearchHistory();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = videoData.filter((item) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(videoData);
    }
  }, [searchQuery]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleMicPress = () => {
    console.log('Mic button pressed!');
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (query) {
      let updatedHistory = [...searchHistory, query];
      if (updatedHistory.length > 5) {
        updatedHistory = updatedHistory.slice(1); 
      }
      setSearchHistory(updatedHistory);
      try {
        await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error('Failed to save search history:', error);
      }
    }
  };

  const renderItem = ({ item }: { item: typeof videoData[0] }) => (
    <TouchableOpacity>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.moreButton}>
        <Image source={Icons.timerIcons} style={styles.moreIcon} />
      </TouchableOpacity>

      <View style={styles.middleContainer}>
        <Text numberOfLines={1} style={styles.description}>{item.description}</Text>
      </View>

      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
    </View>
    </TouchableOpacity>
  );

  const renderSearchHistory = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.historyItem} onPress={() => handleSearch(item)}>
      <Text style={styles.historyText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Image source={Icons.backIcons} style={styles.backImage} />
        </TouchableOpacity>

        <CustomTextInput
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="Search YouTube"
          style={styles.searchInput}
        />

        <TouchableOpacity onPress={handleMicPress} style={styles.micButton}>
          <Image source={Icons.micIcons} style={styles.micIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.results}>
        {searchQuery && filteredData.length === 0 ? (
          <Text style={styles.noResultsText}>{strings.NoResultFound}</Text>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {!searchQuery && searchHistory.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>{strings.RecentSearches}</Text>
          <FlatList
            data={searchHistory}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderSearchHistory}
            bounces={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};



export default SearchScreen;
