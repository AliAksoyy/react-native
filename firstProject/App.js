import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.containers}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  containers: {
    flex: 5,
    backgroundColor: "#00f",
    alignItems: "center",
    justifyContent: "center",
  },
});
