import { StyleSheet, Text, View,StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import News from "./News";
import Tab from "./Tab";
import NewsItem from "./NewsItem";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <View style={{ backgroundColor: "#121212" }}>
      </View>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="News"
          component={News}
          initialParams={{
            category: "latest-news",
          }}
        />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="NewsItem" component={NewsItem} initialParams={{
           item:null,
           image:null,
           index: null,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
