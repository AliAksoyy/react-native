import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const CoursesScreen = () => {
  const courses = [
    { name: "Angular", id: 1 },
    { name: "React JS", id: 2 },
    { name: "C#", id: 3 },
    { name: "C Programlama", id: 4 },
    { name: "Bootstrap", id: 5 },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text style={styles.content}>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: "yellow",
    marginVertical: 10,
    padding: 20,
  },
});

export default CoursesScreen;
