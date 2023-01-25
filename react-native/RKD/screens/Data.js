import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
// import * as Permissions from 'expo-permissions';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ToastAndroid,
  SafeAreaView } from 'react-native';

import styles from './styles/styles';
import Client from '../models/Client';

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  )
}

function Data() {

  function renderItem({ item }) {
    return (
      <Item item={item} />
    )
  }

  const [data, setData] = React.useState([]);

  (function useAsync(asyncFun, onSeccess) {
    React.useEffect(() => {
      Client.getClients()
      .then(clients => {
        let isMounted = true;
        console.log(clients);
        if(isMounted && clients) {
          let arrayTemp = [];
          clients.forEach(client => {
            arrayTemp.push({ key: client.id, name: `${client.name}` });
          });
          setData(arrayTemp);
        }
      })
      .catch(error => {
        alert("OOPS! " + error);
      })
    }, [asyncFun, onSeccess]);
  })();

  function clearData() {
    Client.clear()
    .then(res => {
      setData([]);
      ToastAndroid.show("Cleaned!", ToastAndroid.LONG);
    })
    .catch(err => {
      ToastAndroid.show(err, ToastAndroid.LONG);
    }) 
  }

  function update() {
    Client.getClients()
    .then(clients => {
      setData(clients);
      ToastAndroid.show("Updated!", ToastAndroid.LONG);
    })
    .catch(err => {
      alert("Error: " + err);
    })    
  }

  function backup() {
    Client.getClients()
    .then(clients => {
      let backup = JSON.stringify(clients);
      let fileUri = FileSystem.documentDirectory + "text.txt";
      FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
      const asset = MediaLibrary.createAssetAsync(fileUri)
      MediaLibrary.createAlbumAsync("Download", asset, false)
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>
          Data
        </Text>
      </View>
      <View style={styles.middle}>
        <View style={{flex: 0.6, marginTop: 5}}>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        </View>
        <View style={[styles.form, {flex: 0.4}]}>
          {/*row*/}
          <View> 
            <View style={styles.tiContainer}>
              <TouchableOpacity 
                style={[styles.button, {marginTop: 5}]}
                onPress={clearData}>
                <Text style={styles.textButton}>Clear Data</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, {marginTop: 1}]}
                onPress={update}>
                <Text style={styles.textButton}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, {marginTop: 1}]}
                onPress={backup}>
                <Text style={styles.textButton}>Backup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.smallText}>
          w3software.br@gmail.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Data;
