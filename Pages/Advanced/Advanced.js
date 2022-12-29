import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

export default function AdvancedH({ navigation }) {
  return (
    <View style={Style.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Earth')}>
        <Image style={Style.Image1}
          source={require('../Images/Logo/Earth.png')}
          //Style={{ resizeMode: 'contain', width: 250 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Science')}>
        <Image style={Style.Image2}
          source={require('../Images/Logo/Science.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Months')}>
        <Image style={Style.Image3}
          source={require('../Images/Logo/Months.png')}
          Style={{ resizeMode: 'contain', width: 250, alignSelf: 'center' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Weeks')}>
        <Image style={Style.Image4}
          source={require('../Images/Logo/Weeks.png')}
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
    marginTop: 10,
  },
  Image2: {
    width: 140,
    height: 160,
    borderRadius: 15,
    marginTop: 10,
  },
  Image3: {
    width: 140,
    height: 160,
    borderRadius: 15,
    marginTop: 10,
  },
  Image4: {
    width: 140,
    height: 160,
    borderRadius: 15,
    marginTop: 10,
  },
});