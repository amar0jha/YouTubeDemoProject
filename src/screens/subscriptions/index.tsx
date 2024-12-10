import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import HomeHeader from '../../components/header';
import HomeVideoItems from '../../components/card';
import styles from './style';

const Subscription = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState<string>('All');

  const subscriptions = useSelector((state: any) => state.subscriptions.subscriptions);

  const tabItems = ['All', 'Today', 'Videos', 'Shorts', 'Live', 'Posts', 'Continue watching', 'Unwanted'];

  const renderItemSubs = ({ item }: any) => <HomeVideoItems video={item} needProfileIcon needMoreIcon  />;
  
  const handleKeyExtractor = (item: any) => item.id.toString();

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
  };
  
  return (
    <ScrollView bounces={false} style={styles.container}>
      <HomeHeader youtubeLogo />

      <View style={styles.subscriptionsHeader}>
        <FlatList
          data={subscriptions} 
          keyExtractor={(item) => item.id}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subscriptionsContainer}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.subscriptionContainer}>
                <Image source={{ uri: item.profileImage }} style={styles.thumbnail} />
                <Text style={styles.subscriptionName} numberOfLines={1}>
                  {item.channelName}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity>
          <Text style={styles.allText}>All</Text>
        </TouchableOpacity>
      </View>

     
      <View>
        <FlatList
          data={tabItems}
          keyExtractor={(item) => item}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.tabItem,
                selectedTab === item ? styles.selectedTab : null, 
              ]}
              onPress={() => handleTabSelect(item)} 
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === item ? styles.selectedTabText : null, 
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      
      <View >
        {subscriptions.length === 0 ? (
          <Text style={styles.emptyHistory}>No subscribed channels yet.</Text>
        ) : (
          <FlatList
            data={subscriptions}
            renderItem={renderItemSubs}
            bounces={false}
            keyExtractor={handleKeyExtractor}
          />
        )}
      </View>
    </ScrollView> 
  );
};

export default Subscription;
