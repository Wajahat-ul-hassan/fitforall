import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";


const Input = (props) => {
    const { icon, ViewStyle, iconStyle, inputStyle, placaeholdertitle } = props
    return (
        <View style={[styles.child_1, ViewStyle]}>
            <Image resizeMode='stretch' style={[styles.icon, iconStyle]} source={icon} />
            <TextInput style={[styles.input, inputStyle]} placeholderTextColor="#707070" placeholder={placaeholdertitle} />
        </View>
    )
}
const styles = StyleSheet.create({
    child_1: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EEECEC",
        borderRadius: 10,
        marginTop: 15,
        height: 55,
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        marginLeft: 10,
        flex: 1,
        color: "#404040",
        fontSize: 13
    },
    icon: {
        width: 24,
        height: 20,
        marginLeft: 10,
    },
})

export default Input;