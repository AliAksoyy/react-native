import { View, FlatList, Button } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "added":
      return { ...state, box: [...state.box, payload] };
    default:
      return state;
  }
};

export default function BoxScreenReducerScreen() {
  const [state, dispatch] = useReducer(reducer, { box: [] });

  function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Button
        title="Kutu Ekle"
        onPress={() => dispatch({ type: "added", payload: randomColor() })}
      />
      <FlatList
        data={state.box}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
                marginVertical: 20,
                padding: 20,
                alignItems: "center",
              }}
            />
          );
        }}
      />
    </View>
  );
}
