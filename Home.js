import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import News from './News';

export default function Home() {

  return (
    <View style={screen.body}>
     <News category='latest-news' />
    </View>
  )
}

const screen = StyleSheet.create({
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
    }
  });