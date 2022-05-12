import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements"

import { class_1, class_2, class_3 } from "../../assets";
import { Header, Button } from "../../component";

const DATA = [
    {
        url: class_1,
        title: 'class 1',
    },
    {
        url: class_2,
        title: 'class 2',
    },
    {
        url: class_3,
        title: 'class 3',
    },
];

const Classess = (props) => {


    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView>
            <Header searchicon={true} lefticon={true} title="Classess" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingBottom: 100 }}>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => { setShowModal(true) }} style={{ marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.plusicon}>+</Text>
                        <Text style={styles.createclassbtn}>Create New Class</Text>
                    </TouchableOpacity>



                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("Trainingvideo" , {htitle:item.title})} style={styles.mein_card}>
                                    <Image resizeMode="cover" style={styles.card_image} source={item.url} />
                                    <View style={styles.card_footer}>
                                        <Text style={styles.card_title}>{item.title}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 60, marginTop: 10 }}>
                                            <Text style={styles.footer_subtitle}>ABC School |</Text>
                                            <Text style={styles.footer_subtitle}>5 videos |</Text>
                                            <Text style={styles.footer_subtitle}>Trainer Carnia</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />


                    {/* MODAL VIEW */}
                    <Modal isVisible={showModal}  >
                        <View style={styles.modelcontiner}>
                            <View style={{ marginHorizontal: 20 }}>
                                <View style={{ marginBottom: 20 , justifyContent:"space-between" , flexDirection:"row"  }}>
                                    <Text style={{ fontSize: 20,  marginTop: 20,fontWeight: "bold", color: "#404040" }}>Create Class</Text>
                                    <TouchableOpacity onPress={() => setShowModal(false)}style={{marginTop:10}} >
                                        <Icon type="antdesign" name="closecircleo" color={"#000"} size={23} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 12, color: "#404040", marginBottom: 5 }}>
                                        Class Name
                                    </Text>
                                    <TextInput style={{ borderWidth: 1, borderColor: "#FF9B70", borderRadius: 12, height: 50, backgroundColor: "#ffffff", paddingLeft: 10, color: "#000" }} />
                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 12, color: "#404040", marginBottom: 5 }}>
                                        School Name
                                    </Text>
                                    <TextInput style={{ borderWidth: 1, borderColor: "#FF9B70", borderRadius: 12, height: 50, backgroundColor: "#ffffff", paddingLeft: 10, color: "#000" }} />
                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 12, color: "#404040", marginBottom: 5 }}>
                                        Trainer Name
                                    </Text>
                                    <TextInput style={{ borderWidth: 1, borderColor: "#FF9B70", borderRadius: 12, height: 50, backgroundColor: "#ffffff", paddingLeft: 10, color: "#000" }} />
                                </View>

                                <Text style={{ color: "#404040", fontSize: 12, marginTop: 10 }}>Upload Videos</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.add_videoBtn}>
                                        <Text style={{ fontSize: 25, color: "#fff" }}>+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.7} style={styles.add_videoBtn}>
                                        <Text style={{ fontSize: 25, color: "#fff" }}>+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.7} style={styles.add_videoBtn}>
                                        <Text style={{ fontSize: 25, color: "#fff" }}>+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.7} style={styles.add_videoBtn}>
                                        <Text style={{ fontSize: 25, color: "#fff" }}>+</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>






                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, marginHorizontal: 25, }}>
                                <Button btnonpress={() => { setShowModal(false) }} btntxtstyle={styles.btntxtstyle} btnViewStyle={styles.create_Btn} title="Cancel" />
                                <Button btnonpress={() => { setShowModal(false) }} btntxtstyle={styles.btntxtstyle} btnViewStyle={styles.cancel_Btn} title="Create" />
                            </View>
                        </View>
                    </Modal>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    plusicon: {
        color: "#FF9B70",
        fontSize: 22,
        marginRight: 10,
    },
    createclassbtn: {
        color: "#707070",
        fontSize: 17,
        fontWeight: "bold"
    },
    mein_card: {
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    card_image: {
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 180,
    },
    card_footer: {
        marginTop: -5,
        backgroundColor: "#EEECEC",
        height: 70,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    card_title: {
        color: "#707070",
        fontSize: 17,
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 5,
    },
    footer_subtitle: {
        color: "#707070",
        fontSize: 12
    },
    modal_View: {
        height: 580,
        borderRadius: 20,
        backgroundColor: "#EAEAEA",
        paddingHorizontal: 20,
    },
    close_Btn: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    },
    modal_title: {
        color: "#404040",
        fontSize: 20,
    },
    inputStyle: {
        borderColor: "#F4A135",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 8,
        color: "#000",
        height: 55,
    },
    create_Btn: {
        flex: 1,
        backgroundColor: "#707070",
        marginHorizontal: 5,
        height: 47,
        borderRadius: 15,
    },
    cancel_Btn: {
        flex: 1,
        backgroundColor: "#FF9B70",
        marginHorizontal: 5,
        height: 47,
        borderRadius: 15,
    },
    btntxtstyle: {
        fontSize: 14
    },
    add_videoBtn: {
        backgroundColor: "#FF9B70",
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    modelcontiner: {
        backgroundColor: "#EAEAEA",
        borderRadius: 15
    }
})

export default Classess;