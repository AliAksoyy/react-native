import { View, Text, Button, FlatList } from "react-native";
import React, { useState } from "react";

const BoxScreen = () => {
  const [colors, setColors] = useState([]);

  function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  const addedColor = () => {
    setColors([...colors, randomColor()]);
  };
  return (
    <View>
      <Button title="Kutu Ekle" onPress={addedColor} />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 150,
                width: 150,
                backgroundColor: item,
                marginVertical: 20,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default BoxScreen;
