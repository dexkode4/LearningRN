
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    // <SafeAreaView>
    //   <StatusBar barStyle={'light-content'} />
      <AppNavigator />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
