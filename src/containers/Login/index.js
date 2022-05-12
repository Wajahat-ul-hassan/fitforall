import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { sign_in, FB, pin, } from "../../assets/index";
import { Button, Header } from "../../component";
const Login = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Header title="Login" lefticon />

            <View style={styles.container}>
                <Text style={styles.heading}>Fit For All</Text>

                <View style={styles.child_1}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')} style={styles.emailbtn}>
                        <Image resizeMode='contain' style={styles.signinimg} source={sign_in} />
                        <Text style={styles.textbtn}>Sign in with Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.fbbtn}>
                        <Image style={styles.socialicon} source={FB} />
                        <Text style={styles.textbtn}>Sign in with Facebook</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.googlebtn}>
                        <Image resizeMode='contain' style={styles.socialicon2} source={pin} />
                        {/* <MaterialCommunityIcons name="alpha-g-circle" size={30} /> */}
                        <Text style={styles.textbtn}>Sign in with Google</Text>
                    </TouchableOpacity>

                    <Text style={styles.footertext}>Don't have account?</Text>

                    <Button btnonpress={() => props.navigation.navigate('Register')} btnViewStyle={styles.btn} btntxtstyle={styles.btntext} title="Register" />

                </View>
            </View>
        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: "#990000"
    },
    heading: {
        fontSize: 30,
        color: "#4B3F2F",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 40,
    },
    child_1: {
        marginTop: 40,
    },
    emailbtn: {
        width: "100%",
        height: 55,
        paddingHorizontal: 10,
        backgroundColor: "#FF9B70",
        borderRadius: 12,
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    textbtn: {
        color: "#FFFFFF",
        fontSize: 18,
        paddingLeft: 40,
        fontWeight: 'bold'
    },
    fbbtn: {
        width: "100%",
        height: 55,
        paddingHorizontal: 10,
        backgroundColor: "#6F82FE",
        borderRadius: 12,
        marginTop: 15,
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    googlebtn: {
        width: "100%",
        height: 55,
        paddingHorizontal: 10,
        backgroundColor: "#FF6475",
        borderRadius: 12,
        marginTop: 15,
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    regiasterbtn: {
        width: "100%",
        padding: 20,
        backgroundColor: "#FF9B70",
        borderRadius: 20,
        marginTop: 15,
    },
    footertext: {
        fontSize: 15,
        color: "#4B3F2F",
        alignSelf: "center",
        marginTop: 30,
    },
    socialicon: {
        width: 35,
        height: 35,
    },
    socialicon2: {
        width: 32,
        height: 32,
    },
    signinimg: {
        width: 35,
        height: 35,
    },
    btnView: {
        justifyContent: "space-around",
        alignContent: "center",
        textAlign: "center",
        flexDirection: "column"
    },
    btn: {
        backgroundColor: "#FF9B70",
        marginTop: 10,
    },
    btntext: {
        color: "#fff",
        fontSize: 20,
    }
})

export default Login
