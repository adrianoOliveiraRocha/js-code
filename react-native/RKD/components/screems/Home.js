import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import styles from '../styles';

export default function Home() {

  function test() {
    console.log("Tests");
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.largeText}>
          React Keep Data
        </Text>
      </View>

      <View style={styles.middle}>
        <Text style={styles.smallText}>
          <Button 
            onPress={test}
            title="Test"
            color="#acf"
            accessibilityLabel='This is a buttom'
          />
        </Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.footerText}>
          @w3_software
        </Text>
      </View>
      
    </SafeAreaView>
  )
}