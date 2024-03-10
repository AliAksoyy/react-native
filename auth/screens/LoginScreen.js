import { StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import Loading from "../components/Loading";
import { login } from "../util/auth";
import { useAuthContext } from "../context/authContext";

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const { authenticate, token } = useAuthContext();

  async function loginHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      const token = await login(email, password);
      authenticate(token);
      setIsAuthanticating(false);
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
