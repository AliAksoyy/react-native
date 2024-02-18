import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useBlogContext } from "../context/BlogContext";

export default function HomeScreen() {
  const value = useBlogContext();
  return (
    <View>
      <Text>HomeScreen {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
