import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Modal,
} from "react-native";
import React from "react";

export default function CourseInput({ visible }) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/images.png")}
        />
        <TextInput style={styles.textInput} placeholder="Yeni Kurs Ekle" />
        <View style={styles.buttonContainer}>
          <View>
            <Button style={styles.button} title="iptal ekle" color="red" />
          </View>
          <View>
            <Button style={styles.button} title="Ekle" color="blue" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderColor: "pink",
    backgroundColor: "pink",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
  },
});
