import { StyleSheet, View } from "react-native";
import React from "react";
import { useBlogContext } from "../context/BlogContext";
import Blog from "../components/Blog";

export default function CreateScreen({ navigation, route }) {
  const { addBlog } = useBlogContext();
  return (
    <View style={styles.container}>
      <Blog
        route={route}
        navigation={navigation}
        title="Kaydet"
        btn={addBlog}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", margin: 15 },
});
