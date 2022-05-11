import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Header, Button } from "../../component"
import { profile } from "../../assets"


const Myprofile = (props) => {
    console.log("🚀 ~ file: index.js ~ line 8 ~ Myprofile ~ props", props)

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header title="My Profile" lefticon={true} leftIconPress={() => props.navigation.goBack()} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.profileheader}>
                    <View style={{ height: 100, width: 100 }}>
                        <Image source={profile} style={{ height: 100, width: 100, borderRadius: 90, borderWidth: 2.5, borderColor: "#FF9B70" }} />
                    </View>
                    <Text style={{ color: "#707070", fontSize: 16, marginTop: 5 }}>
                        @Alex99
                    </Text>
                </View>

                <View style={{ marginHorizontal: 25, marginTop: 10 }}>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Full Name
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            alex katich
                        </Text>
                    </View>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Password
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            *********
                        </Text>
                    </View>
                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Age
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            35
                        </Text>
                    </View>
                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Gender
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            Male
                        </Text>
                    </View>
                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            State
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            California
                        </Text>
                    </View>
                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            City
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            Los Angeles
                        </Text>
                    </View>
                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold" }}>
                            Contact No
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            +1 123 456789
                        </Text>
                    </View>
                </View>

                <View style={{ marginVertical: 30, marginHorizontal: 25 }}>
                    <Button btnonpress={() => props.navigation.navigate('Editprofile')} title="Edit Profile" />
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
    profileview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#E6E6E6",
        height: 60,
    }
})

export default Myprofile;