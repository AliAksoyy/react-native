import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";

export default function FoodDetailScreen({ route }) {
  const { id } = route.params;
  const selectedFood = FOODS.find((item) => item.id === id);
  return (
    <ScrollView style={styles.routeContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.innerView}>
        <Text style={styles.subTitle}>{selectedFood.complexity}</Text>
        <Text style={styles.subTitle}> {selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitleInner}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  routeContainer: { marginBottom: 50 },
  image: { width: "100%", height: 300 },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  innerView: { flexDirection: "row", columnGap: 10, justifyContent: "center" },
  subTitle: { color: "red" },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginVertical: 5,
  },

  subTitleInner: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },
});
