import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../context/favoriteContext";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";

export default function FavoritesScreen() {
  const { ids } = useContext(FavoriteContext);
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    setFavoriteList(
      FOODS.filter((item) => {
        return ids.includes(item.id);
      })
    );
  }, [ids]);
  if (favoriteList.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Herhangi bir şey eklemediniz!</Text>
      </View>
    );
  }
  return <FoodList displayFoods={favoriteList} />;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 30 },
});
