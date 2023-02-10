import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ToastAndroid,
  SafeAreaView,
  Share } from 'react-native';

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
        // console.log(clients);
        let isMounted = true;
        if(isMounted && clients) {
          let data = [];
          for (const client of clients) {
            data.push({key: client[0], name: JSON.parse(client[1]).name, cpf: JSON.parse(client[1]).cpf});
            console.log(data);
            setData(data);
            console.log("Clients readed!");
          }
        }
      })
      .catch(error => {
        console.error(error);
        alert("OOPS! " + error);
      })
    }, [asyncFun, onSeccess]);
  })();

  async function clearData() {
    Client.clear()
    .then(() => {
      alert('success');
    })    
    .catch(err => {
      alert("No data to remove");
    })
  }

  async function update() {
    Client.getClients()
    .then(clients => {
      let data = [];
      for (const client of clients) {
        console.log(JSON.parse(client[1]).name)
        data.push({key: client[0], name: JSON.parse(client[1]).name, cpf: JSON.parse(client[1]).cpf});
        // console.log(data);
        setData(data);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  function share() {
    (async function onShare() {
      try {
        const result = await Share.share({
          message: JSON.stringify(data),
          title: "Meus Dados"
        })

        if(result.action === Share.sharedAction) {
          if(result.activityType) {
            console.log("shared with activity type of result.activityType");
          } else {
            console.log("shared");
          }
        } else if(result.action === Share.dismissedAction) {
          console.log("dimissed");
        }
      } catch (error) {
        alert(error.message);
      }
    })(); 
  }

  function backup() {
    DocumentPicker.getDocumentAsync({type: '*/*', copyToCacheDirectory: false, multiple: false})
    .then(async (result) => {
      if(result.type === "success") {
        let fileData = await FileSystem.readAsStringAsync(result.uri);
        Client.getBackup(fileData)
        .then(result => {
          alert("Success!");
        })
        .catch(err => {
          alert(err.message);
        })
      }
    })
    .catch(error => {
      console.error(error);
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
                onPress={share}>
                <Text style={styles.textButton}>Share</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity 
                style={[styles.button, {marginTop: 1}]}
                onPress={backup}>
                <Text style={styles.textButton}>Backup</Text>
              </TouchableOpacity> */}
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
