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
    clients.forEach(client => {
      this.insertClient(client);
    });
  }
}

export default Client;