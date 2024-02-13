import { Button, Text, View } from "react-native";
import React from "react";

export default function ColorChange({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={color + " Arttır"}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={color + " Azalt"}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
}
