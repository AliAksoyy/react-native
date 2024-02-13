import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");

  const handleChange = (newValue) => {
    setPassword(newValue);
  };

  return (
    <View style={styles.main}>
      <Text>Sifrenizi Giriniz</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange}
        value={password}
      />
      {password.length < 6 && (
        <Text style={styles.warning}>Şifre en az 6 karakterli olmalıdır</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  warning: {
    fontSize: 10,
    color: "red",
  },
});
