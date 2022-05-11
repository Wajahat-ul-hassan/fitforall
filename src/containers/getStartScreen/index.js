import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import { group_4 } from "../../assets/index";
import { Button } from "../../component";

const GetStartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ height: 300, justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Image resizeMode='contain' style={styles.img1} source={group_4} />
            </View>
            <View style={styles.heading}>
                <Text style={styles.headingtext}>Welcome to Fit For All</Text>
                <Text style={styles.subheading}>Personalized workouts will help you gain strength,
                    get in better shape and embrace a healthy lifestyle</Text>
            </View>
            <Button btnonpress={() => navigation.navigate('SignIn')} btnViewStyle={styles.btn} title="Get Started" />
            </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    child_1: {
        backgroundColor: "#FF9B70",
        width: 170,
        height: 170,
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 100,
        opacity: 0.5,
        backgroundColor: "#fff"
    },
    heading: {
        marginTop: 30,
        justifyContent: "center",
        alignSelf: "center",
    },
    headingtext: {
        fontSize: 24,
        color: "#707070",
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 110
    },
    subheading: {
        fontSize: 16,
        color: "#707070",
        textAlign: "center",
        marginTop: 18,
        lineHeight: 23,
        marginHorizontal: 55
    },
    img1: {
        height: 300,
        marginLeft: 40
    },
    btn: {
        marginHorizontal: 20,
        marginTop: 70,
    }
})

export default GetStartScreen;
