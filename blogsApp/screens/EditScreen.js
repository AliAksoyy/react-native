import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function EditScreen({ route }) {
  console.log(route.params);
  return (
    <View>
      <Text>EditScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
