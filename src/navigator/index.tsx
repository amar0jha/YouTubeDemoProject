import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './bottomtab';
import {ScreenNames} from './screennames';
import VideoPlayer from '../screens/home/videoplayer';
import PlayerScreen from '../screens/playerscreen';
import HistoryScreen from '../screens/history';
import SearchScreen from '../screens/searchScreen';
import SplashScreen from '../screens/splash';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          component={SplashScreen}
          name={ScreenNames.SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={SignInScreen}
          name={ScreenNames.SignInScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={SignUpScreen}
          name={ScreenNames.SignUpScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={BottomTab}
          name={ScreenNames.BottomTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={VideoPlayer}
          name={ScreenNames.VideoPlayer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={PlayerScreen}
          name={ScreenNames.PlayerScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={HistoryScreen}
          name={ScreenNames.HistoryScreen}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          component={SettingScreen}
          name={ScreenNames.SettingScreen}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          component={SearchScreen}
          name={ScreenNames.SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
