import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { useCoursesContext } from "../context/CourseContext";
import { getFormattedDate } from "../helper/date";

export default function CourseForm({ navigation, courseId, defaultValue }) {
  const [inputs, setInputs] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : "",
    date: defaultValue ? getFormattedDate(defaultValue.date) : "",
    description: defaultValue ? defaultValue.description : "",
  });

  const { addCourse, updateCourse } = useCoursesContext();

  let isEditing = false;

  if (courseId) {
    isEditing = true;
  }

  function addOrUpdateHandler() {
    if (isEditing) {
      updateCourse(courseId, {
        description: "Güncellenen Kurs",
        amount: 99,
        date: new Date(),
      });
    } else {
      addCourse({
        description: "Eklenen Kurs",
        amount: 99,
        date: new Date(),
      });
    }
    navigation.goBack();
  }

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
      <View style={styles.buttons}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>İptal et</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View style={styles.addOrDelete}>
            <Text style={styles.addOrDeleteText}>
              {isEditing ? "Güncelle" : "Ekle"}
            </Text>
          </View>
        </Pressable>
      </View>
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
  buttons: { flexDirection: "row", justifyContent: "center" },
  cancel: {
    backgroundColor: "red",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "white",
  },
  addOrDelete: {
    backgroundColor: "blue",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  addOrDeleteText: { color: "white" },
});
