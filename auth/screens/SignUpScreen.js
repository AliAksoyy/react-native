import { StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";

export default function SignUpScreen({ navigation }) {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      await createUser(email, password);
      setIsAuthanticating(false);
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("kayıt olunamadı", "Lütfen bilgilerinizi kontrol ediniz..");
      setIsAuthanticating(false);
    }
  }

  if (isAuthanticating) {
    return <Loading message="Kullanıcı Oluşturuluyor" />;
  }
  return <AuthContents onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
