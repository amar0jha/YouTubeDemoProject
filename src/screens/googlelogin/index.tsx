import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import strings from '../../theme/string';
import { Icons } from '../../assets';


interface SignInGoogleProps {
    navigation: any;
}

const SignInGoogle: React.FC<SignInGoogleProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '566429558694-marggk2ctui40vg4d2b9s6qd27dqj2di.apps.googleusercontent.com',
            offlineAccess: false
            // scopes: ['profile', 'email']
        });
    }, []);

    const handleSignup = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const response = await GoogleSignin.signIn();
            console.log("12345678-->", response);
            const idToken = response?.data?.idToken;

            if (!idToken) {
                throw new Error('No idToken received from Google');
            }
            const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredentials);
            // await AsyncStorage.setItem('isLoggedIn', 'true');
            // dispatch(login())
            navigation.reset({
                index: 0,
                routes: [{ name: 'BottomTab' }],
            });
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Sign in operation is in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Google Play Services not available');
            } else {
                console.error('Error during Google Sign-In:', error);
            }
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.viewContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftContainer}>
                    <Image source={Icons.backIcons} style={styles.left} />
                </TouchableOpacity>
                <Text style={styles.text}>{strings.SignUp}</Text>
            </View>
            <View style={styles.SignInContainer}>
                <Image source={Icons.googleLogin} style={styles.googleImage} resizeMode='contain' />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
                    <Image source={Icons.googleLogin} style={styles.googleLogo} />
                    <Text style={styles.buttonText}>{strings.signInGoogle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInGoogle;