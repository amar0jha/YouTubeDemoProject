import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import HomeHeader from '../../components/header';
import {Icons, Images} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation(); 

  const listItems = [
    {
      id: '1',
      image: Icons.switchAccountIcon,
      text: 'Switch account',
    },
    {
      id: '2',
      image: Icons.googleAccountIcon,
      text: 'Google Account',
    },
    {
      id: '3',
      image: Icons.incognitoIcon,
      text: 'Turn on Incognito',
    },
    {
      id: '4',
      image: Icons.shareIcon,
      text: 'Share channel',
    },
  ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity>
      <View style={styles.listBg}>
        <Image source={item.image} style={styles.imageSize} />
        <Text style={styles.listText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleViewAll = () => {
    navigation.navigate('HistoryScreen'); 
  };
  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const handleLogout = async() =>{
    await AsyncStorage.removeItem('userToken');
    navigation.reset({
      index:0,
      routes: [{name:'SignInScreen'}]
    })

  }

  return (
    <View style={styles.container}>
      <HomeHeader settingIcon   onSearchPress={handleSearchPress} />
      <View style={styles.profileContainer}>
        <View>
          <Image source={Images.dummyProfile} style={styles.profileImage} />
        </View>
        <View style={styles.channelNameContainer}>
          <View>
            <Text numberOfLines={1} style={styles.nameText}>
              Amar Nath Ojha
            </Text>
          </View>
          <View style={styles.channelIdContainer}>
            <View>
              <Text numberOfLines={1} style={styles.idText}>
                @Amar_Ojha
              </Text>
            </View>
            <View style={styles.lineView}></View>
            <View>
              <Text style={styles.channelText}>View channel {'>'} </Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={listItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
      />

      <View style={styles.listHeaders}>
        <Text style={styles.listHeading} onPress={handleLogout}>History</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <View style={styles.viewAllBg}>
            <Text style={styles.viewAll}>View all</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
