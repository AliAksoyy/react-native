import { StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import { signInFireBase } from "../util/auth";
import Loading from "../components/Loading";

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleSign = async ({ email, password }) => {
    setLoading(true);
    await signInFireBase(email, password);
    setLoading(false);
    navigation.navigate("Home");
  };

  if (loading) {
    <Loading message="Giriş Yapılıyor.." />;
  }
  return <AuthContents signIn={handleSign} isLogin />;
}

const styles = StyleSheet.create({});
