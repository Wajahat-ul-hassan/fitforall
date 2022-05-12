import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, ImageBackground, StatusBar, TouchableHighlight } from 'react-native';

import Swiper from 'react-native-swiper'

import { Group1, Group2, Group3 } from "../../assets/index";
import { Button } from "../../component";

const OnBoardingScreen = (props) => {
    const [currentindex, setCurrentindex] = useState(0)

    return (
        <SafeAreaView style={styles.continer_1}>
            <StatusBar barStyle='dark-content' backgroundColor="#ffffff" />
            <Swiper style={styles.wrapper} showsPagination={false}
                onIndexChanged={(index) => console.log('currentindex', index, currentindex)}
                index={currentindex}>

                <ScrollView>
                <View style={styles.continer_2}>
                    <View style={styles.child_1}>
                        <ImageBackground source={Group1} resizeMode="cover" style={styles.image} >
                            <Text style={styles.header_Title}>Have a good health</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footertext}>Being healthy is all, no health is nothing.
                            So why do not we</Text>
                    </View>

                    <View style={styles.more}>
                        <View style={styles.circle_Active}></View>
                        <View style={styles.circle}></View>
                        <View style={styles.circle}></View>
                    </View>

                   
                </View>

                </ScrollView>


                <View style={styles.slide2}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.continer_2}>

                            <View style={styles.child_1}>
                                <ImageBackground source={Group2} resizeMode="cover" style={styles.image} >
                                    <Text style={styles.header_Title}>Be stronger</Text>

                                </ImageBackground>

                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.footertext}>Take 30 minutes of bodybuilding every day
                                    to get physically fit and healthy.</Text>
                            </View>
                            <View style={styles.more}>
                                <View style={styles.circle}></View>
                                <View style={styles.circle_Active}></View>
                                <View style={styles.circle}></View>
                            </View>
                            
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.slide3}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.continer_2}>

                            <View style={styles.child_1}>
                                <ImageBackground source={Group3} resizeMode="cover" style={styles.image} >
                                    <Text style={styles.header_Title}>Have nice body</Text>

                                </ImageBackground>

                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.footertext}>Bad body shape, poor sleep, lack of strength,
                                    weight gain, weak bones, easily traumatized
                                    body, depressed, stressed, poor metabolism,
                                    poor resistance.</Text>
                            </View>
                            <View style={styles.more}>
                                <View style={styles.circle}></View>
                                <View style={styles.circle}></View>
                                <View style={styles.circle_Active}></View>
                            </View>
                            <Button btnonpress={() => props.navigation.navigate('GetStartScreen')} btnViewStyle={styles.btn} btntxtstyle={styles.btntext} title="Start" />
                        </View>
                    </ScrollView>
                </View>

            </Swiper>


        </SafeAreaView >

    )
}



const styles = StyleSheet.create({
    continer_1: {
        backgroundColor: "#FF9B70",
        flex: 1
    },
    continer_2: {
        flex: 1,
        paddingBottom: 20,
        overflow: 'hidden'
    },
    child_1: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -140,
    },
    header_Title: {
        color: "#FF9B70",
        marginTop: 160,
        fontWeight: "bold",
        fontSize: 26,
        textAlign: 'center'

    },
    footer: {
        marginTop: -110,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    footertext: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        height: 120,
        lineHeight: 22,
    },
    more: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 80,
        marginTop: -20
    },
    circle: {
        width: 13,
        height: 13,
        backgroundColor: "#f2baa2",
        borderRadius: 100,
    },
    circle_Active: {
        width: 13,
        height: 13,
        backgroundColor: "#fff",
        borderRadius: 100,
    },
    image: {
        height: 600,
        width: 600
    },
    btn: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginTop: 20,

    },
    btntext: {
        color: "#FF9B70",
        fontSize: 20,
    },
    wrapper: {},
    slide1: {
        flex: 1,
    },
    slide2: {
        flex: 1,
        overflow: "hidden"
    },
    slide3: {
        flex: 1,
        overflow: "hidden"
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default OnBoardingScreen