import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AbsoluteScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.child1} />
      <View style={styles.child2} />
      <View style={styles.child3} />
      <View style={styles.child4} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#eee",
  },
  child1: {
    position: "absolute",
    width: 100,
    top: 0,
    left: 0,
    bottom: "70%",
    backgroundColor: "red",
  },
  child2: {
    position: "absolute",
    width: 100,
    top: 0,
    right: 0,
    bottom: "70%",
    backgroundColor: "blue",
  },
  child3: {
    position: "absolute",
    width: 100,
    bottom: 0,
    right: 0,
    top: "70%",
    backgroundColor: "yellow",
  },
  child4: {
    position: "absolute",
    width: 100,
    bottom: 0,
    left: 0,
    top: "70%",
    backgroundColor: "green",
  },
});
