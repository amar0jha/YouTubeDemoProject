import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import HomeHeader from '../../components/header';
import styles from './style';
import {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';
import {Icons} from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PermissionsAndroid } from 'react-native';

const VoiceScreen = () => {
  const navigation = useNavigation();
  const [started, setStarted] = useState('');
  const [ended, setEnded] = useState('');
  const [results, setResults] = useState([]);


  const requestAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Audio Permission',
          message: 'App needs access to your microphone',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Audio permission granted');
      } else {
        console.log('Audio permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  useEffect(() => {

    requestAudioPermission();
    
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResult;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    console.log(e);
    setStarted('✅');
  };

  const onSpeechEnd = e => {
    console.log(e);
    setEnded('✅');
  };

  const onSpeechResult = e => {
    console.log(e);
    setResults(e.value);
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US');
      setStarted('');
      setEnded('');
      setResults([]);
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      await Voice.destroy();
      setStarted('');
      setEnded('');
      setResults([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader showBackButton onBackPress={()=>navigation.goBack()}  />
      
      <Text style={styles.headingText}>Voice to text recognizing</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          startRecognizing();
        }}>
        <Image source={Icons.micIcons} style={styles.micImage} />
      </TouchableOpacity>
      <View style={styles.startEnd}>
        <Text>Started {started}</Text>
        <Text>Ended {ended}</Text>
      </View>
      <ScrollView  showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {results.map((item, index) => {
          return (
            <Text key={index} style={styles.resultText}>{item}</Text>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.stopButton}
        onPress={() => {
          stopRecognizing();
        }}>
        <Text style={styles.stopText}>Stop listening</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VoiceScreen;
