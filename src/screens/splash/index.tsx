import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';
import { Images } from '../../assets';

const SplashScreen = () => {
  const navigation:any = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTab' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignInScreen' }],
        });
      }
    };
    setTimeout(() => {
      checkLoginStatus();
    }, 1000);
  }, [navigation])
  return (
    <View style={styles.container}>
      <Image
        source={Images.youtubeLogo}
        style={styles.imageContainer}
      />
    </View>
  );
};
export default SplashScreen;