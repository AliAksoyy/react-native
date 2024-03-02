import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

export default function AuthForm({ isLogin }) {
  return (
    <View>
      <Input label="email" />
    </View>
  );
}

const styles = StyleSheet.create({});
