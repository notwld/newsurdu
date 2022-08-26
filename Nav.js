import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Nav() {
  const navigation = useNavigation();
  return (
    <View style={nav.nav}>
      <Text style={nav.text}>@blurryface</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("News", {
              category: "latest-news",
            })
          }
        >
          <Text style={nav.textli}>Latest News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("News", {
              category: "sports",
            })
          }
        >
          <Text style={nav.textli}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("News", {
              category: "world",
            })
          }
        >
          <Text style={nav.textli}>World</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("News", {
              category: "entertainment",
            })
          }
        >
          <Text style={nav.textli}>Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("News", {
              category: "business",
            })
          }
        >
          <Text style={nav.textli}>Business</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const nav = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    padding: 15,
    backgroundColor: "#800080",
    height: 125,
    justifyContent: "center",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textli: {
    fontSize: 12,
    color: "white",
  },
});
