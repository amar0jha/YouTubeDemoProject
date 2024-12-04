// CustomTextInput.tsx
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CustomTextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    style?: object;
  }

const CustomTextInput = ({ value, onChangeText, placeholder, style }: CustomTextInputProps) => {
    return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
      />
    </View>
  );
};



export default CustomTextInput;
