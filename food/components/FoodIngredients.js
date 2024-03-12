import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodIngredients({ data }) {
  return data.map((item, i) => (
    <View style={styles.container} key={i}>
      <Text style={styles.title}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 4,
  },

  title: {
    textAlign: "center",
  },
});
