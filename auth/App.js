import { StyleSheet, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AuthContextProvider, { useAuthContext } from "./context/authContext";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "blueviolet",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "Kullanıcı Giriş",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: "Kullanıcı Kayıt" }}
      />
    </Stack.Navigator>
  );
}
function AfterAuthenticateStack() {
  const { logout } = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "blueviolet",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Anasayfa",
          headerRight: ({ tintColor }) => {
            return (
              <Pressable
                onPress={logout}
                style={({ pressed }) => pressed && styles.pressed}
              >
                <Ionicons name="exit" size={24} color={tintColor} />
              </Pressable>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer>
      {!isAuthenticated ? <NormalStack /> : <AfterAuthenticateStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
  pressed: { opacity: 0.5 },
});
