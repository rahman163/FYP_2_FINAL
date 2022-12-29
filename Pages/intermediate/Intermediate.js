import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native'

export default function Intermediate({ navigation }) {
  return (
    <View style={Style.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Animals')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Animals.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Vegetables')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Vegetables.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Fruits.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>
    </View>
  )
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a7095",
    alignItems: 'center',
  },
  Image1: {
    width: 140,
    height: 160,
    borderRadius: 20,
    marginTop: 50,
  },

});