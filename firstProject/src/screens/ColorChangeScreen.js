import { View } from "react-native";
import React, { useReducer } from "react";
import ColorChange from "../../components/ColorChange";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "changeRed":
      return state.red > 255 || state.red < 0
        ? state
        : { ...state, red: state.red + payload };

    case "changeBlue":
      return state.blue > 255 || state.blue < 0
        ? state
        : { ...state, blue: state.blue + payload };

    case "changeGreen":
      return state.green > 255 || state.green < 0
        ? state
        : { ...state, green: state.green + payload };
    default:
      return state;
  }
};

export default function ColorChangeScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorChange
        color="Kırmızı"
        onIncrease={() => {
          dispatch({ type: "changeRed", payload: 20 });
        }}
        onDecrease={() => {
          dispatch({ type: "changeRed", payload: -20 });
        }}
      />
      <ColorChange
        color="Mavi"
        onIncrease={() => {
          dispatch({ type: "changeBlue", payload: 20 });
        }}
        onDecrease={() => {
          dispatch({ type: "changeBlue", payload: -20 });
        }}
      />
      <ColorChange
        color="Yeşil"
        onIncrease={() => {
          dispatch({ type: "changeGreen", payload: 20 });
        }}
        onDecrease={() => {
          dispatch({ type: "changeGreen", payload: -20 });
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
}
