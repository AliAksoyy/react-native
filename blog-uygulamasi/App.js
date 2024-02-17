import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import NewBlogScreen from "./screens/NewBlogScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: "Blog Uygulaması",
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("NewBlog")}>
                <AntDesign
                  style={{ fontWeight: "bold" }}
                  name="plus"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            );
          },
        })}
      >
        <Stack.Group screenOptions={({ navigation }) => ({})}>
          <Stack.Screen name="AnaSyafa" component={HomeScreen} />
          <Stack.Screen name="NewBlog" component={NewBlogScreen} />
        </Stack.Group>
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
