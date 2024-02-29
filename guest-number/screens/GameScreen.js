import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateNumber(min, max, exclude) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      return randomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Hadi Ordan", "Yanlış olduğunu bile bile basıyorsun", [
        { text: "Tamam", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı üstünde mi ?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={24} color={"white"} />
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="plus" size={24} color={"white"} />
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginBottom: 15,
  },
});
