import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation, route }) {

  React.useEffect(() => {
    if(route.params?.post) {
      console.log(route.params?.post)
    } else {
      console.log("No posts so far!");
    }
  }, [route.params?.post]);

  return (
    <View style={ styles.container }>
      <Text style={styles.largeText}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'I am programmer',
          });
        }}
      />
      <Button 
        title="Create Post"
        onPress={() => navigation.navigate('CreatePost')}
        />
      <Button 
        title="Update the Title"
        onPress={() => navigation.setOptions({title: "Javascript Programmer"})}
        />
      <Text style={styles.smallText}>My inital parameter give only my name: 
        {route.params.name}</Text>

      <Text style={styles.smallText}>
        {route.params?.post}
      </Text>
    </View>
  );
}

export default HomeScreen;