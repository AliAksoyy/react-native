import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Arttır"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Azalt"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Sayı {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
