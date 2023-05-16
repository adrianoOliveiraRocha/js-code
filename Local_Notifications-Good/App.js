import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true
    }
  }
})

const triggerNotifications = async () => {
  console.log("notification")
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Attention",
      body: "Hey! it's working :). Now, I can create apps that send local notifications :)",
      data: {data: "goes here"}
    },

    trigger: {seconds: 1}
  });
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test Notifications</Text>
      <Button onPress={triggerNotifications} 
        title="Trigger Local Notifications" 
        color="#841584" 
        accessibilityLabel="Trigger Local Notifications"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
