import React from "react";
const key = '@clientsData'

const Client = {
  getClients: async function() {
    try {
      let clients = await AsyncStorage.getItem(key);
      return JSON.parse(clients); // return array of objects
    } catch (error) {
      return error;
    }
  },

  insertClient: async function(client) {
    let clients = await this.getClients(); // array of objects
     if(clients) { // We have clients
      clients.push(client);
      await AsyncStorage.setItem(key, JSON.stringify(clients));
    } else { // Your first client
      let clients = [client];
      await AsyncStorage.setItem(key, JSON.stringify(clients));
    }
  },

  clear: async function() {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      return error;
    }
  }
}

export default Client;