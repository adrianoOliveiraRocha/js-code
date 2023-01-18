import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import colors from './styles/colors';
import styles from './styles/styles';
import Client from '../models/Client';

function Data() {
  
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
        <View style={styles.form}>
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
