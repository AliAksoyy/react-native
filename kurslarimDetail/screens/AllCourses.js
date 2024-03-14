import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Courses from "../components/Courses";
import { useCoursesContext } from "../context/CourseContext";

export default function AllCourses() {
  const { courses } = useCoursesContext();

  return <Courses courses={courses} coursesPeriod="Hepsi" />;
}

const styles = StyleSheet.create({});
