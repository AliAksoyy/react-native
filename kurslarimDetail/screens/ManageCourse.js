import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useCoursesContext } from "../context/CourseContext";

export default function ManageCourse({ navigation, route }) {
  const { deleteCourse, addCourse, updateCourse } = useCoursesContext();
  const courseId = route.params?.courseId;
  let isEditing = false;

  if (courseId) {
    isEditing = true;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Kursu Güncelle" : "Kurs Ekle",
    });
  }, [navigation, isEditing]);

  function deletePress() {
    deleteCourse(courseId);
    navigation.goBack();
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

  return (
    <View style={styles.container}>
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
      {isEditing && (
        <View style={styles.deleteContainer}>
          <AntDesign
            onPress={deletePress}
            name="delete"
            size={36}
            color="black"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25 },
  deleteContainer: {
    alignItems: "center",
    borderTopWidth: 2,
    paddingTop: 10,
    borderTopColor: "blue",
    marginTop: 10,
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
