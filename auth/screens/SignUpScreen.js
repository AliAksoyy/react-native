import { StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";
import { useAuthContext } from "../context/authContext";

export default function SignUpScreen({ navigation }) {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  const { authenticate, token } = useAuthContext();
  console.log("token", token);
  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
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
