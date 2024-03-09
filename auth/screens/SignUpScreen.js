import { StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthContents from "../components/AuthContents";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";

export default function SignUpScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    await createUser(email, password);
    setIsAuthanticating(false);
  }

  if (isAuthanticating) {
    return <Loading message="Kullanıcı Oluşturuluyor" />;
  }
  return <AuthContents onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
