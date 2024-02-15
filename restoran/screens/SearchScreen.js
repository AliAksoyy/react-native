import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useresults from "../hooks/useresults";

export default function SearchScreen() {
  const [searchApi, results] = useresults();

  return (
    <View>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({});
