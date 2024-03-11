import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FOODS } from "../data/dummy-data";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
