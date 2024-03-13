import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllCourses from "./screens/AllCourses";
import ManageCourse from "./screens/ManageCourse";
import RecentCourses from "./screens/RecentCourses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CourseOverView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentCourses" component={RecentCourses} />
      <Tab.Screen name="AllCourses" component={AllCourses} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
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
