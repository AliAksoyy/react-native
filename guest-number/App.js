import { StyleSheet, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCount, setGuessCount] = useState(0);

  const sendedNumberHandler = (sendedNumber) => {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  };

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessCount(0);
  }

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        onStartNewGame={startNewGameHandler}
        roundsNumber={guessCount}
        userNumber={userNumber}
      />
    );
  }

  function gameOverHandler(numberOfGuess) {
    setGameIsOver(true);
    setGuessCount(numberOfGuess);
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
