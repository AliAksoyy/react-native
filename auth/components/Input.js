import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({ label }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({});
