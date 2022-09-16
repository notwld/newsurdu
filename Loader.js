import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View style={style.loader}>
      <Text style={style.text}>Loading...</Text>
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
    fontSize:30
  },
});
