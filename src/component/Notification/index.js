import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';


const Notificationcomponent = (props) => {
    const { iconName, iconType, notificationTitle, notificationTime, iconColor, bgColor, onPress } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ backgroundColor: bgColor, height: 80, justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 20 }} >

                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.ntifiicon}>
                        <TouchableOpacity style={styles.icon}>
                            <Icon
                                name={iconName}
                                type={iconType}
                                color={iconColor}
                                size={28}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.notificationtype}>
                        <Text numberOfLines={1} style={styles.ntifiname}>
                            {notificationTitle}
                        </Text>
                        <Text style={styles.notifidetail}>
                            click here to view
                        </Text>
                    </View>

                </View>
                <View style={styles.time}>
                    <Text style={styles.notifitime}>
                        {notificationTime}
                    </Text>
                </View>
            </View >
        </TouchableOpacity>





    )
}

const styles = StyleSheet.create({
    ntifiname: {
        color: "black",
        width: 190,
        fontSize: 14,
        fontWeight: "bold",

    },
    notifidetail: {
        color: "#5D5E60",
        fontSize: 12,
    },
    notifitime: {
        color: "#5D5E60",
        fontSize: 10
    },
    ntifiicon: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    notificationtype: {
        flex: 1,
        marginLeft: 10,
    },
    time: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }



})

export default Notificationcomponent;