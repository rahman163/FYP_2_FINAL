import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Basic({ navigation }) {
  return (
    <View style={Style.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Alphabet')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Alphabet.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Color.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Number')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Number.png')}
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