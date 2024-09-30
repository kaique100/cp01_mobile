
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Rotas from './src/Rotas';
// App.js


export default function App() {
  return <Rotas />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
