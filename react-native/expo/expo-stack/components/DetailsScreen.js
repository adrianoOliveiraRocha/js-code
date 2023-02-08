import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={ styles.container }>
      <Text style={styles.largeText}>Details Screen</Text>
      <Text style={styles.smallText}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={styles.smallText}>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;