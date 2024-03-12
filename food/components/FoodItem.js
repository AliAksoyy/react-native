import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("FoodDetail", { id });
  }
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.innerView}>
        <Text style={styles.subTitle}>{complexity}</Text>
        <Text style={styles.subTitle}> {affordability}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#123231",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    borderRadius: 10,
    paddingBottom: 10,
  },
  pressed: {
    opacity: 0.6,
  },
  image: {
    width: "100%",
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: { marginTop: 10, fontSize: 19, fontWeight: "bold" },
  innerView: { flexDirection: "row", columnGap: 10 },
  subTitle: {},
});
