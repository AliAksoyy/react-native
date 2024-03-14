import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useCoursesContext } from "../context/CourseContext";
import CourseForm from "../components/CourseForm";

export default function ManageCourse({ navigation, route }) {
  const { deleteCourse, courses } = useCoursesContext();
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

   const selectedCourse = courses.find((course) => course.id === courseId);

  return (
    <View style={styles.container}>
      <CourseForm courseId={courseId} navigation={navigation} defaultValue={selectedCourse} />
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
});
