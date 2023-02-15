import React from 'react';
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
  ToastAndroid,
  SafeAreaView,
  ActivityIndicator } from 'react-native';

import styles from './../styles/styles';
import Client from './../models/Client';

const ClientDetails = ({ route, navigation }) => {
  const {key} = route.params;
  const [client, setClient] = React.useState({});
  const [name, setName] = React.useState('');
  const [nameReady, setNameReady] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  function changeName(text) {
    setName(text);
  }
  
  React.useEffect(() => {
    let isMounted = true;
    Client.getClient(key)
    .then(result => {
      if(isMounted) {
        let jsonClient = JSON.parse(result);
        setClient(jsonClient);
        if(!nameReady) {
          setName(jsonClient.name); setNameReady(true);
        }
        setReady(true);
      }      
    })
    .catch(err => {
      alert(err);
    })
  })

  const edit = () => {
    if(name === client.name) {
      alert('No changes');
    } else {
      client.key = key;
      client.name = name;
      Client.edit(client)
      .then(() => {
        alert('Success!');
      })
      .catch(err => {
        alert(err);
      })
    }
  }

  const remove = () => {
    Client.remove(key)
    .then(() => {
      alert("Deleted :(");
    })
    .catch(err => {
      alert(err);
    })
  }

  return (
    ready
    ? (
      <SafeAreaView style={styles.container}>
        {/* top */}
        <View style={styles.top}>
          <Text style={styles.title}>
            Key: {key}
          </Text>
        </View>
        {/* middle */}
        <View style={[styles.middle, {marginTop: 150}]}>
          <View style={styles.form}>
            <TextInput 
              style={styles.inputFild}
              placeholder="Your name here"
              keyboardType="default"
              value={name}
              autoCapitalize={"words"}
              onChangeText={changeName} />
            
            <TouchableOpacity style={styles.buttonForm} onPress={edit}>
              <Text style={styles.textButton}>Edite</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFormDanger} onPress={remove}>
              <Text style={styles.textButton}>Delete</Text>
            </TouchableOpacity>        
          </View> 
        </View>
        {/* bottom */}
        <View style={styles.bottom}>
          <Text style={styles.smallText}>
            w3software.br@gmail.com
          </Text>
        </View>

      </SafeAreaView>
    )
    : (
      <ActivityIndicator size="large" color="#978745" animating={true} />
    )
    
  )
}

export default ClientDetails;