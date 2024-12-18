import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import HomeHeader from '../../components/header';
import {Icons, Images} from '../../assets';
import {useSelector} from 'react-redux';
import ThumbnailComponent from '../../components/thumbnail';
import FooterItems from '../../components/footer';
import DataCard from '../../components/dataCard';
import strings from '../../theme/string';

const Profile = () => {
  const navigation = useNavigation();

  const history = useSelector((state: any) => state.videoHistory.history);

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

  const dataCardList = [
    {icon: Icons.yourVideoIcon, text: 'Your videos', onPress: () => {}},
    {
      icon: Icons.downloadVideoIcon,
      text: 'Downloads',
      onPress: () => {
        handleDownloadScreen();
      },
      onPressP: Icons.downloadedIcon,
    },
    {icon: Icons.yourMoviesIcon, text: 'Your movies', onPress: () => {}},
    {icon: Icons.premiumIcon, text: 'Get YouTube Premium', onPress: () => {handlePaymentScreen()}},
    {icon: Icons.timeWatchedIcon, text: 'Time watched', onPress: () => {}},
    {icon: Icons.helpIcon, text: 'Help and feedback', onPress: () => {}},
  ];

  const handleDownloadScreen = () => {
    navigation.navigate('DownloadScreen');
  };

  const handlePaymentScreen = () => {
    navigation.navigate('YouTubePremium');
  };

  const renderItemDataCard = ({item, index}: any) => (
    <DataCard
      index={index}
      icon={item.icon}
      text={item.text}
      onPress={item.onPress}
      onPressP={item.onPressP}
    />
  );

  const renderItem = ({item}: any) => (
    <TouchableOpacity>
      <View style={styles.listBg}>
        <Image source={item.image} style={styles.imageSize} />
        <Text style={styles.listText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

 
  const renderItemHist = ({item}: any) => (
    <View style={styles.historyItemContainer}>
      <ThumbnailComponent video={item} styles={styles.containerImage} />
      <FooterItems video={item} needMoreIcon />
    </View>
  );

  const handleKeyExtractor = (item: any) => item.id.toString();

  const handleViewAll = () => {
    navigation.navigate('HistoryScreen');
  };
  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const handleSettingPress = () => {
    navigation.navigate('SettingScreen');
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        settingIcon
        onSearchPress={handleSearchPress}
        onSettingPress={handleSettingPress}
      />
      <ScrollView bounces={false}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={Images.dummyProfile} style={styles.profileImage} />
          </View>
          <View style={styles.channelNameContainer}>
            <View>
              <Text numberOfLines={1} style={styles.nameText}>
                {strings.ProfileName}
              </Text>
            </View>
            <View style={styles.channelIdContainer}>
              <View>
                <Text numberOfLines={1} style={styles.idText}>
                  {strings.UserId}
                </Text>
              </View>
              <View style={styles.lineView}></View>
              <View>
                <Text style={styles.channelText}>{strings.ViewChannel} {'>'} </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

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
          <Text style={styles.listHeading}>{strings.History}</Text>
          <TouchableOpacity onPress={handleViewAll}>
            <View style={styles.viewAllBg}>
              <Text style={styles.viewAll}>{strings.ViewAll}</Text>
            </View>
          </TouchableOpacity>
        </View>

       

        <FlatList
          data={history}
          renderItem={renderItemHist}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={handleKeyExtractor}
          snapToInterval={Dimensions.get('window').width / 2 + 10}
          decelerationRate="fast"
          // contentContainerStyle={styles.historyFlatlistContainer}
        />


        <FlatList
          data={dataCardList}
          renderItem={renderItemDataCard}
          bounces={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
