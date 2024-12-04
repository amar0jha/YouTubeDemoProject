// import React, { useEffect, useState } from 'react';
// import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
// import styles from './style';
// import FooterItems from '../../components/footer';
// import HomeVideoItems from '../../components/card';
// import videos from '../../../videos.json';
// import ThumbnailComponent from '../../components/thumbnail';
// import DetailFooter from '../../components/detailFooter';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const PlayerScreen = ({ route }: any) => {
//   const { videoData } = route?.params;
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   // Save video history to AsyncStorage
//   const addToHistory = async (video) => {
//     try {
//       const storedHistory = await AsyncStorage.getItem('videoHistory');
//       const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];

//       // Add the new video to the history array
//       const updatedHistory = [video, ...parsedHistory];

//       // Limit to the latest 20 videos
//       if (updatedHistory.length > 20) {
//         updatedHistory.pop();
//       }

//       // Save the updated history back to AsyncStorage
//       await AsyncStorage.setItem('videoHistory', JSON.stringify(updatedHistory));
//     } catch (error) {
//       console.error('Error saving video history', error);
//     }
//   };

//   useEffect(() => {
//     // Save video to history when the PlayerScreen is loaded
//     addToHistory(videoData);
//   }, [videoData]);

//   const renderItem = ({ item }: any) => <HomeVideoItems video={item} needProfileIcon needMoreIcon />;
//   const handleKeyExtractor = (item: any) => item.id.toString();

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         {/* Video thumbnail and controls */}
//         <ThumbnailComponent video={videoData} forward backward play pause time />

//         <TouchableOpacity>
//           <FooterItems video={videoData} needProfileIcon={false} needMoreIcon={false} />
//         </TouchableOpacity>

//         {/* Video details */}
//         <DetailFooter videoData={videoData} />

//         {/* Render the list of related videos */}
//         <FlatList
//           data={videos}
//           renderItem={renderItem}
//           keyExtractor={handleKeyExtractor}
//           bounces={false}
//           style={{ marginTop: 15 }}
//           ListFooterComponent={loading ? <ActivityIndicator size="large" color="blue" /> : null}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PlayerScreen;


// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import HomeVideoItems from '../../components/card';
// import HomeHeader from '../../components/header';

// const HistoryScreen = () => {
//   const [history, setHistory] = useState([]);

//   const loadHistory = async () => {
//     try {
//       const storedHistory = await AsyncStorage.getItem('videoHistory');
//       if (storedHistory) {
//         setHistory(JSON.parse(storedHistory));
//       }
//     } catch (error) {
//       console.error('Error loading video history', error);
//     }
//   };

//   useEffect(() => {
//     loadHistory();
//   }, []);

//   const renderItem = ({ item }: any) => <HomeVideoItems video={item} needProfileIcon needMoreIcon />;
//   const handleKeyExtractor = (item: any) => item.id.toString();

//   return (
// //     <SafeAreaView>
//     <View style={{ flex:1,paddingVertical: 10 }}>
//         <HomeHeader/>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>History</Text>
//       {history.length === 0 ? (
//         <Text>No history yet.</Text>
//       ) : (
//         <FlatList
//           data={history}
//           renderItem={renderItem}
//           bounces={false}
//           keyExtractor={handleKeyExtractor}
//         />
//       )}
//     </View>
//     // </SafeAreaView>
//   );
// };

// export default HistoryScreen;

