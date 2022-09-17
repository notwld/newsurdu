import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Related(props) {
  const data = props.data;
  let random = Math.floor(Math.random() * data.images.length);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white",width:200, fontSize: 20 }}>
        {data.headlines[random]}
      </Text>
      <Image
        source={{ uri: data.images[random] }}
        style={{ width: 65, height: 65, borderRadius: 15, marginLeft: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    }
});
