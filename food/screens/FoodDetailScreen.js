import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";

export default function FoodDetailScreen({ route }) {
  const { id } = route.params;
  const selectedFood = FOODS.find((item) => item.id === id);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <View style={styles.innerView}>
        <Text style={styles.subTitle}>{selectedFood.complexity}</Text>
        <Text style={styles.subTitle}> {selectedFood.affordability}</Text>
      </View>
      <View>
        <View>
          <Text>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  title: { marginTop: 10, fontSize: 19, fontWeight: "bold" },
  innerView: { flexDirection: "row", columnGap: 10 },
  subTitle: {},
});
