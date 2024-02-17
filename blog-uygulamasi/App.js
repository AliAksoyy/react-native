import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import NewBlogScreen from "./screens/NewBlogScreen";
import React, { useState } from "react";
import DetailScreen from "./screens/DetailScreen";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [blogs, setBlogs] = useState([
    {
      blogHead: "React Native",
      blogContent: "React Native",
      id: Date.now().toString(),
      isEdit: false,
    },
  ]);
  console.log(blogs);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => {
          return {
            headerTitle: "Blog Uygulaması",
            headerRight: () => {
              return (
                <>
                  {route.params?.isEdit ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("AnaSayfa");
                        setBlogs(
                          blogs.map((blog) => {
                            return { ...blog, isEdit: false };
                          })
                        );
                      }}
                    >
                      <AntDesign
                        style={{ fontWeight: "bold" }}
                        name="edit"
                        size={30}
                        color="black"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("NewBlog");
                      }}
                    >
                      <Entypo
                        style={{ fontWeight: "bold" }}
                        name="plus"
                        size={26}
                        color="black"
                      />
                    </TouchableOpacity>
                  )}
                </>
              );
            },
          };
        }}
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
