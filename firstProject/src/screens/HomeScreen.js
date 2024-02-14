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
        onPress={() => navigation.navigate("Kutu Uygulaması")}
      />
      <Button
        title="Kutu Reducer Uygulaması"
        onPress={() => navigation.navigate("Kutu Reducer Uygulaması")}
      />
      <Button
        title="Renk Degistir"
        onPress={() => navigation.navigate("Renk Degistir")}
      />
      <Button
        title="Sifre Ekranı"
        onPress={() => navigation.navigate("Sifre Ekranı")}
      />
      <Button
        title="Design Ekranı"
        onPress={() => navigation.navigate("Design Ekranı")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
