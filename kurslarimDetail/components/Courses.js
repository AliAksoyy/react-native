import { StyleSheet, View } from "react-native";
import React from "react";
import CoursesSummary from "./CoursesSummary";
import CoursesList from "./CoursesList";

export default function Courses({ courses, coursesPeriod }) {
  return (
    <View style={styles.container}>
      <CoursesSummary courses={courses} periodName={coursesPeriod} />
      <CoursesList courses={courses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
});
