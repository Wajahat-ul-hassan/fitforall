import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { Header, Notificationcomponent } from "../../component"
import { Icon } from 'react-native-elements';
import { Notificationbell } from "../../assets";
import Modal from "react-native-modal"

const Notification = () => {
    const [showModal, setShowModal] = useState(false);

    const notifications = [
        {
            iconName: "check-square-o",
            iconType: "font-awesome",
            notificationTitle: "Promotional Announcement",
            notificationTime: "just now",
            iconColor: "#FFD700"
        },
        {
            iconName: "notifications-outline",
            iconType: "ionicon",
            notificationTitle: "New Notification",
            notificationTime: "Today 04:32 PM",
            iconColor: "#0A90FC"
        },
        {
            iconName: "notifications-outline",
            iconType: "ionicon",
            notificationTitle: "New Notification",
            notificationTime: "Yesterday 04:32 PM",
            iconColor: "#0A90FC"
        },
        {
            iconName: "clock-time-eight-outline",
            iconType: "material-community",
            notificationTitle: "Timings Changed",
            notificationTime: "Tue 19 Jan 22, 04:32 PM",
            iconColor: "#000000"
        },
        {
            iconName: "alert-circle",
            iconType: "ionicon",
            notificationTitle: "Use Coupon Code",
            notificationTime: "Tue 19 Jan 22, 04:32 PM",
            iconColor: "#00B642"
        },
        {
            iconName: "check-square-o",
            iconType: "font-awesome",
            notificationTitle: "Promotional Announcement",
            notificationTime: "Tue 19 Jan 22, 04:32 PM",
            iconColor: "#FFD700"
        },
        {
            iconName: "notifications-outline",
            iconType: "ionicon",
            notificationTitle: "New Notification",
            notificationTime: "Tue 19 Jan 22, 04:32 PM",
            iconColor: "#0A90FC"
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <Header title="Notification" lefticon={true} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "#5D5E60", fontSize: 15, fontWeight: "bold" }}>Today</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    {
                        notifications.map((val, ind) => {
                            const { iconName, iconType, onPress, notificationTitle, notificationTime, iconColor } = val
                            return (
                                <Notificationcomponent onPress={() => setShowModal(true)} bgColor={ind % 2 !== 0 ? "white" : "#F1F1F1"} iconColor={iconColor} iconName={iconName} iconType={iconType} notificationTitle={notificationTitle} notificationTime={notificationTime} />
                            )
                        })
                    }
                </View>

                {/* Model area */}
                <Modal isVisible={showModal} >
                    <View style={{backgroundColor: "#fff",padding:10 , borderRadius:15}}>
                        <TouchableOpacity onPress={() => setShowModal(false)} style={{alignSelf:"flex-end"}}>
                            <Icon type="font-awesome" name="close" color={"#707070"} size={23} />
                        </TouchableOpacity>
                        <View style={styles.modelcontiner}>
                            <Text style={styles.modelheader}>New Notification</Text>
                            <Text style={styles.modelsubheading}>Check Out New Exercise in
                                Animated Stories</Text>
                            <Text style={styles.modeloffer}>Get 20 % Off</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    ntifiname: {
        color: "black",
    },
    notifidetail: {
        color: "black"
    },
    notifitime: {
        color: "black",
        marginTop: 10,
    },
    ntifiicon: {
        paddingTop: 20,
    },
    notificationtype: {
        flex: 1,
        marginLeft: 10,
    },
    modelcontiner: {
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        padding: 30
    },
    modelheader: {
        color: "#000000",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    modelsubheading: {
        color: "#404040",
        fontSize: 14,
        width: 230,
        textAlign: "center",
        marginTop: 5
    },
    modeloffer: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFD700",
        textAlign: "center",
        marginTop: 5
    },

})

export default Notification;