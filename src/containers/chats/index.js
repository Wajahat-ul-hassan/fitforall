import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Header, Chatcomponent } from "../../component"
import { Icon } from 'react-native-elements';

const Chats = (props) => {
    const chatData = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header title="Chats" lefticon={true} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.searchview}>
                    <TextInput placeholder='Search for message ....' placeholderTextColor="#707070" style={{ marginRight: 20, color: "black", flex: 1, fontSize: 12 }} />
                    <TouchableOpacity>
                        <Icon
                            name='search'
                            type='font-awesome'
                            color='black'
                            size={17}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    {chatData.map(() => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate("Message")}>
                                <Chatcomponent name="hello word" detail="hello We are" massageTime="05:00PM" massage="1" onPressProfile={() => props.navigation.navigate("Profile")} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    searchview: {
        height: 40,
        marginHorizontal: 20,
        marginVertical: 30,
        borderWidth: 1,
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        borderColor: "#fff",
        shadowColor: "#000",
        backgroundColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16,

        elevation: 10,

    },
})

export default Chats;