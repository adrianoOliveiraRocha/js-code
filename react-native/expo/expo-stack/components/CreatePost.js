import * as React from 'react';
import { TextInput, Button } from "react-native";
import styles from "./styles";

function CreatePost({ navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput 
        multiline
        placeholder='What is on your mind?'
        style={styles.tImput}
        value={postText}
        onChangeText={setPostText}/>

      <Button 
        title='Done'
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true
          })
        }}
      />
    </>
  );
}

export default CreatePost;