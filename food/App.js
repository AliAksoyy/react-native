import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Tüm Kategoriler",
          drawerIcon: () => {
            return <Ionicons name="list" size={18} color="blue" />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          title: "Favoriler",
          drawerIcon: () => {
            return <AntDesign name="star" size={18} color="blue" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
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
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FoodOverView" component={FoodOverviewScreen} />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetailScreen}
          options={{ title: "İçerik" }}
        />
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
