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

  insertClient: async function(data) {
    let clients = await this.getClients();
     if(clients) { // We have clients
      let lastId;
      let data = [];
      clients.forEach((item, i) => {
        lastId = i;
        let temp = {id: item.id, name: item.name, cpf: item.cpf}
        data.push(temp);
      });
      let newClientId = parseInt(lastId) + 1;
      let client = {id: newClientId, name: data.name, cpf: data.cpf};      
      data.push(client);
      let stringData = JSON.stringify(data);
      await AsyncStorage.setItem('Client', stringData);
      return true;      
    } else { // Your first client
      let client = {id: 1, name: data.name, cpf: data.cpf};
      let stringData = JSON.stringify([client]);
      await AsyncStorage.setItem('Client', stringData);
      return true;
    }
  },

  clear: async function() {
    try {
      await AsyncStorage.removeItem('Client');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default Client;