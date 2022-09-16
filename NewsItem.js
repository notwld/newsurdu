import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NewsItem(props) {
  const item = props.route.params.item;
  let image = props.route.params.image;
  const index = props.route.params.index;
  image = image.toString();
  const fetchDetails = async () => {
    await fetch(`https://newsurdu.herokuapp.com/fetch/${props.route.params.id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            setDetails(data.details);
        })
        .catch((err) => console.log(err));
  }
  const [details, setDetails] = React.useState([]);
    React.useEffect(() => {
        fetchDetails();
    }, []);


    console.log(details.details);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.item}>
     <Image source={{uri: image}} style={{width: "100%", height: 300}} />
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "right" }}>
          {item}
        </Text>
        {details.map((item, index) => {
            return (
                <View key={index} style={{paddingHorizontal:10,paddingVertical:10}}>
                <Text style={{ color: "white", fontSize: 15, textAlign: "right" }}>
                    {item}
                </Text>
                </View>
            );
        }
        )}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "black",
  },
});
