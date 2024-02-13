import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
        <Stack.Screen
          name="KursBilgilerim"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Sayaç" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
