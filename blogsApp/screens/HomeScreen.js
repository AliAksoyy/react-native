import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useBlogContext } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { blogs } = useBlogContext();
  console.log(blogs);
  return (
    <View style={styles.main}>
      <FlatList
        data={blogs}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.container}>
              <Text style={styles.text}>{item.title}</Text>
              <AntDesign
                name="delete"
                size={24}
                color="black"
                onPress={() => {}}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                backgroundColor: "#0a0a0a",
                height: 0.5,
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { padding: 10 },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
});
