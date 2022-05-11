import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Header, Button } from "../../component"
import { profile } from "../../assets"


const Profile = () => {

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header title="Profile" lefticon={true} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileheader}>
                    <View style={{ height: 100, width: 100 }}>
                        <Image source={profile} style={{ height: 100, width: 100, borderRadius: 90, borderWidth: 3, borderColor: "#FF9B70" }} />

                    </View>
                    <Text style={{ color: "#707070", fontSize: 16, marginTop: 5, textTransform: 'capitalize' }}>
                        @liam
                    </Text>

                </View>
                <View style={{ marginHorizontal: 25, marginTop: 10 }}>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold", textTransform: 'capitalize' }}>
                            Full Name
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            @Alex99
                        </Text>
                    </View>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold", textTransform: 'capitalize' }}>
                            age
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            35
                        </Text>
                    </View>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold", textTransform: 'capitalize' }}>
                            gender
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            male
                        </Text>
                    </View>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold", textTransform: 'capitalize' }}>
                            State
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            California
                        </Text>
                    </View>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold", textTransform: 'capitalize' }}>
                            city
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            Los Angeles
                        </Text>
                    </View>

                    <View style={styles.profileview}>
                        <Text style={{ color: "#707070", fontSize: 15, fontWeight: "bold", textTransform: 'capitalize' }}>
                            contact
                        </Text>
                        <Text style={{ color: "#707070", fontSize: 16 }}>
                            +1 123 456789
                        </Text>
                    </View>
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

export default Profile;