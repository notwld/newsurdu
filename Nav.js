import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function Nav() {
 
  return (
    <View style={nav.nav}>
      <Text style={nav.text}>@blurryface</Text>
    </View>
     
  )
}

const nav = StyleSheet.create({
  nav: {
    paddingTop:40,
   padding: 15,
    backgroundColor: '#800080',
    height: 100,
    justifyContent: 'center',
    borderBottomEndRadius:15,
    borderBottomStartRadius:15
  },
    text: {
        fontSize: 20,
        // color:'white'
    }
});