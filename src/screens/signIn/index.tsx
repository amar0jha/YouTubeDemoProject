import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icons, Images} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../../components/customInput';
import styles from './style';
import ButtonComponent from '../../components/customBtn';
import { signInValidate, signInValidations } from './validation';
import auth from '@react-native-firebase/auth'
import strings from '../../theme/string';

const SignInScreen = () => {
  const navigation: any = useNavigation();
  const [formData, setformData]: any = useState({signInValidations});
  const [validationErrors, setvalidationErrors]: any = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      setIsLoggedIn(true);
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab'}],
      });
    }
  };
  useEffect(() => {
    checkLoginStatus();
  }, [navigation]);

  const handleChange = (field: any, value: any) => {
    setformData({
      ...formData,
      [field]: value,
    });
    if (value.trim() === '') {
      setvalidationErrors({
        ...validationErrors,
        [field]: `${
          field === 'username' ? 'Username' : 'Password'
        } is required`,
      });
    } else {
      setvalidationErrors({
        ...validationErrors,
        [field]: undefined,
      });
    }
  };
  const handleLogin = async () => {
    const validationErrors = signInValidate(formData);
    setvalidationErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const {username, password} = formData;
        await auth().signInWithEmailAndPassword(username, password);
        await AsyncStorage.setItem('userToken', 'your_auth_token');
        
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        });
      } catch (error: any) {
        console.error('Login error: ', error);
        if (error.code === 'auth/invalid-email') {
          setvalidationErrors({...validationErrors, username: 'Invalid email address'});
        }else {
          setvalidationErrors({...validationErrors, general: 'An error occurred. Please try again.'});
        }
      }
    } else {
      console.log('Validation failed', validationErrors);
    }
  };
return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={Images.youtubeLogo} style={styles.logoImage} />
        <View>
          <CustomInput
            placeholder={'Username, email address or mobile number'}
            onChangeText={text => handleChange('username', text)}
            value={formData.username}
            style={styles.inputContainer}
            touched={!!validationErrors.username}
            errors={validationErrors.username}
          />
          
          <CustomInput
            placeholder={'Password'}
            onChangeText={text => handleChange('password', text)}
            value={formData.password}
            style={styles.inputContainer}
            touched={!!validationErrors.password}
            errors={validationErrors.password}
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>{strings.Forgot}</Text>
          </TouchableOpacity>

          <ButtonComponent
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!formData.username || !formData.password}
          />

           {validationErrors.general && <Text style={styles.errorText}>{validationErrors.general}</Text>}

        </View>

        <TouchableOpacity style={styles.googleContainer} onPress={()=> navigation.navigate('SignInGoogle')}>
          <Image source={Icons.googleLogin} style={styles.googleLogo} />
            <Text style={styles.googleText}>{strings.GoogleLogin}</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.lineView} />
          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.lineView} />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.newAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signupText}>{strings.SignUp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
