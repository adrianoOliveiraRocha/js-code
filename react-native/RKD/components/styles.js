import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 5,
    margin: 5,
    marginTop: 30
  },

  top: {
    flex: 2.0,
    backgroundColor: "#aad",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  middle: {
    flex: 7,
    alignItems: 'center',
    backgroundColor: "beige",
    borderWidth: 1
  },

  bottom: {
    flex: 1,
    backgroundColor: "#fca",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  largeText: {
    textAlign: 'center',
    fontSize: 35,
    padding: 27
  },

  smallText: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10
  },

  footerText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },

  tImput: {
    fontSize: 25,
    height: 200,
    padding: 10,
    backgroundColor: 'white'
  }
});

export default styles;