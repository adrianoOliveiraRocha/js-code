import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as FileSystem  from 'expo-file-system';

export default function App() {
  
  function saveFile() {
    let fileUri = 'assets/files/text.txt';
    let content = "File conent, File conent, File conent, File conent";
    let options = {};
    FileSystem.writeAsStringAsync(fileUri, content, options)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })
  } 

  return (
    <View style={styles.container}>
      <Button title='Save' onPress={saveFile} />
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
});
