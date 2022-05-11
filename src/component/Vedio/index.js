import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Favorities } from "../../assets";
import { Icon } from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';


const Vedio = (props) => {


    const { title, time, name, views, videoplyer, later, icon, mainStyle, TitleView, subTitleView, thumbnailUrl, videoUrl, onPressTitle } = props
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
                <Text style={{ fontSize: 11, color: "#707070", fontWeight: "bold", }}>
                    {time}
                </Text>
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
        height: 30
    },
    videoplyr: {
        backgroundColor: "#ffffff",
    },
})

export default Vedio;