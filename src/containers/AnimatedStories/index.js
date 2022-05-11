import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { Button, Header, Vedio } from "../../component";

import Video from 'react-native-video';

const Data = [
    1, 2, 3, 4, 5
]

const AnimatedStories = () => {
    return (
        <SafeAreaView>

            <Header title="Animated Stories" lefticon searchlogo={true} />
            <ScrollView style={{ backgroundColor: "#fff" }} showsVerticalScrollIndicator={false}>

                <View style={styles.child_1}>
                    <Button btnViewStyle={styles.btn_Active} btntxtstyle={styles.btntext_Active} title="Beginner" />
                    <Button btnViewStyle={styles.btn} btntxtstyle={styles.btntext} title="Advanced" />
                </View>

                {/* <Video source={{ uri: "http://south4.cdnhdfriday.com/Data/south-dubbed-mp4/Khiladi%202022%20Hindi%20pDvDRip%20HDFRiday.CoM.mp4" }}   // Can be a URL or a local file.
                    style={styles.backgroundVideo} /> */}

                {Data.map(() => {
                    return (
                        <View style={styles.container}>
                            <Vedio mainStyle={styles.video} title="Push-Up" time="3 min" name="Trainer Caronia" views="225" later="1 hour" />
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
    },
    child_1: {
        flex: 1,
        height: 70,
        justifyContent: "flex-start",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    btn: {
        padding: 8,
        alignItems: "center",
        textAlign: "center",
        width: 110,
        height: 40,
        marginLeft: 5,
        borderRadius: 60,
        backgroundColor: "#EEECEC",
        padding: 5,
    },
    btntext: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#707070"
    },
    btn_Active: {
        padding: 8,
        alignItems: "center",
        textAlign: "center",
        marginLeft: 5,
        width: 110,
        height: 40,
        borderRadius: 60,
        backgroundColor: "#FF9B70",
    },
    btntext_Active: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    video: {
        width: "100%",
        marginTop: 10,
    }
})

export default AnimatedStories
