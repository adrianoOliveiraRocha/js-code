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
        if(name === '') {
          setName(jsonClient.name)
        }
        setReady(true);
      }      
    })
    .catch(err => {
      alert(err);
    })
  })

  return (
    ready
    ? (
      <SafeAreaView>
        <Text>Name</Text>
        <TextInput 
          keyboardType="default"
          value={name}
          onChangeText={changeName} />
      </SafeAreaView>
    )
    : (
      <ActivityIndicator size="large" color="#978745" animating={true} />
    )
    
  )
}

export default ClientDetails;