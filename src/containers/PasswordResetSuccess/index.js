import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import { Button, Header, Input } from "../../component";
import { email } from "../../assets/index"

const index = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Password Reset" lefticon={true} />
            <ScrollView>

                <View style={styles.continer1}>
                    <Text style={styles.heading}>Fit For All</Text>
                    <Image resizeMode='stretch' style={{width: 100, height: 100}} source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif'}} />
                    <Text style={styles.subheading}>Password Reset code has been sent
                        on your registered email</Text>
                    <Button btnViewStyle={styles.btn} title="Enter Code" />
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
        marginTop: 20,
    },

    subheading: {
        color: "#404040",
        textAlign: "center",
        fontSize: 15,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    btn: {
        marginTop: 20,
    },
    emailicon: {
        width: 25,
        height: 18,
    },
})

export default index;
