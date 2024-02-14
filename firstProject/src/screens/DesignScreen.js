import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainTextOne}>1</Text>
      {/* <Text style={styles.mainTextTwo}>2</Text>
      <Text style={styles.mainTextThree}>3</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    borderRadius: 20,
    height: 400,
    // flexDirection: "row",
  },
  mainTextOne: {
    // flex: 4,
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    padding: 20,
    borderRadius: 20,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    // alignSelf: "flex-start",
  },
  //   mainTextTwo: {
  //     // flex: 5,
  //     borderWidth: 1,
  //     borderColor: "red",
  //     margin: 10,
  //     padding: 20,
  //     borderRadius: 20,
  //     top: 10,
  //     left: 10,
  //   },
  //   mainTextThree: {
  //     // flex: 1,
  //     borderWidth: 1,
  //     borderColor: "red",
  //     margin: 10,
  //     padding: 20,
  //     borderRadius: 20,
  //   },
});
