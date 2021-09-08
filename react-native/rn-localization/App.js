import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Localization from 'expo-localization'
import i18n from 'i18n-js';

i18n.translations = {
  en: { welcome: 'Hello', name: "Jully" },
  ja: { welcome: 'こんにちは' }
}

i18n.locate = Localization.locate
i18n.fallbacks = true

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localization App</Text>
      <Text style={styles.text}>
        {i18n.t('welcome')} {i18n.t('name')}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 25,
    color: 'red'
  },

  text: {
    fontSize: 20,
    color: 'blue'
  }
});
