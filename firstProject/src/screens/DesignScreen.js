import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
      <View style={{ width: 150, height: 150, backgroundColor: "green" }} />
    </View>
  );
}

const styles = StyleSheet.create({});
