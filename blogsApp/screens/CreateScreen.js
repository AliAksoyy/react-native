import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useBlogContext } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const [value, setValue] = useState({
    title: "",
    content: "",
  });

  const { addBlog } = useBlogContext();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text}>Başlık Giriniz:</Text>
        <TextInput
          value={value.title}
          onChangeText={(text) => setValue({ ...value, title: text })}
          style={styles.input}
        />
      </View>
      <View style={styles.head}>
        <Text style={styles.text}>İçeriği Giriniz:</Text>
        <TextInput
          style={styles.input}
          value={value.content}
          onChangeText={(text) => setValue({ ...value, content: text })}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Kaydet"
          color="green"
          onPress={() => {
            addBlog({ ...value, id: Date.now() });
            navigation.pop();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", margin: 15 },
  text: { fontSize: 20, fontWeight: "600", marginBottom: 5 },
  input: {
    borderWidth: 1,
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,
    borderRadius: 20,
  },
  button: { marginHorizontal: 15, borderRadius: 10, marginTop: 20 },
});
