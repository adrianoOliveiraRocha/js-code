import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import * as RNFS from 'react-native-fs';

function App() {

  function basic() {
    RNFS.readDir(RNFS.MainBundlePath)
    .then(result => {
      console.log("Got Result", result);
    })
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        Tests RNFS Bare
      </Text>
      <View style={styles.sectionDescription}>
        <Button title='Test'/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
