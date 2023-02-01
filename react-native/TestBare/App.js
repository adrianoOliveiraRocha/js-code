import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, TouchableNativeFeedback, Alert } from 'react-native';
import * as RNFS from 'react-native-fs';

function App() {

  function basic() {
    //RNFS.DocumentDirectoryPath
    RNFS.readDir(RNFS.DocumentDirectoryPath)
    .then(result => {
      if(result[0].isFile()){
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      } else {
        return false;
      }      
    })
    .then(statResult => {
      if(statResult) {
        return RNFS.readFile(statResult[1], 'utf8');
      }      
    })
    .then(contents => {
      alert(contents);
    })
    .catch(err => {
      alert(err.message, err.code);
    })
    
  }

  function createFile() {
    let path = RNFS.DocumentDirectoryPath + '/test.txt';
    console.log(path);
    RNFS.writeFile(path, "I am a productor. I dont need a job :/", 'utf8')
    .then(success => {
      alert('File Created');
    })
    .catch(err => {
      console.warn(err);
    })
  }

  function _delete() {
    let path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.unlink(path)
    .then(() => {
      alert('Deleted');
    })
    .catch(err => {
      alert(err);
    })

  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        Tests RNFS Bare
      </Text>
      <View style={styles.sectionDescription}>
        <Button title='Basic' onPress={basic}/>
      </View>
      <View style={styles.sectionDescription}>
        <Button title='Create File' onPress={createFile}/>
      </View>
      <View style={styles.sectionDescription}>
        <Button title='Delete' onPress={_delete}/>
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
