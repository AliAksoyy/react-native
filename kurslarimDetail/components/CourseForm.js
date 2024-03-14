import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

export default function CourseForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.inputContainer}>
        <Input
          style={styles.flexAll}
          label="Tutar"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: () => {},
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          textInputConfig={{
            placeholder: "YYYY-MM--DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 40 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexAll: { flex: 1 },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
    color: "blue",
  },
});
