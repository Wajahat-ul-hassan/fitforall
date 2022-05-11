import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import { hamburfer, headerimg, Runningmen, Chats, History, Profilegfs, Notification, VideoPlayer, Running, profile, Runninggif, videogif, Profilegif, Notificationgif, Historygif, ChatMessengergif } from '../../assets';

const DATA = [
    {
        image: videogif,
        title: 'Training Videos',
        screenName: "Traning"
    },
    {
        image: Runninggif,
        title: 'Animated Stories',
        screenName: "AnimatedStories_2"
    },
    {
        image: ChatMessengergif,
        title: 'Chat',
        screenName: "Chats"
    },
    {
        image: Profilegif,
        title: 'My Profile',
        screenName: "Myprofile"
    },
    {
        image: Historygif,
        title: 'Watch History',
        screenName: "WatchHistory"
    },
    {
        image: Notificationgif,
        title: 'Notifications',
        screenName: "Notification"
    },
];

const Home = (props) => {

    const usenavigation = useNavigation();

    const [showImage, setShowImage] = useState(true)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate(item?.screenName)}>
                <View style={{ height: 90, width: 90, justifyContent: 'center', alignItems: 'center' }}>
                    <LottieView resizeMode='contain'
                        source={item.image}
                        autoPlay
                        loop
                        style={styles.cardimg}
                    />
                </View>
                <Text style={styles.cardtxt}>{item.title}</Text>
            </TouchableOpacity>

        )
    }

    const handleShowImage = () => {
        usenavigation.openDrawer();
        setShowImage(false)
    }

    return (
        <View style={styles.dashboard}>
            <StatusBar barStyle='dark-content' backgroundColor="#ffffff" />
            <View style={styles.costumheader}>

                <View style={styles.leftview}>
                    <TouchableOpacity onPress={() => { handleShowImage() }}>
                        <Image resizeMode='contain' source={hamburfer} style={styles.headericon} />
                    </TouchableOpacity>
                    <Text style={styles.headertxt}>Hi, Alex</Text>
                    <Text style={{ fontSize: 16, color: "#FFFFFF" }}>@Alex99</Text>
                </View>
                {/* {showImage && */}
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginRight: -20, marginTop: -30 }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => { props.navigation.navigate("Myprofile") }}>
                        <Image source={profile} style={{ height: 80, width: 80, borderRadius: 100, borderWidth: 2, borderColor: "#fff" }} />
                    </TouchableOpacity>
                </View>
                {/* } */}
            </View>

            <ScrollView style={{ position: "relative" }} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: "#F8F6F9", borderTopRightRadius: 30, borderTopLeftRadius: 30, borderWidth: 0.5, borderColor: "rgba(221, 221, 221, 0.8)" }}>
                    <View style={styles.tipview}>
                        <Icon
                            name='lightbulb'
                            type='foundation'
                            color='#FF9B70'
                            size={20}
                        />
                        <Text style={{ fontSize: 16, color: "#4B3F2F", fontWeight: 'bold' }}> Tip! </Text>
                        <Text style={{ color: "#4B3F2F" }}> Sneak in workouts during the day</Text>
                    </View>
                    <View style={styles.searchview}>
                        <TextInput placeholder='Search' placeholderTextColor="#707070" style={{ marginRight: 10, color: "black", flex: 1 }} />
                        <TouchableOpacity>
                            <Icon
                                name='search1'
                                type='antdesign'
                                color='black'
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dashboardbady}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        backgroundColor: "#fff",
    },
    costumheader: {
        height: 165,
        backgroundColor: "#FF9B70",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: "row",
    },
    leftview: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 20
    },
    headericon: {
        width: 30,
        height: 30,
    },
    headertxt: {
        paddingTop: 20,
        fontSize: 35,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    searchicon: {
        justifyContent: "center",
        alignItems: "center"
    },
    tipview: {
        flexDirection: "row",
        alignItems: "baseline",
        marginHorizontal: 30,
        marginVertical: 10,
        color: "black",
        justifyContent: "center"
    },
    searchview: {
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        borderColor: "#FF9B70",
        backgroundColor: "#ffffff",
        height: 40

    },
    dashboardbady: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 160,
        width: 145,
        backgroundColor: "#EEECEC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 5,
    },
    cardimg: {
        height: 80,
        width: 100,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    cardtxt: {
        fontSize: 18,
        width: 110,
        textAlign: 'center',
        color: "#707070",
        fontWeight: "normal",
        fontWeight: 'bold',
        marginTop: -10
    }
});
export default Home;

