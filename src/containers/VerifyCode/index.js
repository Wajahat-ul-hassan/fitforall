import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';

import OTPInputView from '@twotalltotems/react-native-otp-input'

import { Button, Header, Input } from "../../component";


const VerifyCode = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Verify Code" lefticon />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.continer1}>
                    <Text style={styles.heading}>Fit For All</Text>

                    <Text style={styles.subheading}>Enter 4 digits code that received on
                        your email</Text>
                    <Text style={styles.usergamil}>Gra******nc@gmail.com</Text>

                    <View style={styles.otparea}>
                        <OTPInputView
                            style={styles.otp}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        />
                    </View>

                    <View style={styles.child1}>
                        <Text style={styles.child1_text1}>Resend Code in </Text>
                        <Text style={styles.child1_text2}>10 seconds</Text>
                    </View>

                    <TouchableOpacity style={styles.email_btn} onPress={() => props.navigation.navigate('PasswordReset1')}>
                        <Text style={styles.email_btn_text}>Edit Email</Text>
                    </TouchableOpacity>

                    <Button btnonpress={() => props.navigation.navigate('NewPassword')} btnViewStyle={styles.btn} title="Confirm" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer1: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    heading: {
        fontSize: 30,
        textAlign: "center",
        color: "#4B3F2F",
        fontWeight: "bold",
        marginVertical: 30,
    },
    subheading: {
        color: "#404040",
        textAlign: "center",
        fontSize: 15,
        marginTop: 20,
        paddingHorizontal: 35,
    },
    usergamil: {
        color: "#000",
        fontSize: 15,
        textAlign: "center",
        alignSelf: "center",
        marginTop: 20,
        fontWeight: "bold"
    },
    child1: {
        flexDirection: "row",
        justifyContent: "center",
    },
    child1_text1: {
        color: "#404040",
        fontSize: 14,
    },
    child1_text2: {
        fontSize: 14,
        color: "#404040",
        fontWeight: "bold"
    },
    email_btn: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
    },
    email_btn_text: {
        fontSize: 18,
        color: "#FF9B70",
        fontWeight: 'bold'
    },
    btn: {
        marginTop: 40
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#959595",
    },
    underlineStyleBase: {
        width: 40,
        height: 50,
        borderWidth: 0,
        borderBottomWidth: 3,
        color: "#000",
        fontWeight: "bold",
        fontSize: 30,
    },
    underlineStyleHighLighted: {
        borderColor: "#959595",
    },
    otparea: {
        justifyContent: "center",
        paddingHorizontal: 20
    },
    otp: {
        paddingHorizontal: 20,
        height: 150,
    },

})

export default VerifyCode
