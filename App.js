
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello world Open up App.js to start working on your app!---Long text
      </Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
