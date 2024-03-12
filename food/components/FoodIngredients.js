import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodIngredients({ data }) {
  return data.map((item, i) => (
    <View key={i}>
      <Text>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({});
