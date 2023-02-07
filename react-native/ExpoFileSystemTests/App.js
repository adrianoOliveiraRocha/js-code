import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as FileSystem  from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {

  async function test1() {
    DocumentPicker.getDocumentAsync({type: '*/*', copyToCacheDirectory: false, multiple: false})
    .then(async (result) => {
      if(result.type === "success") {
        let fileData = await FileSystem.readAsStringAsync(result.uri);
        alert(fileData);
      }
    })
    .catch((err) => {
      alert(err);
    })

  }
  
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
      <Button title='TEST' onPress={test1} />
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
