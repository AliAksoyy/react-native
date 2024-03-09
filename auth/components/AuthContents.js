import { StyleSheet, View, Alert } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContents({ isLogin, signIn, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialIsInvalid, setCredentialIsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchScreen() {
    if (isLogin) {
      navigation.navigate("SignUp");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credantials) {
    let { confirmEmail, confirmPassword, email, password } = credantials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailIsAreEqual = email === confirmEmail;
    const passwordIsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailIsAreEqual || !passwordIsAreEqual))
    ) {
      Alert.alert("Hops!", "Lütfen girdiğiniz değerleri kontrol ediniz!");
      setCredentialIsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailIsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordIsAreEqual,
      });
      return;
    }
    isLogin ? signIn({ email, password }) : onAuthenticate({ email, password });
  }
  return (
    <View style={styles.container}>
      <AuthForm
        credentialIsInvalid={credentialIsInvalid}
        onSubmit={submitHandler}
        isLogin={isLogin}
      />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blueviolet",
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
