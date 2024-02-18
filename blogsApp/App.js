import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import EditScreen from "./screens/EditScreen";
import CreateScreen from "./screens/CreateScreen";
import ShowScreen from "./screens/ShowScreen";
import { BlogProvider } from "./context/BlogContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "s" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation, route }) => {}}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
