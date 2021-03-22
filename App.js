import React from 'react';
import {StyleSheet, View} from 'react-native';
import Whatsapp from './Whatsapp.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Whatsapp />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
