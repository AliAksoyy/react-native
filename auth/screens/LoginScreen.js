import { StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import Loading from "../components/Loading";
import { login } from "../util/auth";

export default function LoginScreen({ navigation }) {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthanticating(true);
    await login(email, password);
    setIsAuthanticating(false);
    navigation.navigate("Home");
  }

  if (isAuthanticating) {
    return <Loading message="Kullanıcı Giriş yapıyor" />;
  }
  return <AuthContents onAuthenticate={loginHandler} isLogin />;
}

const styles = StyleSheet.create({});
