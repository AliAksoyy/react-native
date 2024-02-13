import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "increment":
      return { ...state, counter: state.counter + payload };

    case "decrement":
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Arttır"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
          // setCounter(counter + 1);
        }}
      />
      <Button
        title="Azalt"
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text>Sayı {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
