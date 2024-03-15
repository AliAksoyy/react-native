import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({ label, textInputConfig, style, inValid }) {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, inValid && styles.errorLabel]}>{label}</Text>
      <TextInput
        style={[...inputStyles, inValid && styles.error]}
        {...textInputConfig}
      />
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
  error: {
    backgroundColor: "red",
    padding: 6,
    borderRadius: 10,
    fontSize: 18,
  },
  errorLabel: {
    color: "red",
    fontSize: 16,
    marginBottom: 4,
  },
});
