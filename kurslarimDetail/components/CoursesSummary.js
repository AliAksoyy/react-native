import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CoursesSummary({ courses, periodName }) {
  const courseSum = courses.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.left}>{periodName}</Text>
      <Text style={styles.right}>{courseSum + " TL"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  left: { color: "white", fontSize: 12 },
  right: { color: "white", fontSize: 16, fontWeight: "bold" },
});
