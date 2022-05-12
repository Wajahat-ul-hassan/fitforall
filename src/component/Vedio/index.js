import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { star } from "../../assets";
import { Icon } from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';
// import VideoPlayer from 'react-native-video-controls';

const Vedio = (props) => {


    const { title, time, name, views, staricon ,videoplyer, later, icon, mainStyle, TitleView, subTitleView, thumbnailUrl, videoUrl, onPressTitle } = props
    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1, borderBottomWidth: 7, borderBottomColor: "#EEECEC", paddingBottom: 10, }}>
            <View style={[styles.favview, mainStyle]}>
                <VideoPlayer
                    style={[styles.videoplyr, videoplyer]}
                    thumbnail={{ uri: thumbnailUrl }}
                    video={{ uri: videoUrl }}
                />

                {icon && (
                    <TouchableOpacity style={{ alignSelf: "flex-end", position: "absolute", top: 25, right: 20 }}>
                        <Icon
                            name='heart'
                            type='antdesign'
                            color='#FF9B70'
                            size={15}
                        />
                    </TouchableOpacity>
                )}

            </View>

            <View style={[styles.meinView, TitleView]}>
                <TouchableOpacity onPress={onPressTitle}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#707070", textTransform: "capitalize" }}>
                        {title}
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 60 }}>
                    {staricon && (<Image style={styles.star} source={star} />)}
                    <Text style={{ fontSize: 11, color: "#707070", fontWeight: "bold", }}>
                        {time}
                    </Text>
                </View>
            </View>

            <View style={[styles.views, subTitleView]}>
                <Text style={{ color: "#707070", marginRight: 5, fontSize: 13 }}>
                    {name}  |
                </Text>
                <Text style={{ color: "#707070", marginRight: 5, fontSize: 13 }}>
                    {views} views  |
                </Text>
                <Text style={{ color: "#707070", marginRight: 5, fontSize: 13 }}>
                    {later} ago
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    favview: {
    },
    views: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: -5,
    },
    meinView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-start',
        marginHorizontal: 10,
        height: 40,
        flexDirection: "row"
    },
    videoplyr: {
        backgroundColor: "#ffffff",
    },
    star: {
        width: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Vedio;