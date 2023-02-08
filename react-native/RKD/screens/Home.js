import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles/styles'

function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4578ff'} />
      <View style={styles.top}>
        <Text style={styles.title}>
          Home
        </Text>
      </View>
      <View style={styles.middle}>
        
      </View>
      <View style={styles.bottom}>
        <Text style={styles.smallText}>
          w3software.br@gmail.com
        </Text>
      </View>
    </View>
  );
}

export default Home;
