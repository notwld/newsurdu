import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React,{useEffect,useState} from "react";
import Loader from "./Loader";

export default function News(props) {
  const category = props.category
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://newsurdu.herokuapp.com/category/${!category?props.route.params.category:category}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      setNews(data);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }, [news]);
  return (
    <View style={style.body}>
      <Text style={style.heading}>{props.category || props.route.params.category}</Text>
    <ScrollView>
      {loading?<Loader/>:news.headlines.map((item, index) => {
        return (
          <View key={index} style={style.news}>
            <Text style={style.description}>{item}</Text>
            <Image source={{ uri: news.images[index] }} style={style.image} />
          </View>
        );
      })}
    </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    height: '100%',	
    
  },
  heading:{
    fontSize:35,
    textAlign:'center',
    padding:20,
    color:'white',
    fontWeight:'bold'
  },
  news: {
    display: "flex",
    margin: 10,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "black",
    borderRadius: 15,
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  description: {
    fontSize: 18,
    color: "white",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginLeft: 10,
  },
});
