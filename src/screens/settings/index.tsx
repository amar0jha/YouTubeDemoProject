import React from 'react';
import { View, Text, TouchableOpacity, SectionList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';
import strings from '../../theme/string';

const SettingScreen = () => {
  const navigation: any = useNavigation();

  const sections = [
    {
      title: 'Account',
      data: [
        { title: 'General', icon: Icons.settingsIcon }, 
        { title: 'Switch account', icon: Icons.switchAccountIcon },
        { title: 'Family Centre', icon: Icons.familyCentreIcon },
        { title: 'Notifications', icon: Icons.notificationIcon },
        { title: 'Purchases and memberships', icon: Icons.purchasesIcon },
        { title: 'Billing and payments', icon: Icons.billingIcon },
        { title: 'Manage all history', icon: Icons.historyIcon },
        { title: 'Your data in YouTube', icon: Icons.dataIcon },
        { title: 'Privacy', icon: Icons.privacyIcon },
        { title: 'Connected apps', icon: Icons.connectedAppsIcon },
        { title: 'Try experimental new features', icon: Icons.experimentalIcon },
      ],
    },
    {
      title: 'Video and audio preferences',
      data: [
        { title: 'Video quality preferences', icon: Icons.videoQualityIcon },
        { title: 'Playback', icon: Icons.playbackIcon },
        { title: 'Captions', icon: Icons.captionsIcon },
        { title: 'Data saving', icon: Icons.dataSavingIcon },
        { title: 'Downloads', icon: Icons.downloadVideoIcon },
        { title: 'Live chat', icon: Icons.liveChatIcon },
        { title: 'Accessibility', icon: Icons.accessibilityIcon },
        { title: 'Watch on TV', icon: Icons.watchOnTVIcon },
      ],
    },
    {
      title: 'Help and policy',
      data: [
        { title: 'Help', icon: Icons.helpIcon },
        { title: 'YouTube Terms of Service', icon: Icons.termsIcon },
        { title: 'Send feedback', icon: Icons.feedbackIcon },
        { title: 'About', icon: Icons.aboutIcon },
      ],
    },
    {
      title: 'Developer preferences',
      data: [{ title: '', icon: '' }],
    },
  ];

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignInScreen' }],
    });
  };

  const handleBack = () => {
    navigation.goBack(); 
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.settingItem}>
      <Image source={item.icon} style={styles.settingItemIcon} />
      <Text style={styles.settingItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }: any) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={handleBack}>
          <Image source={Icons.backIcons} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.sectionHeaderText}>{strings.Settings}</Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        bounces={false}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
      />
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButton}>{strings.Logout}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingScreen;
