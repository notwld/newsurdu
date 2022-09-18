import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Loader from "./Loader";
import Related from "./Related";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function NewsItem(props) {
  const item = props.route.params.item;
  let image = props.route.params.image;
  const index = props.route.params.index;
  image = image.toString();

  const navigation = useNavigation();

  const [loading, setLoading] = React.useState(true);

  const fetchDetails = async () => {
    await fetch(
      `https://newsurdu.herokuapp.com/fetch/${props.route.params.id}`,
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
        setDetails(data.details);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const [details, setDetails] = React.useState([]);
  React.useEffect(() => {
    fetchDetails();
  }, [item, image]);

  console.log(details.details);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ position: "absolute", zIndex: 1, top: 10, left: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={30}
          color={"white"}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
        <View>
          <Text
            style={{
              paddingHorizontal: 15,
              paddingTop: 15,
              paddingBottom: 0,
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            {item}
          </Text>
          {loading ? (
            <Loader />
          ) : (
            details.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{ paddingHorizontal: 15, paddingVertical: 10 }}
                >
                  <Text
                    style={{ color: "white", fontSize: 18, textAlign: "right" }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })
          )}
          <View style={styles.more}>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              More Like This
            </Text>
            <Related data={props.route.params.data} />
            <Related data={props.route.params.data} />
            <Related data={props.route.params.data} />
          </View>
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
  more: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
});
