import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContents from "../components/AuthContents";
import { createUser } from "../util/auth";

async function signUpHandler({ email, password }) {
  await createUser(email, password);
}

export default function SignUpScreen() {
  return <AuthContents onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
