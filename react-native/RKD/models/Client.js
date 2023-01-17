import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const Client = {
  getClients: async function() {
    try {
      let clients = await AsyncStorage.getItem('Client');
      return JSON.parse(clients);
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  insertClient: async function(client) {
    let clients = await this.getClients();
    if(clients) { // We have clients
      alert("We have Clients");
      // https://github.com/adrianoOliveiraRocha/PhraseNotebook/blob/master/models/Phrase.js
    } else { // Your first client
      client.id = 1;
      let data = [client];
      let stringData = JSON.stringify(data);
      await AsyncStorage.setItem('Client', stringData);
      return true;
    }
  }
}

export default Client;