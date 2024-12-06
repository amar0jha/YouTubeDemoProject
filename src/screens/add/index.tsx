import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../assets'; 
import styles from './style';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddScreen = () => {

  const [imageUri, setImageUri] = useState("")

  const openGallery = () => {
    // console.log("gallery");
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
        // console.log(response,'dsadadasda');
        if (response.assets && response.assets[0]) {
            // console.log(imageUri, "imageuri")
            setImageUri(response.assets[0].uri);
        }
    });
};
const handleTakePhoto = () => {
  // console.log('launch camera');
  launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
      // console.log('launch camera');
      if (response.assets && response.assets[0]) {
          // console.log(imageUri, "image uri")
          setImageUri(response.assets[0].uri);
      }
  });
}
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.containerSec}>
          <TouchableOpacity style={styles.container1} onPress={handleTakePhoto}>
            <Image source={Icons.cameraIcons} style={styles.iconImageSize} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageStyleView} onPress={openGallery}>
            <Image source={Icons.galleryIcons} style={styles.imageSize} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;
