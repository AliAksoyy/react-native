import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ displayFoods }) {
  function renderFoodItem({ item }) {
    return <FoodItem {...item} />;
  }

  return (
    <View>
      <FlatList
        data={displayFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
