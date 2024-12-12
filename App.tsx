import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/navigator';
import { store, persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SafeAreaView><Text>Loading...</Text></SafeAreaView>} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
