import React from "react";
const storageKey = '@clientsData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Client = {
  getClients: async function() {
    try {
      let clients = await AsyncStorage.getItem(storageKey);
      return JSON.parse(clients); // return array of objects
    } catch (error) {
      return error;
    }
  },

  insertClient: async function(client) {
    let clients = await this.getClients(); // array of objects
     if(clients) { // We have clients
      clients.push(client);
      await AsyncStorage.setItem(storageKey, JSON.stringify(clients));
    } else { // Your first client
      let clients = [client];
      await AsyncStorage.setItem(storageKey, JSON.stringify(clients));
    }
  },

  clear: async function() {
    try {
      await AsyncStorage.removeItem(storageKey);
    } catch (error) {
      return error;
    }
  },

  getBackup: async function(clients) {
    try {
      await AsyncStorage.setItem(storageKey, clients);
    } catch (error) {
      
    }
  }
}

export default Client;