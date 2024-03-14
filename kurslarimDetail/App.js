import { Pressable, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllCourses from "./screens/AllCourses";
import ManageCourse from "./screens/ManageCourse";
import RecentCourses from "./screens/RecentCourses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CoursesProvider from "./context/CourseContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CourseOverView = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "pink" },
        tabBarActiveTintColor: "darkblue",
        headerRight: () => {
          return (
            <Pressable
              onPress={() => navigation.navigate("ManageCourse")}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </Pressable>
          );
        },
      })}
    >
      <Tab.Screen
        name="RecentCourses"
        component={RecentCourses}
        options={{
          title: "Yakın Zamanda Kaydolunanlar",
          tabBarLabel: "Yakın Zamanda",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AllCourses"
        component={AllCourses}
        options={{
          title: "Tüm Kurslar",
          tabBarLabel: "Tüm Kurslar",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="list" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <CoursesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CourseOverView"
            component={CourseOverView}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageCourse" component={ManageCourse} />
        </Stack.Navigator>
      </NavigationContainer>
    </CoursesProvider>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: { opacity: 0.5 },
});
