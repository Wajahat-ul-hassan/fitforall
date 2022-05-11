import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import { Button, Header, Input, SuccessAlert } from "../../component";
import { email } from "../../assets/index"

const EmailVerifySuccess = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Header title="Password Reset" lefticon={true} />
            <View style={styles.continer1}>
                <SuccessAlert message="Password Reset code has been sent
                on your registered email"/>
                <Button btnonpress={() => props.navigation.navigate('VerifyCode')} btnViewStyle={styles.btn} title="Enter Code" />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer1: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    btn: {
        marginTop: 30,
    },
    emailicon: {
        width: 25,
        height: 18,
    },
})

export default EmailVerifySuccess;
