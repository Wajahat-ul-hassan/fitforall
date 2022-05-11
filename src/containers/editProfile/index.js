import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TextInput, InputAccessoryView } from "react-native"
import { Header, Button } from "../../component"
import { profile } from "../../assets"
import { Icon } from 'react-native-elements';
import Modal from "react-native-modal";

const Editprofile = (props) => {

    const [showModal, setShowModal] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header title="Edit Profile" lefticon={true} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileheader}>
                    <View style={{ height: 100, width: 100 }}>
                        <Image source={profile} style={{ height: 100, width: 100, borderRadius: 90, borderWidth: 4, borderColor: "#FF9B70" }} />

                    </View>
                    <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: "#FF9B70", borderRadius: 90, position: "relative", backgroundColor: "#fff", top: -25, left: 30 }}>
                        <Icon
                            name='camerao'
                            type='antdesign'
                            color='#FF9B70'
                            size={13}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: "#707070", fontSize: 16, marginTop: -20, textTransform: 'capitalize' }}>
                        @Alex99
                    </Text>

                </View>

                <View style={{ marginHorizontal: 25, marginTop: 10 }}>
                    <View style={styles.txtview} >
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Full Name
                        </Text>
                        <TextInput style={styles.profilrinput} placeholder="Alex Katich" placeholderTextColor="#707070" />
                    </View>

                    <View style={styles.txtview} >
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Password
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 0.5, borderColor: "#707070", height: 40, marginTop: 10, paddingLeft: 30 }}>
                            <TextInput style={{ flex: 1 }} placeholder="*********" placeholderTextColor="#707070" />
                            <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => { setShowModal(true) }} >
                                <Text style={{ color: "#707070", textAlign: "center", fontSize: 16, color: "#FF9B70" }}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.txtview} >
                        <Text style={styles.value}>
                            Age
                        </Text>
                        <TextInput style={styles.profilrinput} placeholder="35" placeholderTextColor="#707070" />
                    </View>

                    <View style={styles.txtview} >
                        <Text style={styles.value}>
                            Gender
                        </Text>
                        <TextInput style={styles.profilrinput} placeholder="male" placeholderTextColor="#707070" />
                    </View>

                    <View style={styles.txtview}>
                        <Text style={styles.value}>
                            City
                        </Text>
                        <TextInput style={styles.profilrinput} placeholder="California" placeholderTextColor="#707070" />
                    </View>

                    <View style={styles.txtview} >
                        <Text style={styles.value}>
                            State
                        </Text>
                        <TextInput style={styles.profilrinput} placeholder="Los Angeles" placeholderTextColor="#707070" />
                    </View>

                    <View style={styles.txtview}>
                        <Text style={styles.value}>
                            Contact No
                        </Text>
                        <TextInput style={styles.profilrinput} placeholder="+1 123 456789" placeholderTextColor="#707070" />
                    </View>

                    <View style={{ marginVertical: 30 }}>

                        <Button title="Save Changes" btnonpress={() => { props.navigation.navigate("Myprofile") }} />

                    </View>

                    {/* MODAL VIEW */}

                    <Modal isVisible={showModal} >
                        <View style={styles.modelcontiner}>
                            <View style={{ marginHorizontal: 20 }}>
                                <View style={{ marginBottom: 20, marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#404040" }}>Change Password</Text>
                                    <TouchableOpacity onPress={() => setShowModal(false)}>
                                        <Icon type="antdesign" name="closecircleo" color={"#000"} size={23} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={styles.txt}>
                                        Old Password
                                    </Text>
                                    <TextInput style={styles.input} />
                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={styles.txt}>
                                        New Password
                                    </Text>
                                    <TextInput style={styles.input} />
                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={styles.txt}>
                                        Conform Password
                                    </Text>
                                    <TextInput style={styles.input} />
                                </View>
                            </View>


                            <View style={styles.footerarea}>
                                <Button btnonpress={() => { setShowModal(false) }} btnViewStyle={styles.footerbtn1} btntxtstyle={styles.btntext} title="Cancel" />
                                <Button btnonpress={() => { setShowModal(false), props.navigation.navigate("Myprofile") }} btnViewStyle={styles.footerbtn} btntxtstyle={styles.btntext} title="Confirm" />
                            </View>
                        </View>
                    </Modal>




                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    profileheader: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    profilrinput: {
        borderWidth: 0.5,
        borderColor: "#707070",
        height: 40,
        marginTop: 10,
        paddingLeft: 30,
        fontSize: 16
    },
    txtview: {
        marginTop: 20
    },
    value: {
        color: "#707070",
        fontSize: 15,
        fontWeight: "bold"
    },
    footerarea: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 20,
        // backgroundColor: "#000",
        width: "100%",
    },
    footerbtn: {
        width: 140,
        marginBottom: 20,
        borderRadius: 12,
    },
    footerbtn1: {
        backgroundColor: "#707070",
        width: 140,
        marginBottom: 20,
        borderRadius: 12,
    },
    btntext: {
        fontSize: 14,
    },
    modelcontiner: {
        borderRadius: 15,
        backgroundColor: "#EAEAEA"
    },
    txt: {
        paddingLeft: 10,
        fontSize: 12,
        color: "#404040",
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: "#FF9B70",
        borderRadius: 12,
        height: 45,
        backgroundColor: "#ffffff",
        color:"#000"
    }

})

export default Editprofile;