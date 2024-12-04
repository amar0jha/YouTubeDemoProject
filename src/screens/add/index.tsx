import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons, Images} from '../../assets';
import styles from './style';

const AddScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <View style={styles.container1}>
            <Image source={Icons.playQueueIcon} style={styles.iconImageSize} />
            <View style={styles.textArrange}>
              <Text style={styles.textStyle}>Play next in queue</Text>
            </View>
          </View>

          <View style={styles.imageStyleView}>
            <TouchableOpacity>
              <Image source={Icons.pIcon} style={styles.imageSize} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;
