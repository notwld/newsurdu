import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Nav from './Nav';
import Home from './Home';
import News from './News';


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer >
       <View style={{backgroundColor:'#121212'}}><Nav/></View>
      <Stack.Navigator initialRouteName='News' screenOptions={{
    headerShown: false,
  }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='News' component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


