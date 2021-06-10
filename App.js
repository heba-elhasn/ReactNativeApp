import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
       placeholder='Hi There, have a good day!'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    margin: 12,
    backgroundColor:'#fff',
    borderColor:'black',
    borderWidth:1,
  }
});
