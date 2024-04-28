/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import { GameEngine } from 'react-native-game-engine';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Constants from './src/constants/Constants';

function App(): JSX.Element {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  return (
    <SafeAreaView style={styles.canvas} >
      <View>
        <GameEngine
          ref={engine}
          style={styles.gameEngine}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameEngine: {
    width: BoardSize,
    height: BoardSize,
    flex: null,
    backgroundColor: 'white',
  },
});

export default App;
