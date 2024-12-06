import { StyleSheet } from "react-native";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    marginBottom: 4,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  settingItem: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  settingItemIcon: {
    width: 24, 
    height: 24, 
    marginRight: 15,
  },
  settingItemText: {
    fontSize: 17,
    color: colors.black,
    fontWeight: '400',
  },
  logoutButton: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.red,
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  backButtonIcon: {
    height: 25,
    width: 25,
  },
  backButtonContainer: {
    marginEnd: 30,
  },
  topBarContainer: {
    flexDirection: 'row',
    marginStart: 16,
    marginBottom: 15,
  },
});

export default styles;
