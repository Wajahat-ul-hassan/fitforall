import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';
import { profile } from "../../assets"


const Chatcomponent = (props) => {
    const { name, detail, massageTime, onpress, massage, onPressProfile } = props

    return (
        <View style={{ backgroundColor: "#fff", height: 70, marginBottom: 5, justifyContent: "center", borderBottomWidth: 0.5, borderBottomColor: "lightgray" }}>

            <View style={{ flexDirection: "row", marginHorizontal: 20, justifyContent: 'space-between', alignItems: "center" }}>
                <View style={styles.ntifiicon}>
                    <TouchableOpacity style={styles.icon} onPress={onPressProfile}>
                        <Image source={profile} style={{ width: 50, height: 50, borderRadius: 50, borderColor: "#FF9B70", borderWidth: 2 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.notificationtype}>
                    <Text numberOfLines={1} style={styles.ntifiname}>
                        {name}
                    </Text>
                    <Text numberOfLines={1} style={styles.notifidetail}>
                        {detail}
                    </Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.notifitime}>
                        {massageTime}
                    </Text>
                    {massage &&
                        <View style={{ justifyContent: "flex-end", flexDirection: 'row', marginTop: 10, alignItems: 'center', width: 45 }}>
                            <View style={styles.countView}>
                                <Text style={styles.count}>
                                    {massage}
                                </Text>
                            </View>
                        </View>}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ntifiname: {
        color: "black",
        width: 190,
        fontSize: 15,
        fontWeight: "bold",
    },
    notifidetail: {
        color: "#5D5E60",
        fontSize: 13,
        width: 190,
    },
    notifitime: {
        color: "#5D5E60",
        fontSize: 10,
        fontWeight: 'bold'
    },
    ntifiicon: {
        justifyContent: "center",
        alignItems: "center",
    },
    notificationtype: {
        flex: 1,
        marginLeft: 10,
    },
    count: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    countView: {
        backgroundColor: "#FF9B70",
        width: 20,
        height: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        justifyContent: 'center', alignItems: 'flex-end'
    }



})

export default Chatcomponent;