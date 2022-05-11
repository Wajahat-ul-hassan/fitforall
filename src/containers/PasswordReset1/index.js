import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Button, Header, Input } from "../../component";
import { email } from "../../assets"

const PasswordReset1 = (props) => {
    return (
        <View style={{ flex: 1 }}>


            <SafeAreaView >
                <Header title="Password Reset" lefticon={true} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.continer1}>
                        <Text style={styles.heading}>Fit For All</Text>
                        <Text style={styles.subheading}>Enter your email to recover password</Text>
                        <Input iconStyle={styles.emailicon} icon={email} placaeholdertitle="Email" />
                        <Button btnonpress={() => props.navigation.navigate('EmailVerifySuccess')} btnViewStyle={styles.btn} title="Confirm" />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
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
        marginBottom: 10,
    },
    btn: {
        marginTop: 40,
    },
    emailicon: {
        width: 25,
        height: 18,
    },
})

export default PasswordReset1;
