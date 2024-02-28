import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const sendedNumberHandler = (sendedNumber) => {
    setUserNumber(sendedNumber);
  };

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        style={[styles.container]}
        source={require("./assets/bg.jpg")}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backImage: {
    opacity: 0.2,
  },
});
