import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endModal = () => {
    setModalIsVisible(false);
  };
  const addCourse = (courseTitle) => {
    setCourses((course) => [
      ...course,
      { tect: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          <Button onPress={startModal} title="kurs ekle" color="red" />
          <CourseInput
            visible={modalIsVisible}
            onAddCourse={addCourse}
            onCancel={endModal}
          />
          <View>
            <FlatList
              data={courses}
              renderItem={({ item }) => {
                return (
                  <View style={styles.courseItem}>
                    <Text style={styles.courseText}>{item.tect}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  courseItem: { backgroundColor: "#ccc", margin: 8, borderRadius: 5 },
  courseText: { padding: 8, color: "#fff" },
});
