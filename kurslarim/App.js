import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { useState } from "react";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          onPress={() => setModalIsVisible(true)}
          title="kurs ekle"
          color="red"
        />
        <CourseInput visible={modalIsVisible} />
      </View>
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
});
