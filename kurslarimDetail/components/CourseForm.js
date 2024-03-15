import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { useCoursesContext } from "../context/CourseContext";
import { getFormattedDate } from "../helper/date";

export default function CourseForm({ navigation, courseId, defaultValue }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
  });

  const { addCourse, updateCourse } = useCoursesContext();

  let isEditing = false;

  if (courseId) {
    isEditing = true;
  }

  function addOrUpdateHandler() {
    const amountIsValid = Number(inputs.amount.value) > 0;
    const dateIsValid = new Date(inputs.date.value) != "Invalid Date";
    const descriptionIsValid = inputs.description.value.length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInput) => {
        return {
          amount: {
            value: currentInput.amount.value,
            isValid: amountIsValid,
          },
          date: { value: currentInput.date.value, isValid: dateIsValid },
          description: {
            value: currentInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    if (isEditing) {
      updateCourse(courseId, {
        amount: Number(inputs.amount.value),
        date: new Date(inputs.date.value),
        description: inputs.description.value,
      });
    } else {
      addCourse({
        amount: Number(inputs.amount.value),
        date: new Date(inputs.date.value),
        description: inputs.description.value,
      });
    }
    navigation.goBack();
  }

  const handleChange = (text, item) => {
    setInputs((current) => ({
      ...current,
      [item]: { value: text, isValid: true },
    }));
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
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          textInputConfig={{
            placeholder: "YYYY-MM--DD",
            maxLength: 10,
            onChangeText: (text) => handleChange(text, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onChangeText: (text) => handleChange(text, "description"),
          value: inputs.description.value,
        }}
      />
      {!inputs.amount.isValid && (
        <Text>Lütfen Tutarı Doğru Formatta Giriniz</Text>
      )}
      {!inputs.date.isValid && (
        <Text>Lütfen Tarihi Doğru Formatta Giriniz</Text>
      )}
      {!inputs.description.isValid && (
        <Text>Lütfen Başlığı Doğru Formatta Giriniz</Text>
      )}
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
