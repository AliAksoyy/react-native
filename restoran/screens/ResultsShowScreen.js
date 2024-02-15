import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);

  const id = route.params.id;

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return;
  }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    height: 180,
    width: 350,
    objectFit: "cover",
    borderRadius: 20,
    marginBottom: 10,
  },
  title: { alignSelf: "center", fontSize: 25, marginVertical: 10 },
  phone: { alignSelf: "center", fontSize: 20 },
  icon: { alignSelf: "center" },
});
