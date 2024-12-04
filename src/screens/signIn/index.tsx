import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icons, Images} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../../components/customInput';
import styles from './style';
import ButtonComponent from '../../components/customBtn';
import { signInValidate, signInValidations } from './validation';

const SignInScreen = () => {
  const navigation: any = useNavigation();
  const [values, setValues]: any = useState({signInValidations});
  const [errors, setErrors]: any = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'Bottom'}],
        });
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const handleChange = (field: any, value: any) => {
    setValues({
      ...values,
      [field]: value,
    });
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [field]: `${
          field === 'username' ? 'Username' : 'Password'
        } is required`,
      });
    } else {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };
  const handleLogin = async () => {
    const validationErrors = signInValidate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const {username, password} = values;
        // await auth().signInWithEmailAndPassword(username, password);
        await AsyncStorage.setItem('userToken', 'your_auth_token');
        
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        });
      } catch (error: any) {
        console.error('Login error: ', error);
        if (error.code === 'auth/invalid-email') {
          setErrors({...errors, username: 'Invalid email address'});
        }else {
          setErrors({...errors, general: 'An error occurred. Please try again.'});
        }
      }
    } else {
      console.log('Validation failed', validationErrors);
    }
  };
return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={Icons.ytLogo} style={styles.logoImage} />
        <View>
          <CustomInput
            placeholder={'Username, email address or mobile number'}
            onChangeText={text => handleChange('username', text)}
            value={values.username}
            style={styles.inputView}
            touched={!!errors.username}
            errors={errors.username}
          />
          
          <CustomInput
            placeholder={'Password'}
            onChangeText={text => handleChange('password', text)}
            value={values.password}
            style={styles.inputView}
            touched={!!errors.password}
            errors={errors.password}
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>

          <ButtonComponent
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!values.username || !values.password}
          />

           {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}

        </View>

        <View style={styles.facebookContainer}>
          <Image source={Icons.googleLogin} style={styles.facebookLogo} />
          <TouchableOpacity style={styles.facebook}>
            <Text style={styles.facebookText}>Log in with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.newAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
