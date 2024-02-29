import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ComputerGuess({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>{roundNumber}*</Text>
      <Text>{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderStartColor: "yellow",
    borderRadius: 30,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderColor: "yellow",
  },
});
