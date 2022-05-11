import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';

import { Button, Header, Input } from "../../component";

import { pass } from "../../assets/index"

const NewPassword = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="New Password" lefticon />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.continer1}>
                    <Text style={styles.heading}>Fit For All</Text>
                    <Text style={styles.subheading}>Enter Your New Password</Text>
                    <Input iconStyle={styles.icon} icon={pass} placaeholdertitle="New Password" />
                    <Input iconStyle={styles.icon} icon={pass} placaeholdertitle="Confirm Password" />
                    <Button btnViewStyle={styles.btn} title="Reset" btnonpress={() => { props.navigation.navigate("ResetPasswordSuccess") }} />
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
        marginBottom: 20,
    },
    btn: {
        marginTop: 40,
    },
    icon: {
        width: 18,
        height: 20,
    }
})

export default NewPassword
