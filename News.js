import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

import { useNavigation } from "@react-navigation/native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function News(props) {
  const [refreshing, setRefreshing] = useState(false);
  const category = props.category;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetch(
      `https://newsurdu.herokuapp.com/category/${
        !category ? props.route.params.category : category
      }`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    wait(2000).then(() => setRefreshing(false));
  }, [news]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetch(
        `https://newsurdu.herokuapp.com/category/${
          !category ? props.route.params.category : category
        }`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    });
    return unsubscribe;
  }, [news]);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      {loading ? (
        <Loader />
      ) : (
        news.headlines.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.2}
              onPress={() => {
                navigation.navigate("NewsItem",{
                
                  item: item,
                  image: news.images[index],
                  index: index,
                  id: news.links[index],
                });
              }}
              key={index}
            >
              <View key={index} style={style.news}>
                <Text style={style.description}>{item}</Text>
                <Image
                  source={{ uri: news.images[index] }}
                  style={style.image}
                />
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  body: {
    height: "100%",
  },
  heading: {
    fontSize: 35,
    textAlign: "center",
    padding: 20,
    color: "white",
    fontWeight: "bold",
  },
  news: {
    display: "flex",
    margin: 10,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  description: {
    fontSize: 18,
    color: "black",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginLeft: 10,
  },
});
