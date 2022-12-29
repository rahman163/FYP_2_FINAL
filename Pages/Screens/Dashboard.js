import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Dashboard({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.Image} source={require('../Images/Logo/P2.png')} />

      <TouchableOpacity onPress={() => navigation.navigate('Basic')}>
        <Image style={Styles.Image1}
          source={require('../Images/Icons/Icons/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Intermediate')}>
        <Image style={Styles.Image1}
          source={require('../Images/Icons/Icons/2.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Advanced')}>
        <Image style={Styles.Image1}
          source={require('../Images/Icons/Icons/3.png')}
        />
      </TouchableOpacity>

      <View style={Styles.ButtonTogether}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Video')}>
          <Image style={Styles.Image2}
            source={require('../Images/Icons/Icons/5.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
          <Image style={Styles.Image2}
            source={require('../Images/Icons/Icons/4.png')}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a7095",
    alignItems: 'center',
  },
  Image: {
    width: 350,
    height: 250,
    marginTop: 50,
  },
  Image1: {
    width: 220,
    height: 70,
    marginTop: 30,
  },
  Image2: {
    width: 220,
    height: 100,
  },
  // Button1: {
  //   paddingTop: 40,
  //   paddingVertical: 30,
  //   paddingHorizontal: 40,
  //   borderRadius: 10,
  //   elevation: 10,
  // },
  // Button2: {
  //   paddingTop: 40,
  //   marginTop: 5,
  //   paddingVertical: 30,
  //   paddingHorizontal: 40,
  //   borderRadius: 10,
  //   elevation: 10,
  // },

  // Button3: {
  //   paddingTop: 40,
  //   marginTop: 5,
  //   paddingVertical: 30,
  //   paddingHorizontal: 40,
  //   borderRadius: 10,
  //   elevation: 10,
  // },
  // Button4: {
  //   paddingTop: 50,
  //   marginTop: 5,
  //   paddingVertical: 30,
  //   paddingHorizontal: 40,
  //   borderRadius: 10,
  //   elevation: 10,
  //   marginLeft: 200,
  // },
  // Button5: {
  //   paddingVertical: 30,
  //   paddingHorizontal: 40,
  //   borderRadius: 10,
  //   elevation: 10,
  //   marginRight: 200,
  //   marginBottom: 10,
  // },

  ButtonTogether: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
})