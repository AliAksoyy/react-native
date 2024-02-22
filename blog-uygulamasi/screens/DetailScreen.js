import { StyleSheet, Text, TextInput, View,InteractionManager } from "react-native";
import React, { useState } from "react";

export default function DetailScreen({ route, setBlogs, blogs }) {
  const [changeText, setChangeText] = useState(route.params);

  const id = route.params.id;

  const handleHeadChange = (text, id) => {
    setChangeText({ ...changeText, blogHead: text });
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, blogHead: changeText.blogHead, isEdit: true }
          : blog
      )
    );
  };
  const handleContentChange = (text, id) => {
    setChangeText({ ...changeText, blogContent: text });
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, blogContent: changeText.blogContent, isEdit: true }
          : blog
      )
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Başlık</Text>
        <TextInput
          style={styles.input}
          value={changeText.blogHead}
          onChangeText={(text) => handleHeadChange(text, id)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>İçerik</Text>

        <TextInput
          style={styles.input}
          value={changeText.blogContent}
          onChangeText={(text) => handleContentChange(text, id)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  text: { fontSize: 21 },
  input: { fontSize: 19 },
});
