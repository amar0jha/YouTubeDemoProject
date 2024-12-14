import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import HomeHeader from "../../components/header";
import styles from "./style";

const VoiceScreen = () =>{
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
  <HomeHeader youtubeLogo/>
</View>
    )
}

export default VoiceScreen