import { StyleSheet, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ navigation, route }) {
  const { categoryId } = route.params;
  const displayFoods = FOODS.filter(
    (food) => food.categoryIds.indexOf(categoryId) >= 0
  );
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

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
