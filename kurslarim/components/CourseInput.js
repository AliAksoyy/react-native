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
  inputContainer: {},
  image: {},
  textInput: {},
  buttonContainer: {},
  button: {},
});
