import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Icons} from '../../assets';
import ShortsVideoComponent from '../../components/shortsVideo';
import {useNavigation} from '@react-navigation/native';

const Shorts = () => {
  const navigation=useNavigation();
  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topViewText}>
          Shorts
        </Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={handleSearchPress}>
        <Image source={Icons.searchIcon}
          style={styles.headerImage}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Icons.moreIcon}
          style={styles.headerImgMore}
        />
        </TouchableOpacity>
        </View>
      </View>
          <ShortsVideoComponent />
    </View>
  );
};
  // const navigation = useNavigation();
  // const [isPaused, setIsPaused] = useState(false);
  // const [videoPressed, setvideoPressed] = useState(false);
  // const [ismute, setIsMute] = useState(true);
  // // const [progress,setprogress]=useState(0);
  // const [progress, setProgress] = useState({
  //   currentTime: 0,
  //   playableDuration: 0,
  // });
  // const [isBuffering, setIsBuffering] = useState(true);
  // const [resizeMode, setResizeMode] = useState('cover');

  // const ref = useRef<VideoRef>();

  // useEffect(() => {
  //   // Orientation.lockToLandscape();
  //   // SystemNavigationBar.fullScreen(true);
  // }, []);

  // const handleVideoPressed = () => {
  //   setvideoPressed(!videoPressed);
  //   console.log('Video Pressed', videoPressed);
  // };

  // // const moveBackward = () => {
  // //   console.log("Video ref", ref)
  // //   ref.current.seek(parseInt(progress.currentTime - 10))
  // // };

  // // const moveForward = () => {
  // //   console.log("Video ref", ref)
  // //   ref.current.seek(parseInt(progress.currentTime + 10))
  // // };

  // const moveBackward = () => {
  //   if (ref.current) {
  //     const newTime = Math.max(progress.currentTime - 10, 0);
  //     ref.current.seek(newTime);
  //     console.log('Seeked Backward to', newTime);
  //   }
  // };

  // const moveForward = () => {
  //   if (ref.current) {
  //     const newTime = progress.currentTime + 10;
  //     ref.current.seek(newTime);
  //     console.log('Seeked Forward to', newTime);
  //   }
  // };

  // const handleProgress = prog => {
  //   setProgress({
  //     currentTime: prog.currentTime,
  //     playableDuration: prog.playableDuration,
  //   });
  // };

  // const handlePlayVideo = () => {
  //   setIsPaused(false);
  // };

  // const handlePauseVideo = () => {
  //   setIsPaused(true);
  // };

  // return (
  //   <View style={styles.container}>
  //     <StatusBar hidden />
  //     <View>
  //       <TouchableOpacity style={styles.backgroundVideo}>
  //         <Video
  //           style={{width: '100%', height: '100%'}}
  //           source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
  //           // source={Videos.testingVideo}
  //           paused={isPaused}
  //           // paused
  //           muted={ismute}
  //           resizeMode={resizeMode}
  //           onLoad={videoInfo => console.log('video Info', videoInfo)}
  //           onBuffer={bufferValue => {
  //             console.log('Video Buffering', bufferValue);
  //             setIsBuffering(bufferValue.isBuffering);
  //           }}
  //           ref={ref}
  //           // onProgress={prog =>
  //           //   {
  //           //     // console.log("progress",prog)
  //           //     setprogress(prog)
  //           // }}
  //           onProgress={handleProgress}
  //         />
  //         <TouchableOpacity
  //           onPress={() => handleVideoPressed()}
  //           style={[
  //             styles.videoScreenContainer,
  //             {
  //               backgroundColor: videoPressed
  //                 ? colors.transparent
  //                 : colors.noTransparent,
  //             },
  //           ]}>
  //           {!isBuffering ? (
  //             <View
  //               style={{opacity: videoPressed ? 1 : 0, flexDirection: 'row'}}>
  //               <TouchableOpacity onPress={() => moveBackward()}>
  //                 <Image
  //                   source={Icons.backButton}
  //                   style={styles.controlBtnStyle}
  //                 />
  //               </TouchableOpacity>

  //               {isPaused ? (
  //                 <TouchableOpacity onPress={() => handlePlayVideo()}>
  //                   <Image
  //                     source={Icons.playButton}
  //                     style={styles.controlBtnPlayPause}
  //                   />
  //                 </TouchableOpacity>
  //               ) : (
  //                 <TouchableOpacity onPress={() => handlePauseVideo()}>
  //                   <Image
  //                     source={Icons.pauseButton}
  //                     style={styles.controlBtnPlayPause}
  //                   />
  //                 </TouchableOpacity>
  //               )}
  //               <TouchableOpacity onPress={() => moveForward()}>
  //                 <Image
  //                   source={Icons.forwardButton}
  //                   style={styles.controlBtnStyle}
  //                 />
  //               </TouchableOpacity>
  //             </View>
  //           ) : (
  //             <ActivityIndicator
  //               style={styles.loader}
  //               size="large"
  //               color={colors.buttonGreen}
  //             />
  //           )}
  //         </TouchableOpacity>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
// };
export default Shorts;
