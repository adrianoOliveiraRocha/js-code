import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import colors from './styles/colors';
import styles from './styles/styles';
import Client from '../models/Client';

function Formulary() {
  const [name, setName] = React.useState("");
  const [cpf, setCPF] = React.useState("");

  function insertClient() {
    if(name && cpf) {
      Client.insertClient({name, cpf})
      .then(result => {
        if(result) {
          ToastAndroid.show("Client inserted!", ToastAndroid.LONG);
          setName(""); setCPF("");
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
      })
    } else {
      alert("Please, type the name and cpf of the client");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>
          Insert Client
        </Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.form}>
          {/*row*/}
          <View> 
            <View style={styles.tiContainer}>
              <TextInput 
                style={styles.inputFild}
                value={name}
                onChangeText={name => setName(name)}
                placeholder="Name here..."
                placeholderTextColor={colors.color2}
                autoCapitalize={"words"}
              />
              
              <TextInput 
                style={styles.inputFild}
                value={cpf}
                onChangeText={cpf => setCPF(cpf)}
                placeholder="CPF here..."
                placeholderTextColor={colors.color2}
                keyboardType={"numeric"}
                keyboardAppearance={"dark"}
              />

              <TouchableOpacity 
                style={[styles.button, {marginTop: 5}]}
                onPress={insertClient}>
                <Text style={styles.textButton}>Save Data</Text>
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

export default Formulary;
