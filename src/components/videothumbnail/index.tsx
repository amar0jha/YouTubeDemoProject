import { View, Text, SafeAreaView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Icons, Images } from '../../assets';
import styles from './style';
import colors from '../../theme/color';
import Video, { VideoRef } from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const VideosComponent = ({ video, forward, backward, play, pause ,time}: any) => {

    const navigation = useNavigation();
    const [isPaused, setIsPaused] = useState(false);
    const [videoPressed, setvideoPressed] = useState(false);
    const [ismute, setIsMute] = useState(true);
    // const [progress,setprogress]=useState(0);
    const [progress, setProgress] = useState({
        currentTime: 0,
        playableDuration: 0,
    });
    const [isBuffering, setIsBuffering] = useState(true);
    const [resizeMode, setResizeMode] = useState('cover');

    const ref = useRef<VideoRef>();

    useEffect(() => {
        // Orientation.lockToLandscape();
        // SystemNavigationBar.fullScreen(true);
    }, []);
    const handleVideo = (video) => {
        navigation.navigate('PlayerScreen', { videoData: video });
    };

    const handleVideoPressed = () => {
        setvideoPressed(!videoPressed);
        console.log('Video Pressed', videoPressed);
        handleVideo(video)
    };

    // const moveBackward = () => {
    //   console.log("Video ref", ref)
    //   ref.current.seek(parseInt(progress.currentTime - 10))
    // };

    // const moveForward = () => {
    //   console.log("Video ref", ref)
    //   ref.current.seek(parseInt(progress.currentTime + 10))
    // };

    const moveBackward = () => {
        if (ref.current) {
            const newTime = Math.max(progress.currentTime - 10, 0);
            ref.current.seek(newTime);
            console.log('Seeked Backward to', newTime);
        }
    };

    const moveForward = () => {
        if (ref.current) {
            const newTime = progress.currentTime + 10;
            ref.current.seek(newTime);
            console.log('Seeked Forward to', newTime);
        }
    };

    const handleProgress = prog => {
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
    return (

        <View>
            <Video
                style={styles.imageSize}
                source={{ uri: video.videoImage }}
                // source={Videos.testingVideo}
                paused={isPaused}
                // paused
                muted={ismute}
                resizeMode={resizeMode}
                onLoad={videoInfo => console.log('video Info', videoInfo)}
                onBuffer={bufferValue => {
                    console.log('Video Buffering', bufferValue);
                    setIsBuffering(bufferValue.isBuffering);
                }}
                ref={ref}
                // onProgress={prog =>
                //   {
                //     // console.log("progress",prog)
                //     setprogress(prog)
                // }}
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
                        style={{ opacity: videoPressed ? 1 : 0, flexDirection: 'row' }}>
                        {backward && <TouchableOpacity onPress={() => moveBackward()}>
                            <Image
                                source={Icons.backButton}
                                style={styles.controlBtnStyle}
                            />
                        </TouchableOpacity>}

                        {isPaused ? (
                            play && <TouchableOpacity onPress={() => handlePlayVideo()}>
                                <Image
                                    source={Icons.playButton}
                                    style={styles.controlBtnPlayPause}
                                />
                            </TouchableOpacity>
                        ) : (
                            pause && <TouchableOpacity onPress={() => handlePauseVideo()}>
                                <Image
                                    source={Icons.pauseButton}
                                    style={styles.controlBtnPlayPause}
                                />
                            </TouchableOpacity>
                        )}
                        {forward && <TouchableOpacity onPress={() => moveForward()}>
                            <Image
                                source={Icons.forwardButton}
                                style={styles.controlBtnStyle}
                            />
                        </TouchableOpacity>}
                    </View>
                ) : (
                    <ActivityIndicator
                        style={styles.loader}
                        size="large"
                        color={colors.buttonGreen}
                    />
                )}
            </TouchableOpacity>
           {time && <View style={styles.videoTimeContainer}>
                <Text style={styles.timeText}>{video.videoTime}</Text>
            </View>}
        </View>

    );
};

export default VideosComponent;
