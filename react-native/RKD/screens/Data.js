import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import colors from './styles/colors';
import styles from './styles/styles';
import Client from '../models/Client';

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>{item.name}</Text>
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
      if(res) {
        ToastAndroid.show("Cleaned!", ToastAndroid.LONG);
      }
    })
    .catch(err => {
      ToastAndroid.show(err, ToastAndroid.LONG);
    }) 
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>
          Data
        </Text>
      </View>
      <View style={styles.middle}>
        <View style={{flex: 0.8}}>
          {/* FlatList */}
        </View>
        <View style={[styles.form, {flex: 0.2}]}>
          {/*row*/}
          <View> 
            <View style={styles.tiContainer}>
              <TouchableOpacity 
                style={[styles.button, {marginTop: 5}]}
                onPress={clearData}>
                <Text style={styles.textButton}>Clear Data</Text>
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
    </View>
  );
}

export default Data;
