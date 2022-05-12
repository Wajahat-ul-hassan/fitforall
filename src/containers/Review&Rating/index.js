import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { LocaleConfig, Calendar } from 'react-native-calendars';
import { Icon, Rating } from 'react-native-elements';

import { searchicon } from "../../assets/index";

import { Button, Header, Vedio, Input } from "../../component";

const Data = [
    1, 2, 3, 4, 5
]

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

const Reviewrating = (props) => {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header title="Reviews & Ratings" lefticon />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.searchview}>
                    <TextInput placeholder='Search' placeholderTextColor="#707070" style={{ marginRight: 10, color: "black", flex: 1 }} />
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon
                            name='search1'
                            type='antdesign'
                            color='black'
                            size={20}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 20 }}>
                    {Data.map(() => {
                        return (
                            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('ReviewsRatingsVideos')}>
                                <Vedio
                                    thumbnailUrl={'https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg'}
                                    videoUrl={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                                    TitleView={styles.TitleView} subTitleView={styles.subTitleView} mainStyle={styles.mainStyle} videoplyer={styles.videoplyer}
                                    title="Push-Up" staricon time="3 min" name="Trainer Caronia" views="225" later="1 day"
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView >
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    child_2: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    btn: {
        padding: 2,
        alignItems: "center",
        textAlign: "center",
        width: 100,
        height: 35,
        marginLeft: 5,
        borderRadius: 60,
        backgroundColor: "#EEECEC",
    },
    btntext: {
        fontSize: 17,
        fontWeight: "100",
        color: "#707070"
    },
    btn_Active: {
        padding: 2,
        alignItems: "center",
        textAlign: "center",
        width: 100,
        height: 35,
        marginLeft: 5,
        borderRadius: 60,
        backgroundColor: "#FF9B70",
    },
    btntext_Active: {
        fontSize: 17,
        fontWeight: "100",
        color: "#FFFFFF"
    },
    video: {
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 20,
        height: 230,
    },
    input: {
        placeholderTextColor: '#707070',
        flex: 1,
        color: "#707070",
    },
    searchicon: {
        position: 'relative',
    },
    ViewStyle: {
        borderWidth: 1,
        borderColor: "#FF9B70",
        flexDirection: "row-reverse",
        borderRadius: 50,
    },
    iconStyle: {
        marginRight: 10,
        height: 25,
    },
    TitleView: {
        paddingHorizontal: 20,
        paddingTop: 5
    },
    subTitleView: {
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    mainStyle: {
        marginTop: 10,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    videoplyer: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchview: {
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        borderColor: "#FF9B70",
        backgroundColor: "#ffffff",
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 5,
    },
})

export default Reviewrating