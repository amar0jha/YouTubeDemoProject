import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import { Videos } from '../../../assets';
import colors from '../../../theme/color';

const VideoPlayer = () => {
  const videoRef = useRef<VideoRef>(null);
  const [isPaused, setIsPaused] = useState(false);

  const onError = error => {
    console.log('Video Error:', error);
  };

  const onLoad = data => {
    console.log('Video Loaded:', data);
  };

//   const handlePause = () => {
//     console.log('videoRefPause.', videoRef.current?.pause());
//   };

//   const handleResume = () => {
//     videoRef.current?.seek(0);
//     console.log('videoRefResume.', videoRef.current?.resume());
//   };

  const handleButtons = () => {
    if (isPaused) {
      videoRef.current?.seek(0);
      console.log('videoRefResume.', videoRef.current?.resume());
    }
    else{
        console.log('videoRefPause.', videoRef.current?.pause());
    }
    setIsPaused(!isPaused);
  };
  

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        //  => {
        //   ref.current = videoRef;
        //   console.log('videoRef...',videoRef)
        // }}
        // source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        source={(Videos.testingVideo)}
        style={styles.video}
        resizeMode="contain"
        repeat={false}
        onError={onError}
        onLoad={onLoad}
        controls={true}
        // ignoreSilentSwitch="ignore"
        //    playInBackground={false}
        // playWhenInactive={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 20,
        }}>
        {/* <Text onPress={handlePause} style={styles.button}>
          Pause
        </Text>
        <Text onPress={handleResume} style={styles.button}>
          Resume
        </Text> */}
          <TouchableOpacity onPress={handleButtons} style={styles.button}>
        <Text style={styles.buttonText}>{isPaused ? 'Resume' : 'Pause'}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  video: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  button: {
    position:'absolute',
    bottom: '40%',
    left:'50%',
    transform: [{ translateX: -50 }, { translateY: -100 }],
    alignSelf: 'center',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  
});

export default VideoPlayer;

// npm install react-native-walkthrough-tooltip

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import Tooltip from 'react-native-walkthrough-tooltip';

// const TooltipExample = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Tooltip
//         isVisible={visible}
//         content={<Text>Tooltip content</Text>}
//         placement="top"
//         onClose={() => setVisible(false)}
//       >
//         <TouchableOpacity onPress={() => setVisible(true)}>
//           <Text>Click me to show tooltip</Text>
//         </TouchableOpacity>
//       </Tooltip>
//     </View>
//   );
// };


// npm install react-native-elements
// import { Tooltip } from 'react-native-elements';

// const Example = () => (
//   <Tooltip popover={<Text>Some Tooltip Content</Text>}>
//     <Button title="Press me" />
//   </Tooltip>
// );

