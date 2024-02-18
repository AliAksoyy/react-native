import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import EditScreen from "./screens/EditScreen";
import CreateScreen from "./screens/CreateScreen";
import ShowScreen from "./screens/ShowScreen";
import { BlogProvider } from "./context/BlogContext";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "BlogUygulamsı" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation, route }) => ({
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                  >
                    <Entypo
                      style={{ fontWeight: "bold" }}
                      name="plus"
                      size={26}
                      color="black"
                    />
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen
            name="Show"
            options={({ navigation, route }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Edit", route.params)}
                    >
                      <AntDesign
                        style={{ fontWeight: "bold" }}
                        name="edit"
                        size={30}
                        color="black"
                      />
                    </TouchableOpacity>
                  );
                },
              };
            }}
            component={ShowScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
