import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View style={style.loader}>
      <Image
        source={require("./assets/loader.gif")}
        style={{ width: 25, height: 25 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
