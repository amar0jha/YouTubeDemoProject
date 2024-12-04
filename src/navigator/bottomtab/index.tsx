import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenNames} from '../screennames';
import {Icons} from '../../assets';
import { Image } from 'react-native';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import colors from '../../theme/color';
import Subscription from '../../screens/subscriptions';
import AddScreen from '../../screens/add';
import Shorts from '../../screens/shorts';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case ScreenNames.Home:
              iconName = focused ? Icons.homeSelected : Icons.homeUnSelected;
              break;

            case ScreenNames.Shorts:
              iconName = focused ? Icons.shortsSelected : Icons.shortsUnSelected;
              break;

              case ScreenNames.AddScreen:
              iconName = focused
                ? Icons.AddSelected
                : Icons.AddSelected;
              break;

            case ScreenNames.Subscription:
              iconName = focused
                ? Icons.subscriptionsSelected
                : Icons.subscriptionsUnSelected;
              break;

            case ScreenNames.Profile:
              iconName = focused
                ? Icons.ProfileSelected
                : Icons.ProfileUnSelected;
              break;

            default:
              iconName = Icons.homeSelected;
              break;
          }
          return <Image source={iconName} style={{width: 20, height: 20}} />;
        },
        tabBarActiveTintColor: colors.black, 
        tabBarInactiveTintColor: colors.black, 
        tabBarLabelStyle: {
          fontSize: 12, 
        },
      })}>
      <Tab.Screen
        component={Home}
        name={ScreenNames.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={Shorts}
        name={ScreenNames.Shorts}
        options={{headerShown: false}}
      />
       <Tab.Screen
        component={AddScreen}
        name={ScreenNames.AddScreen}
        options={{headerShown: false}}
      />
       <Tab.Screen
        component={Subscription}
        name={ScreenNames.Subscription}
        options={{headerShown: false}}
      />
       <Tab.Screen
        component={Profile}
        name={ScreenNames.Profile}
        options={{headerShown: false}}
      />
     
    </Tab.Navigator>
  );
};

export default BottomTab;
