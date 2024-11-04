import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

function App() {
  return <StackNavigator />;
}

export default App;
