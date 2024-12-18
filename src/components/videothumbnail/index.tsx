import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Icons, Images} from '../../assets';
import styles from './style';
import colors from '../../theme/color';
import Video, {VideoRef} from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Slider from '@react-native-community/slider';

const VideosComponent = ({
  video,
  forward,
  backward,
  play,
  pause,
  time,
  volume,
  fullScreen,
  showProgressBar,
  needAutoPlay,
}: any) => {
  const navigation = useNavigation();
  const [isPaused, setIsPaused] = useState(needAutoPlay);
  const [videoPressed, setvideoPressed] = useState(false);
  const [ismute, setIsMute] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState({
    currentTime: 0,
    playableDuration: 0,
  });
  const [isBuffering, setIsBuffering] = useState(true);
  const [resizeMode, setResizeMode] = useState('cover');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const ref = useRef<VideoRef>();

  // useEffect(() => {
  //     // Orientation.lockToLandscape();
  //     // SystemNavigationBar.fullScreen(true);
  // }, []);

  // useEffect(() => {
  //   if (isFullScreen) {
  //     Orientation.lockToLandscape();
  //   } else {
  //     Orientation.unlockAllOrientations();
  //   }
  // }, [isFullScreen]);

  const handleVideo = video => {
    navigation.navigate('PlayerScreen', {videoData: video});
  };

  const handleVideoPressed = () => {
    setvideoPressed(!videoPressed);
    handleVideo(video);
  };

  const moveBackward = () => {
    if (ref.current) {
      const newTime = Math.max(progress.currentTime - 10, 0);
      ref.current.seek(newTime);
    }
  };

  const moveForward = () => {
    if (ref.current) {
      const newTime = progress.currentTime + 10;
      ref.current.seek(newTime);
    }
  };

  const handleProgress = prog => {
    // console.log('prog',prog)
    setProgress({
      currentTime: prog.currentTime,
      playableDuration: prog.playableDuration,
    });
  };

  const handlePlayVideo = () => {
    setIsPaused(false);
  };

  const handlePauseVideo = () => {
    setIsPaused(true);
  };

  const handleSeek = value => {
    console.log('seek value', value);
    if (ref.current) {
      ref.current.seek(value);
    }
  };

  // const toggleFullScreen = () => {
  //   if (isFullScreen) {
  //     Orientation.unlockAllOrientations();
  //     SystemNavigationBar.navigationShow();
  //   } else {
  //     Orientation.lockToLandscape();
  //     SystemNavigationBar.navigationHide();
  //   }
  //   setIsFullScreen(!isFullScreen);
  // };

  const toggleMute = () => {
    setIsMute(!ismute);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
  };

  return (
    <View style={styles.videoContainer}>
      <Video
        style={styles.imageSize}
        source={{uri: video.videoImage}}
        paused={isPaused}
        muted={ismute}
        resizeMode={resizeMode}
        fullscreen={isFullScreen}
        onFullscreenPlayerWillPresent={() => setIsFullScreen(true)}
        onFullscreenPlayerWillDismiss={() => {
          setIsBuffering(false);
          Orientation.lockToPortrait();
        }}
        onLoad={videoInfo => {
          setDuration(videoInfo.duration);
          console.log('video Info', videoInfo);
        }}
        onBuffer={bufferValue => {
          setIsBuffering(bufferValue.isBuffering);
        }}
        ref={ref}
        onProgress={handleProgress}
      />
      <TouchableOpacity
        onPress={() => handleVideoPressed()}
        style={[
          styles.videoScreenContainer,
          {
            backgroundColor: videoPressed
              ? colors.transparent
              : colors.noTransparent,
          },
        ]}>
        {!isBuffering ? (
          <View
            style={[styles.containerVideo, {opacity: videoPressed ? 1 : 0}]}>
            {backward && (
              <TouchableOpacity onPress={() => moveBackward()}>
                <Image
                  source={Icons.backButton}
                  style={styles.controlBtnStyle}
                />
              </TouchableOpacity>
            )}
            {isPaused
              ? play && (
                  <TouchableOpacity onPress={() => handlePlayVideo()}>
                    <Image
                      source={Icons.playButton}
                      style={styles.controlBtnPlayPause}
                    />
                  </TouchableOpacity>
                )
              : pause && (
                  <TouchableOpacity onPress={() => handlePauseVideo()}>
                    <Image
                      source={Icons.pauseButton}
                      style={styles.controlBtnPlayPause}
                    />
                  </TouchableOpacity>
                )}
            {forward && (
              <TouchableOpacity onPress={() => moveForward()}>
                <Image
                  source={Icons.forwardButton}
                  style={styles.controlBtnStyle}
                />
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color={colors.buttonGreen}
          />
        )}
      </TouchableOpacity>
      {showProgressBar && (
        <View style={styles.progressBarContainer}>
          <View style={styles.progressTimeContainer}>
            <Text style={styles.progressTimeText}>
              {formatTime(progress.currentTime)} /{' '}
              {/* {formatTime(progress.playableDuration)} */}
              {video.videoTime}
            </Text>
          </View>
          <Slider
            style={styles.progressBar}
            minimumValue={0}
            maximumValue={duration}
            value={progress.currentTime}
            onSlidingComplete={handleSeek}
            onValueChange={prog => {
              ref.current?.seek(prog);
            }}
            minimumTrackTintColor={colors.red}
            maximumTrackTintColor={colors.lightTransparent}
            thumbTintColor={colors.red}
          />
        </View>
      )}

      {fullScreen && (
        <TouchableOpacity
          onPress={toggleFullScreen}
          style={styles.fullScreenBtn}>
          <Image
            source={
              isFullScreen ? Icons.exitFullScreenButton : Icons.fullScreenButton
            }
            style={styles.fullExitBtn}
          />
        </TouchableOpacity>
      )}

      {time && (
        <View style={styles.videoTimeContainer}>
          <Text style={styles.timeText}>{video.videoTime}</Text>
        </View>
      )}

      {volume && (<TouchableOpacity onPress={toggleMute} style={styles.muteButton}>
        <Image
          source={ismute ? Icons.muteButton : Icons.soundButton}
          style={styles.muteButtonIcon}
        />
      </TouchableOpacity>)}
    </View>
  );
};

// const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
// };

const formatTime = (seconds: any) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedHours = hours > 0 ? `${hours}:` : '';
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = secs < 10 ? `0${secs}` : secs;

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
};

export default VideosComponent;
