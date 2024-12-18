import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';
import {Icons, Images} from '../../assets';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import strings from '../../theme/string';

const YouTubePremium = () => {

    const navigation = useNavigation(); 


  const handleFamilyPlanPress = () => {
    console.log('Family or Student Plan pressed');
  };

  const handleGetPremium = () => {
    navigation.navigate('PaymentScreen')
  };

  const handleBackPress = () => {
    navigation.navigate('BottomTab');
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.paymentBg} style={styles.backgroundImage}>
        <View style={styles.itemsContainer}>
          <TouchableOpacity style={styles.backArrowContainer} onPress={handleBackPress}>
            <Image source={Icons.backIcons} style={styles.backArrow} />
          </TouchableOpacity>

          <Image source={Images.youtubeLogo} style={styles.logoImage} />

          <View style={styles.space40} />

          <Text style={styles.textBold}>
            All YouTube.{'\n'} No interruptions.
          </Text>

          <View style={styles.space20} />

          <Text style={styles.text}>
            {strings.TextPremium}
          </Text>

          <View style={styles.space20} />

          <Text style={styles.text}>
          {strings.TextPremiumSec}
          </Text>

          <View style={styles.space20} />

          <TouchableOpacity style={styles.premiumButton} onPress={handleGetPremium}>
            <Text style={styles.premiumButtonText}>{strings.ButtonPremium}</Text>
          </TouchableOpacity>

          <View style={styles.space10} />

          <View style={styles.rowContainer}>
            <Text style={styles.saveMoneyText}>{strings.SaveMoney}{"  "}</Text>
            <TouchableOpacity onPress={handleFamilyPlanPress}>
              <Text style={styles.blueText}>{strings.FamilyPlan}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default YouTubePremium;
