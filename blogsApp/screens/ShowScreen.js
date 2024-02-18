import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function ShowScreen({ route }) {
  console.log(route);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Başlık</Text>
        <TextInput value={route.params.title} style={styles.input} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>İçerik</Text>
        <TextInput value={route.params.content} style={styles.input} />
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
