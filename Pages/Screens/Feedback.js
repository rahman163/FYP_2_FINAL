import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../../firebase/firebase';
//import { async } from '@firebase/util';

const Feedback = () => {
  const [contentrating, setContentrating] = useState(null);
  const [interfacerating, setInterfacerating] = useState(null);
  const [givecomments, setGivecomments] = useState(null);
  const FeedbackData = async () => {
    const docRef = await addDoc(collection(db, 'Users Feedback'), {
      Contentrating: contentrating,
      Interfacerating: interfacerating,
      Givecomments: givecomments
    });
    console.log("Document written with ID: ", docRef.id);
  }
  return (
    <ScrollView>
      <View style={Styles.container}>
      <Image style={Styles.Image} source={require('../Images/Logo/sdg10.png')} />
        <Text style={Styles.Text}>“Your opinion is important to us.This way we can keep improving our app”</Text>
        <View>
          <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 17,
            marginTop: 15,
            marginVertical: 5,
          }}>Please give your rating based on our Contents</Text>
          <TextInput
            placeholder="Rating 1 to 10"
            //clearButtonMode='always'
            //value={this.state.value}
            onChangeText={(text) => setContentrating(text)}
            style={{
              marginTop: 2,
              marginVertical: 10,
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
          <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 17,
            marginTop: 15,
            marginVertical: 5,
          }}>Please give your rating for our App Interface</Text>
          <TextInput
            placeholder="Rating 1 to 10"
            //clearButtonMode='always'
            //value={this.state.value}
            onChangeText={(text) => setInterfacerating(text)}
            style={{
              marginTop: 2,
              marginVertical: 10,
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
          <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 15,
            fontSize: 17,
            marginVertical: 5,
          }}>Please write comments for future inhancements</Text>
          <TextInput
            placeholder="Comments"
            //clearButtonMode='always'
            //value={this.state.value}
            onChangeText={(text) => setGivecomments(text)}
            style={{
              marginTop: 2,
              marginVertical: 10,
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
          <TouchableOpacity 
          //onPress={()=>this.setSate({value: ''})}
          style={{
              backgroundColor: '#FFD700',
              marginTop: 50,
              height: 50,
              width: 150,
              margin: 20,
              marginLeft: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              }} onPress={() => FeedbackData()}
            >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Feedback

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c9ff3",
    alignItems: 'center',
    justifyContent: 'center',
    //width: '100%',
    //height: '100%',
  },
  Image: {
    width: 300,
    height: 140,
    margin: 5,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderRadius: 4,
    borderWidth: 1,
  },
  Text: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'Bold',
    textAlign: 'center',
    color: 'white',
  },
  Text1: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
    color: 'white',
  },
  Text2: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontWeight: 'Bold',
    textAlign: 'center',
    color: 'red',
  },
  Text3: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontWeight: 'Bold',
    color: 'white',
  },
})