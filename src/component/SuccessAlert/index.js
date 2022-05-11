import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { email, check } from "../../assets/index"
import LottieView from 'lottie-react-native';

const SuccessAlert = (props) => {

    const { message } = props

    return (
        <View>
            <Text style={styles.heading}>Fit For All</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: "center", width: 150, justifyContent: "flex-end", marginTop: 0 }}>
                    <LottieView
                        source={check}
                        autoPlay
                        loop
                        style={{ height: 150, width: 150, marginBottom: 10 }}
                    />
                </View>
            </View>
            <Text style={styles.subheading}>{message}</Text>

        </View>
    )
}

export default SuccessAlert

const styles = StyleSheet.create({

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
        paddingHorizontal: 48,
    },
})