import { StyleSheet } from "react-native";
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.color1,
    borderWidth: 1,
    // padding: 10,
    // margin: 5,
    // marginTop: 30
  },

  top: {
    flex: 0.2,
    backgroundColor: colors.color2,
    borderWidth: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },

  middle: {
    flex: 0.75,
    backgroundColor: "beige",
    borderWidth: 1
  },

  bottom: {
    flex: 0.05,
    backgroundColor: colors.color2,
    borderWidth: 1,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },

  smallText: {
    color: 'white',
    textAlign: 'center'
  },

  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },

  form: {
    
  }
});

export default styles;