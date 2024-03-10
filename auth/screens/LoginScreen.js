import { StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import Loading from "../components/Loading";
import { login } from "../util/auth";

export default function LoginScreen({ navigation }) {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      await login(email, password);
      setIsAuthanticating(false);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("giriş yapılamadı", "Lütfen bilgilerinizi kontrol ediniz..");
      setIsAuthanticating(false);
    }
  }

  if (isAuthanticating) {
    return <Loading message="Kullanıcı Giriş yapıyor" />;
  }
  return <AuthContents onAuthenticate={loginHandler} isLogin />;
}

const styles = StyleSheet.create({});
