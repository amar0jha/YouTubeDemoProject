import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.cloudcolor,
      borderRadius: 20,
      paddingHorizontal: 15,
      height: 40,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.darkgrey,
    },
  });
  export default styles