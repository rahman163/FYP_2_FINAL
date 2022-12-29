import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../../firebase/firebase';
//import { async } from '@firebase/util';

const Donation = () => {
    const [fullname, setFullname] = useState("");
    const [idno, setIdNo] = useState("");
    const [accountnumber, setAccountNumber] = useState("");
    const [bankname, setBankName] = useState("");
    const [receiptno, setReceiptNo] = useState("");
    const [paymentdate, setPaymentDate] = useState("");
    const saveData = async () => {
        const docRef = await addDoc(collection(db, 'UsersDonationInfo'), {
            Fullname: fullname,
            IdNo: idno,
            AccountNumber: accountnumber,
            BankName: bankname,
            ReceiptNo: receiptno,
            PaymentDate: paymentdate,
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Thank you for your donation 🙂. A confirmation message will be sent to you within 2/3 business days.");
    }
    return (
        <ScrollView>
            <View style={Styles.container}>
                <Image style={Styles.Image} source={require('../Images/Logo/sdg10.png')} />
                <Text style={Styles.Text}>
                    90% of your donation provides better education for autism children in need.
                </Text>
                <Text style={Styles.Text1}>
                    [10% use for application maintenance]
                </Text>
                <Text style={Styles.Text2}>Choose an account:</Text>
                <Text style={Styles.Text3}> Bank Islam </Text>
                <Text style={Styles.Text3}>Account Number: 1234567890</Text>
                <Text style={Styles.Text3}>--------------</Text>
                <Text style={Styles.Text3}> Am Bank </Text>
                <Text style={Styles.Text3}>Account Number: 1234567890</Text>
                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 22,
                    marginVertical: 15,
                }}>Submit Donation Info 👇</Text>

                <View>
                    <Text style={Styles.Text22}>Full Name: </Text>
                    <TextInput
                        onChangeText={(text) => setFullname(text)}
                        style={{
                            marginVertical: 15,
                            marginLeft: 165,
                            marginRight: 20,
                            height: 35,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'white',
                        }}
                    />

                    <Text style={Styles.Text23}>Identification Number: </Text>
                    <TextInput
                        onChangeText={(text) => setIdNo(text)}
                        style={{
                            marginVertical: 15,
                            marginLeft: 165,
                            marginRight: 20,
                            height: 35,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'white',
                        }}
                    />
                    <Text style={Styles.Text22}>Account Number: </Text>
                    <TextInput
                        onChangeText={(text) => setAccountNumber(text)}
                        style={{
                            marginVertical: 15,
                            marginLeft: 165,
                            marginRight: 20,
                            height: 35,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'white',
                        }}
                    />
                    <Text style={Styles.Text22}>Bank Name: </Text>
                    <TextInput
                        onChangeText={(text) => setBankName(text)}
                        style={{
                            marginVertical: 15,
                            marginLeft: 165,
                            marginRight: 20,
                            height: 35,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'white',
                        }}
                    />
                    <Text style={Styles.Text22}>Receipt Number: </Text>
                    <TextInput
                        onChangeText={(text) => setReceiptNo(text)}
                        style={{
                            marginVertical: 15,
                            marginLeft: 165,
                            marginRight: 20,
                            height: 35,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'white',
                        }}
                    />
                    <Text style={Styles.Text22}>Date of payment: </Text>
                    <TextInput

                        style={{
                            marginVertical: 15,
                            marginLeft: 165,
                            marginRight: 20,
                            height: 35,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'white',
                        }}
                        onChangeText={(text) => setPaymentDate(text)}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: 'gold',
                        height: 40,
                        width: 150,
                        marginLeft: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                    }} onPress={() => saveData()}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default Donation

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c9ff3",
        //alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    Image: {
        width: 250,
        height: 130,
        marginTop: 5,
        marginLeft: 75,
        marginRight: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    Text: {
        fontSize: 15,
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
        fontSize: 16,
        fontWeight: 'Bold',
        textAlign: 'center',
        color: 'red',
    },
    Text22: {
        marginLeft: 10,
        marginBottom: -45,
        fontSize: 15,
        fontWeight: 'Bold',
        color: 'white',
    },
    Text23: {
        marginLeft: 10,
        marginBottom: -45,
        fontSize: 15,
        fontWeight: 'Bold',
        color: 'white',
    },
    Text3: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
        fontWeight: 'Bold',
        textAlign: 'center',
        color: 'white',
    },
})