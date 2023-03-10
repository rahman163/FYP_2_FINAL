import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, Button} from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image style= {Styles.Image} source={require ('../Images/Logo/P2.png')}/>
    
    <View style={Styles.Text}>
      <Text style = {Styles.Text}>AUTICORE</Text>
    </View>
   
    <View style={Styles.Button}>
      <Button
        title="GET STARTED"
        onPress={() => navigation.navigate("UsersInfo")}
      />
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#0000FF',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
    Image: {
        width: 300,
        height: 350,
        marginTop:90,
        marginLeft:50,
        marginRight:50,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 30,
        backgroundColor: '#727b8d',
    },
    Text: {
        width: 400,
        height: 100,
        paddingTop: 5,
        marginTop:10,
        fontSize: 60,
        fontWeight: 'Bold',
        textAlign: 'center',
        color: 'white',
    },

    Button: {
        width: 240,
        height: 75,
        paddingTop: 20,
        marginTop:50,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },

})