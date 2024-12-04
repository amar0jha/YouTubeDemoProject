import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Icons, Images } from '../../assets';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';

interface OptionItemProps {
  icon: any;
  text: string;
  onPress: () => void;
  onPressP: any;
  index: number;
}

const MoreOptionScreen = ({ icon, text, onPress, onPressP, index }: OptionItemProps) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <View style={styles.container}> */}
      <View style={styles.container1}>
        <Image
          source={icon}
          style={styles.iconImageSize}
        />
        <View style={styles.textArrange}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </View>

      {index === 0 && <View style={styles.imageStyleView}>
        <TouchableOpacity onPress={onPressP}>
          <Image source={Icons.pIcon} style={styles.imageSize} />
        </TouchableOpacity>
      </View>}
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default MoreOptionScreen;
