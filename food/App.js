import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "lightblue" },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: "Tüm Kategoriler" }}
        />
        <Stack.Screen name="FoodOverView" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
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
