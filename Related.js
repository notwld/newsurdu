import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Related(props) {
  const navigation = useNavigation();
  const data = props.data;
  let random = Math.floor(Math.random() * data.images.length);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("NewsItem", {
            item: data.headlines[random],
            image: data.images[random],
            id: data.links[random],
            index: random,
            data: data,
          })
        }
      >
        <View style={styles.innerContainer}>
          <View style={styles.content}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {data.headlines[random]}
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: data.images[random] }}
              style={{
                width: 65,
                height: 65,
                borderRadius: 15,
                marginLeft: 10,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    paddingVertical: 10,
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
