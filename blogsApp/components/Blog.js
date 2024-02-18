import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function Blog({ route, navigation, title, btn }) {
  const [value, setValue] = useState({
    title: route.params?.title || "",
    content: route.params?.content || "",
  });
  return (
    <>
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
          title={title}
          color="green"
          onPress={() => {
            btn({ ...value, id: Date.now() });
            navigation.pop();
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
