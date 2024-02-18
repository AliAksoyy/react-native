import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Blog from "../components/Blog";
import { useBlogContext } from "../context/BlogContext";

export default function EditScreen({ navigation, route }) {
  const { editBlog } = useBlogContext();
  return (
    <View style={styles.container}>
      <Blog
        navigation={navigation}
        route={route}
        title="Güncelle"
        btn={editBlog}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", margin: 15 },
});
