import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

const CoursesInformation = () => {
  return (
    <ScrollView>
      <Information
        title="Angular Eğitimi"
        imageSource={require("../../assets/angular.png")}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="Bootstrap5 Eğitimi"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Kapsamlı Bootstrap Eğitimi"
      />
      <Information
        title="C Programlama Eğitimi"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamlı C Programlama Eğitimi"
      />
    </ScrollView>
  );
};

export default CoursesInformation;

const styles = StyleSheet.create({});
