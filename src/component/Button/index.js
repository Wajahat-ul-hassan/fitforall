import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Button = (props) => {
    const { title, btnViewStyle, btntxtstyle, btnonpress } = props
    return (
        <TouchableOpacity onPress={btnonpress} style={[styles.btnview, btnViewStyle]}>

            <Text style={[styles.btntxt, btntxtstyle]}>
                {title}
            </Text>

        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    btnview: {
        backgroundColor: "#FF9B70",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btntxt: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "white"
    }
})

export default Button;