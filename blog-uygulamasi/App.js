import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import NewBlogScreen from "./screens/NewBlogScreen";
import React, { useState } from "react";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
  const [blogs, setBlogs] = useState([
    {
      blogHead: "React Native",
      blogContent: "React Native",
      id: Date.now().toString(),
      isEdit: false,
    },
  ]);
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
        <Stack.Screen name="AnaSayfa">
          {(props) => (
            <HomeScreen {...props} blogs={blogs} setBlogs={setBlogs} />
          )}
        </Stack.Screen>
        <Stack.Screen name="NewBlog">
          {(props) => <NewBlogScreen {...props} setBlogs={setBlogs} />}
        </Stack.Screen>
        <Stack.Screen name="Content">
          {(props) => (
            <DetailScreen {...props} setBlogs={setBlogs} blogs={blogs} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
