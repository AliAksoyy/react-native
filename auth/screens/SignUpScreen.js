import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContents from "../components/AuthContents";
import { createUser } from "../util/auth";

export default function SignUpScreen() {
  async function signUpHandler({ email, password }) {
    let a = await createUser(email, password);
    console.log(a);
  }

  return <AuthContents onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
