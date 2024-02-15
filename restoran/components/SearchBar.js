import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={24}
        color="black"
      />
      <TextInput style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
  },
  iconStyle: {},
  inputStyle: {},
});
