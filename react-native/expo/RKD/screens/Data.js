import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ToastAndroid,
  SafeAreaView,
  Share } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles/styles';
import Client from '../models/Client';

function Main({ navigation }) {
  const [data, setData] = React.useState([]);
  // const [selectedKey, setSelectedKey] = React.useState();

  function testSK(key) {
    navigation.navigate('Details', {key});
  }

  function Item({ item, onPress }) {
    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  
  function renderItem({ item }) {
    return (
      <Item item={item} onPress={() => {testSK(item.key)}}/>
    )
  }

  (function useAsync(asyncFun, onSeccess) {
    React.useEffect(() => {
      Client.getClients()
      .then(clients => {
        let isMounted = true;
        if(isMounted && clients) {
          let data = [];
          for (const client of clients) {
            data.push({key: client[0], name: JSON.parse(client[1]).name, cpf: JSON.parse(client[1]).cpf});
            setData(data);
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
      setData([]);
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
        data.push({key: client[0], name: JSON.parse(client[1]).name, cpf: JSON.parse(client[1]).cpf});
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
        console.log(JSON.parse(fileData));
        Client.getBackup(JSON.parse(fileData))
        .then(() => {
          alert("Success!");
          update();
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

const ClientDetails = ({ route, navigation }) => {
  const {key} = route.params;
  return (
    <SafeAreaView>
      <Text>Test: {key}</Text>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Main"
        component={Main}
        options={{
          title: "Main",
          headerTintColor: "white",
          headerStyle: {backgroundColor: "#4589df"}
        }}
      />

      <Stack.Screen 
        name="Details"
        component={ClientDetails}
        options={{
          title: "Details",
          headerTintColor: "white",
          headerStyle: {backgroundColor: "#4589df"}
        }}
      />
    </Stack.Navigator>
  );
}



function Data() {
  return(
    <MyStack />
  );
}

export default Data;
