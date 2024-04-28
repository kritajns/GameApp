/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/routes/RootNavigation';
import Routes from './src/routes';

function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.container} >
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
