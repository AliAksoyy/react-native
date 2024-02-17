import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Blog Uygulaması",
          headerRight: () => {
            return (
              <TouchableOpacity>
                <AntDesign
                  style={{ fontWeight: "bold" }}
                  name="plus"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            );
          },
        }}
      >
        <Stack.Screen name="AnaSyafa" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
