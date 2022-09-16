import {
  findNodeHandle,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import News from "./News";

const { width, height } = Dimensions.get("screen");

const NavItem = React.forwardRef(({ item, key, onPressItem }, ref) => {
  return (
    <TouchableOpacity onPress={onPressItem}>
      <View ref={ref}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
            fontSize:12
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({ measures, scrollX, data }) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const transformX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: indicatorWidth,
        backgroundColor: "white",
        bottom: -10,
        left: 0,
        transform: [
          {
            translateX: transformX,
          },
        ],
      }}
    />
  );
};

const Nav = ({ scrollX, data, onPressItem }) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    let m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);
  return (
    <View style={{ position: "absolute", top: 10, width }}>
      <Text style={{ color: "white", fontSize: 56, fontWeight: "bold" , paddingHorizontal:10,paddingBottom:5 }}>
        NewsUrdu
      </Text>
      <View
        ref={containerRef}
        style={{
          justifyContent: "space-evenly",
          flex: 1,
          flexDirection: "row",
        }}
      >
        {data.map((item, index) => {
          return (
            <NavItem
              item={item}
              key={item.id}
              ref={item.ref}
              onPressItem={() => onPressItem(index)}
            />
          );
        })}
      </View>
       
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} data={data} />
      )}
       
    </View>
  );
};

export default function Tab() {
  

  const [data, setData] = React.useState([
    {
      id: 1,
      image: require("./assets/latest.jpg"),
      name: "Latest",
      category:'latest-news',
      ref: React.createRef(),
    },
    {
      id: 2,
      image: require("./assets/sports.jpg"),
      name: "Sports",
      category:'sports',
      ref: React.createRef(),
    },
    {
      id: 3,
      image: require("./assets/world.jpg"),
      name: "World",
      category:'world',
      ref: React.createRef(),
    },
    {
      id: 4,
      image: require("./assets/entertainment2.jpg"),
      name: "Entertainment",
      category:'entertainment',
      ref: React.createRef(),
    },
    {
      id: 5,
      image: require("./assets/business.jpg"),
      name: "Business",
      category:'business',
      ref: React.createRef(),
    },
  ]);



  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const onPressItem = React.useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });

  return (
    <View>
      <Animated.FlatList
        ref={ref}
        data={data}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
           <ImageBackground source={item.image} style={{width,height,resizeMode:"cover"}}>
            <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.3)" },
                ]}
              ></View>
             <View
              style={{
                width,
                height,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
             
              <View style={{width,flexGrow:1,marginTop:120,paddingBottom:20}}>
                <News category={item.category} />
              </View>
            </View>
        </ImageBackground>
          );
        }}
      />
      <Nav scrollX={scrollX} data={data} onPressItem={onPressItem} />
    </View>
  );
}

const styles = StyleSheet.create({});
