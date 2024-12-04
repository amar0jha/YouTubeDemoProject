import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import colors from '../../theme/color';


const ButtonComponent = ({buttonTitle, onPress, disabled}:any) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: disabled
                ? colors.grey
                : colors.buttonGreen,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;