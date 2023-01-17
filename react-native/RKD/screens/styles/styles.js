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
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  titleFild: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },

  tiContainer: {
    textAlign: 'center',
    margin: 15
  },

  inputFild: {
    height: 50,
    width: 300,
    fontSize: 25,
    textAlign: "center",
    margin: 12,
    borderWidth: 1,
    padding: 10
  },

  button: {
    height: 60,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.color2
  },

  textButton: {
    fontSize: 25,
    textAlign: "center",
    color: 'white'
  }
});

export default styles;