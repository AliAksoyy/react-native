import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({ label, textInputConfig, style }) {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10, marginHorizontal: 4 },
  label: { fontSize: 16, color: "blue", marginBottom: 4 },
  input: {
    backgroundColor: "pink",
    padding: 6,
    borderRadius: 10,
    fontSize: 18,
  },
  multiline: { minHeight: 100, textAlignVertical: "top" },
});
