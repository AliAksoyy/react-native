import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteContext } from "../context/favoriteContext";

export default function FoodDetailScreen({ navigation, route }) {
  const { id } = route.params;
  const selectedFood = FOODS.find((item) => item.id === id);

  const { ids, removeFavorite, addFavorite } = useContext(FavoriteContext);

  const foodFavorite = ids.includes(id);

  const handlePress = () => {};

  const changeFavorite = () => {
    if (foodFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => pressed && styles.opacity}
          >
            <Ionicons
              name={foodFavorite ? "star" : "star-outline"}
              size={24}
              color="white"
              onPress={changeFavorite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);
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
  opacity: { opacity: 0.5 },
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
