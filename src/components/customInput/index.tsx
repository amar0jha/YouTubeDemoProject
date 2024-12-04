import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './style';

const CustomInput = ({placeholder,onChangeText,onBlur,value,style,maxLength,secureTextEntry,keyboardType,touched,errors,}:any) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default CustomInput;