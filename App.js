import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import Nav from './Nav';



export default function App() {
  const [news,setNews] = useState([]);

  useEffect(() => {

    fetch('https://newsurdu.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
      setNews(data.data)
    }).catch(err => console.log(err))
  }
  ,[]);

  return (
    <View style={screen.body}>
      <Nav />
      <Text style={screen.heading}>News</Text>
      <ScrollView style={screen.scroll}>
       {news.map((item,index) => {
          return (
            //add scrollview to the view
            <ScrollView key={index} style={screen.container}>
              
              <Text key={index} style={screen.text}>{item}</Text>
             

            </ScrollView>
          )
        }
        )}
    </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const screen = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    height:'100%',
    
  },
  container:{
   margin:12,
   marginBottom:7,
   backgroundColor:'#222121'
   }
  ,
  scoll:{
    height:'100%',
  }
  ,
  text:{
    color:'white',
    padding:25,
    fontSize: 22,
  },
  heading:{
    fontSize:35,
    textAlign:'center',
    padding:20,
    color:'white',
  }
});
