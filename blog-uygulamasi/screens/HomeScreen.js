import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ blogs }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatListContainer}>
              <TouchableOpacity
                style={{
                  flex: 1,
                }}
              >
                <View>
                  <Text style={styles.text}>{item.blogHead}</Text>
                </View>
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <View>
                    <AntDesign name="delete" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: "#dadada",
  },
  flatListContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 21.5,
    fontWeight: "500",
  },
});
