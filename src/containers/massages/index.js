import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from "react-native"
import { profile, Camera, Galary, Voicenotes, Document, Messageimage } from "../../assets";
import { Icon } from 'react-native-elements';
import { Button, Header } from "../../component";


const { width, height } = Dimensions.get("screen")
const Message = (props) => {

    const [showModal, setShowModal] = useState(false);

    const arr = [
        {
            msg: " Hi Karl! How are you?",
            type: "recever",
            time: "05:00 PM"
        },
        {
            msgimg: Messageimage,
            type: "send",
            time: "05:01 PM"
        },
        {
            msg: " Hi Karl! How are you?",
            type: "recever",
            time: "05:02 PM"
        },
        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },
        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },

        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },
        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },
        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },
        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },
        {
            msg: "Messageimage",
            type: "send",
            time: "05:01 PM"
        },
    ]

    const modal = [
        {
            name: "Camera",
            image: Camera
        },
        {
            name: "Mobile Libarary",
            image: Galary
        },
        {
            name: "Vice Note",
            image: Voicenotes
        },
        {
            name: "Documents",
            image: Document
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <View style={styles.message}>

                <View style={styles.iconview}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Icon
                            name='keyboard-backspace'
                            type='material-community'
                            color='white'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.textview}>
                    <Image source={profile} style={styles.headerimg} />
                    <Text numberOfLines={1} style={styles.text}>
                        liam
                    </Text>
                </View>

                <View style={{ width: 30 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                        <View style={{ backgroundColor: "#E6E6E6", width: width * 0.42, height: 1.5 }} />
                        <View style={{}}>
                            <Text style={{ color: "#959595", fontSize: 10 }}>TODAY</Text>
                        </View>
                        <View style={{ backgroundColor: "#E6E6E6", width: width * 0.42, height: 1.5 }} />
                    </View>

                    <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                        {arr.map((val) => {
                            const { msg, time, type, msgimg } = val
                            return (
                                <View style={{ marginBottom: 10, alignItems: type == "send" ? "flex-end" : "flex-start" }}>
                                    <View style={[styles.msgleft, { borderBottomRightRadius: type == "send" ? 0 : 12, borderBottomLeftRadius: type == "recever" ? 0 : 12, paddingHorizontal: msgimg ? 0 : 10, paddingVertical: msgimg ? 0 : 15, overflow: msgimg && "hidden" }]}>
                                        {
                                            msg && <Text style={[{ color: "#000" }, { textAlign: type == "send" ? 'right' : 'left' }]}>
                                                {msg}
                                            </Text>
                                        }
                                        {
                                            msgimg &&
                                            <Image source={msgimg} style={{ height: 150, width: 320, justifyContent: "center" }} />
                                        }
                                    </View>

                                    <Text style={[{ color: "#404040", fontSize: 10, marginTop: 3 }, { textAlign: type == "send" ? "right" : "left" }]}>
                                        {time}
                                    </Text>

                                </View>

                            )
                        })}
                    </View>
                </View>
            </ScrollView>

           



            {showModal ? (
                <>
                    <View style={styles.modelcontiner}>
                        {modal.map((val, ind) => {
                            const { name, image } = val
                            return (
                                <TouchableOpacity>
                                    <View style={[{ flexDirection: "row", paddingHorizontal: 35, height: 60, alignItems: "center" }, { backgroundColor: ind % 2 !== 0 ? "#fff" : "#EEEEEE" }]}>
                                        <Image resizeMode="center" source={image} style={{ height: 25, width: 25 }} />
                                        <Text style={{ color: "#404040", paddingLeft: 20, fontSize: 13 }}>{name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                    <View style={styles.footerarea}>
                        <Button btnonpress={() => { setShowModal(false) }} btnViewStyle={styles.footerbtn1} btntxtstyle={styles.btntext} title="Cancel" />
                    </View>
                </>
            ) : (
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, justifyContent: "space-between", paddingBottom: 10 }}>
                    <View style={styles.plusicon}>
                        <TouchableOpacity onPress={() => setShowModal(true)}>
                            <Icon
                                name='plus'
                                type='entypo'
                                color='#F4A135'
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.reply}>
                        <TouchableOpacity >
                            <Icon
                                name='emotsmile'
                                type='simple-line-icon'
                                color='#959595'
                                size={20}
                            />
                        </TouchableOpacity>
                        <TextInput placeholder="write a reply ...." placeholderTextColor="#B4B3B3" style={{ flex: 1, paddingLeft: 10 }} />
                        <TouchableOpacity >
                            <Icon
                                name='md-send'
                                type='ionicon'
                                color='#FF9B70'
                                size={18}
                                style={{ marginRight: 5 }}
                            />
                        </TouchableOpacity>
                        <View>
                        </View>
                    </View>
                </View>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        flexDirection: "row",
        backgroundColor: "#FF9B70",
        height: 80,
        paddingHorizontal: 20
    },
    iconview: {
        justifyContent: "center",
    },
    textview: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "row"

    },
    text: {
        color: "white",
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: "bold",
        padding: 8,
        textTransform: "capitalize",
        maxWidth: 100
    },
    headerimg: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 1,

    },
    msgleft: {
        backgroundColor: "#E0DEDE",
        borderRadius: 12,
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
        maxWidth: '90%',
    },

    plusicon: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: "#FFCB88",
        backgroundColor: "#ffffff",
        borderWidth: 3,
        justifyContent: "center",
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    reply: {
        justifyContent: "center",
        backgroundColor: "#E3E3E3",
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        borderRadius: 10,
    },
    footerarea: {
        marginBottom: 10
    },
    footerbtn1: {
        borderRadius: 12,
        marginHorizontal: 20,
        height: 50
    },
    modelcontiner: {
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
        marginBottom: 15,
        marginHorizontal: 20,
        justifyContent: "center",
        borderRadius: 12,
        overflow: "hidden",
        paddingTop: 15,
        paddingBottom: 5
    }
})

export default Message;