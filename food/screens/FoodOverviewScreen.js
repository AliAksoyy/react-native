import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { FOODS } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ route }) {
  const { categoryId } = route.params;
  const displayFoods = FOODS.filter(
    (food) => food.categoryIds.indexOf(categoryId) >= 0
  );

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
