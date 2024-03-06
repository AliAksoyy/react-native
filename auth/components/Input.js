import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onUpdateValue,
  value,
  secure,
  isInValid,
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isInValid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInValid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  label: {
    color: "white",
    marginBottom: 3,
  },
  input: {
    backgroundColor: "pink",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 16,
  },
  labelInvalid: {
    color: "red",
  },
  inputInvalid: {
    backgroundColor: "red",
  },
});
