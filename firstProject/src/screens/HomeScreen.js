import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate("Kurslarım")}
      />
      <Button
        title="KursBilgilerim"
        onPress={() => navigation.navigate("KursBilgilerim")}
      />
      <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate("Sayaç")}
      />
      <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate("Kutu")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
