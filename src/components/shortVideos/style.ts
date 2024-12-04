import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height, 
        bottom: 80
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        //   marginVertical:20
    },
    reelContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    reels: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    details: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        padding: 10,
       
    },
    userDetails: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImg: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'white',
        margin: 10,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50,
    },
    userName: {
        color: 'white', 
        fontSize: 16
    },
    captions: {
        color: 'white', 
        fontSize: 14, 
        marginStart: 10,
        marginEnd:25,
    },
    music: {
        flexDirection: 'row', 
        padding: 10
    },
    audioText: {
        color: 'white'
    },
    iconsContainer: {
        position: 'absolute',
        bottom: 10,
        right: 0,
    },
    likeImg: {
        height: 23, 
        width: 23, 
        tintColor: 'white'
    },
    likeCounts: {
        color: 'white', 
        top: 5,
    },
    icons: {
        padding: 10
    },
    commentsImg: {
        width: 24,
        height: 25,
        tintColor: 'white',
        resizeMode: 'contain',
    },
    shareImg: {
        width: 24,
        height: 25,
        tintColor: 'white',
        resizeMode: 'contain',
    },
    threeDots: {
        width: 25,
        height: 25,
        tintColor: 'white',
    },
    audio: {
        width: 30,
        height: 30,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
    },
    audioImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    subscribeBg: {
        backgroundColor: colors.white,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal:10,
      },
      subscribedBg: {
        backgroundColor: colors.lightTransparent,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
      },
      textSubscribe: {
        color: colors.black,
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        alignItems:'center',
      },
      textSubscribed: {
        color: colors.white,
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        alignItems:'center',
      },
})

export default styles