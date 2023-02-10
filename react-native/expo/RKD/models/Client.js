import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Client = {

  insertClient: async function(client) {
    let key = 'client_' + client.cpf;
    await AsyncStorage.setItem(key, JSON.stringify(client));
  },
  
  getClients: async function() {
    let keys = await AsyncStorage.getAllKeys();
    return AsyncStorage.multiGet(keys);
  },

  clear: async function() {
    let keys = await AsyncStorage.getAllKeys();
    return AsyncStorage.multiRemove(keys);   
  },



  

  getBackup: async function(clients) {
    
    try {
      let count = 0, group = [];
      for(let i = 0; i < Object.keys(clients).length; i++) {
        if(count == 3) {
          await AsyncStorage.mergeItem(storageKey, JSON.stringify(group));
          group = []; group.push(clients[i]);
          count = 0;          
        } else {
          
          group.push(clients[i]);
          count++;
          
        }        
      }
      await AsyncStorage.mergeItem(storageKey, JSON.stringify(group)); 
    } catch (error) {
      throw new Error('line 53: ' + error.message);
    }
    
    // await AsyncStorage.setItem(storageKey, JSON.stringify(clients));
  }
}

export default Client;