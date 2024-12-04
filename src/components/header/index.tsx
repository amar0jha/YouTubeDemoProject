import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets';
import styles from './style';

const HomeHeader = ({youtubeLogo, settingIcon,showBackButton, onBackPress = () => {} , onSearchPress = () => {} }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {youtubeLogo ? (
        <View style={styles.container1}>
          <Image source={Images.youtubeLogo} style={styles.logoImage} />
        </View>
      ) : showBackButton ? (
        <TouchableOpacity
          onPress={onBackPress}>
          <Image source={Icons.backIcons} style={styles.headerIcons} />
        </TouchableOpacity>
      ) : null}

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image source={Icons.castIcon} style={styles.headerIcons} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={Icons.notificationIcon} style={styles.headerIcons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onSearchPress}>
          <Image source={Icons.searchIcon} style={styles.headerIcons} />
        </TouchableOpacity>

        {settingIcon && (
          <TouchableOpacity>
            <Image source={Icons.settingsIcon} style={styles.headerIcons} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
