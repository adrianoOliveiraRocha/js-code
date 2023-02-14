import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ToastAndroid,
  SafeAreaView,
  ActivityIndicator } from 'react-native';

import styles from './../styles/styles';
import Client from './../models/Client';

const ClientDetails = ({ route, navigation }) => {
  const {key} = route.params;
  const [client, setClient] = React.useState({});
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    Client.getClient(key)
    .then(result => {
      if(isMounted) {
        setClient(result);
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
        <Text>Test: {JSON.stringify(client)}</Text>
      </SafeAreaView>
    )
    : (
      <ActivityIndicator size="large" color="#978745" animating={true} />
    )
    
  )
}

export default ClientDetails;