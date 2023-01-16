import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/styles'

function Formulary() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>
          Formulary
        </Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.form}>
          {/*row*/}
          <View> 
            {/* column 1 */}
            <View></View>
            {/* column 2 */}
            <View></View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.smallText}>
          w3software.br@gmail.com
        </Text>
      </View>
    </View>
  );
}

export default Formulary;
