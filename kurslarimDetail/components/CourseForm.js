import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";

export default function CourseForm() {
  const [inputs, setInputs] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const handleChange = (text, item) => {
    setInputs((current) => ({ ...current, [item]: text }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.inputContainer}>
        <Input
          style={styles.flexAll}
          label="Tutar"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (text) => handleChange(text, "amount"),
            value: inputs.amount,
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          textInputConfig={{
            placeholder: "YYYY-MM--DD",
            maxLength: 10,
            onChangeText: (text) => handleChange(text, "date"),
            value: inputs.date,
          }}
        />
      </View>
      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onChangeText: (text) => handleChange(text, "description"),
          value: inputs.description,
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
