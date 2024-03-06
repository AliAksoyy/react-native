import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin, onSubmit, credentialIsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInValid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword:passwordDontMatch
  } = credentialIsInvalid;

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmEmail,
    });
  }

  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail}
        isInValid={emailIsInValid}
      />
      {!isLogin && (
        <Input
          label="Emaili Doğrula"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, "confirmEmail")}
          value={enteredConfirmEmail}
          isInValid={emailsDontMatch}
        />
      )}
      <Input
        label="Şifre"
        secure
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword}
        isInValid={passwordIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Şifreyi Doğrula"
          secure
          onUpdateValue={updateInput.bind(this, "confirmPassword")}
          value={enteredConfirmPassword}
          isInValid={passwordDontMatch}
        />
      )}
      <View style={styles.buttons}>
        <Button submit={submitHandler}>
          {isLogin ? "Giriş Yap" : "Kaydol"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
});
