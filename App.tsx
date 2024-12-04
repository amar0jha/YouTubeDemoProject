import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import RootNavigator from './src/navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <RootNavigator />
    // </View>
    <Provider store={store}> 
     <RootNavigator />
      </Provider>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  },

})