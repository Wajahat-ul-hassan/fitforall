import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Header, Button } from "../../component"
import { Icon } from 'react-native-elements';

const Contactus = () => {
    const screenshots = [1, 2, 3]
    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }} >

            <Header title="Contact Us" lefticon={true} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 25, marginTop: 20 }}>
                    <View style={styles.contactinput}>
                        <Text style={{ color: "#5F5F5F", fontSize: 15, fontWeight: "bold" }}>Describe Your Problem</Text>
                        <TextInput multiline={true} style={styles.input} />
                    </View>
                    <View style={styles.contactinput}>
                        <Text style={{ color: "#5F5F5F", fontSize: 15, fontWeight: "bold" }}>Add Screenshots (Optional)</Text>
                        <View style={{ flexDirection: "row", marginVertical: 20, justifyContent: "space-between", alignItems: "center" }}>

                            {screenshots.map(() => {
                                return (
                                    <View style={styles.card} >
                                        <TouchableOpacity>
                                            <Icon
                                                name='plus'
                                                type='feather'
                                                color='#F15223'
                                                size={25}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </View>
                    <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#FF9B70" }}>Visit Our Help Center</Text>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <Button title="Submit" btnonpress={() => {}} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    contactinput: {
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#707070",
        height: 200,
        marginTop: 10,
        color: "black",
        textAlignVertical: "top",
        borderRadius: 5

    },
    card: {
        height: 110,
        width: 95,
        backgroundColor: "#F1F1F1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 11,
        // },
        // shadowOpacity: 0.57,
        // shadowRadius: 15.19,

        // elevation: 15,
    },
})

export default Contactus;