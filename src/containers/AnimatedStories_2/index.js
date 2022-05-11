import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { Header } from "../../component"
import { profile, Armpushupgif, Squatgif, Punchesgif, Jumpinggif } from "../../assets";
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get("screen")
const AnimatedStories_2 = (props) => {
    const data = [
        {
            name: "Full Body",
            image: Armpushupgif,
            screenName: 'Trainingvideo',
            begineerVideos: true,
            advanceVideo: false
        },
        {
            name: "Foot",
            image: Squatgif,
            screenName: 'Trainingvideo',
            begineerVideos: false,
            advanceVideo: true
        },
        {
            name: "Bullying",
            image: Punchesgif,
            screenName: ''
        },
        {
            name: "Work Out IS Fun ",
            image: Jumpinggif,
            screenName: ''
        }
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header title="Animated Stories" lefticon={true} searchicon={true} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }} >
                    <Text style={{ color: "#707070", fontSize: 17, fontWeight: "bold" }}>
                        Category List
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    {data.map((val) => {
                        const { name, image, screenName } = val
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate(screenName, { begineerVideos: val?.begineerVideos, advanceVideo: val?.advanceVideo })} style={Styles.body} >
                                <View style={{ justifyContent: 'center', paddingLeft: 50 }}>
                                    <Text numberOfLines={2} style={{ color: "#707070", fontSize: 20, fontWeight: "bold", width: 120, textTransform: 'capitalize' }}>{name}</Text>
                                </View>
                                <View style={{ alignItems: "center", width: 150 }}>
                                    <LottieView
                                        source={image}
                                        autoPlay
                                        loop
                                        style={{ height: 130, width: 130 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
            </ScrollView >


        </View >
    )
}

const Styles = StyleSheet.create({
    body: {
        marginBottom: 20,
        backgroundColor: "#F5F5F5",
        height: height * 0.22,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
    }
})
export default AnimatedStories_2;