import { FlatList } from "react-native";
import React from "react";
import CoursesItem from "./CoursesItem";

export default function CoursesList({ courses }) {
  function renderItem(itemData) {
    return <CoursesItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}
