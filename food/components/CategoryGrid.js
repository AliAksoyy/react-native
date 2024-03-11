import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function CategoryGrid({ title, color, pressFood }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={pressFood}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={[styles.insideView, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    elevation: 4,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 15,
    borderRadius: 20,
    backgroundColor: "white",
  },
  button: { flex: 1 },
  insideView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
