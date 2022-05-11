import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import { Header, Vedio, Button } from "../../component";
import { Favorities } from "../../assets";


const TrainingVideos = (props) => {
    const { begineerVideos, advanceVideo } = props.route.params

    const [BeginnerButton, setBeginnerButton] = useState()
    const [advanceButton, setAdvanceButton] = useState()

    const beginnerData = [
        {
            title: "push-up",
            time: "3 min",
            userName: "trainner caronia",
            views: "225",
            postTiming: "1 hours",
        },
        {
            title: "leg extension",
            time: "3 min",
            userName: "trainner caronia",
            views: "225",
            postTiming: "2 hours",
        },
        {
            title: "squat",
            time: "3 min",
            userName: "trainner caronia",
            views: "225",
            postTiming: "2 hours",
        },

    ]

    const advanceData = [
        {
            title: "toe excercise",
            time: "3 min",
            userName: "trainner caronia",
            views: "225",
            postTiming: "1 hours",
        },
        {
            title: "big-teo stretch.",
            time: "3 min",
            userName: "trainner caronia",
            views: "225",
            postTiming: "2 hours",
        },
        {
            title: "achilles stretch",
            time: "3 min",
            userName: "trainner caronia",
            views: "225",
            postTiming: "2 hours",
        },
    ]

    useEffect(() => {
        setBeginnerButton(begineerVideos)
        setAdvanceButton(advanceVideo)
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: "#fff", }}>
            <Header lefticon={true} title="Training Videos" />

            <View style={styles.child_1}>
                <Button title="Beginner" btnViewStyle={[styles.btnViewStyle_Active, { backgroundColor: BeginnerButton ? "#FF9B70" : "#ffffff" }]} btntxtstyle={[styles.btntxtstyle_Active, { color: BeginnerButton ? "#ffffff" : "#707070" }]} btnonpress={() => { setBeginnerButton(true), setAdvanceButton(false) }} />
                <Button title="Advanced" btnViewStyle={[styles.btnViewStyle_Active, { backgroundColor: advanceButton ? "#FF9B70" : "#ffffff" }]} btntxtstyle={[styles.btntxtstyle_Active, { color: advanceButton ? "#ffffff" : "#707070" }]} btnonpress={() => { setAdvanceButton(true), setBeginnerButton(false) }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {BeginnerButton && (
                    <>
                        {beginnerData.map((val) => {
                            return (
                                <Vedio
                                    videoUrl={'http://mkv22.cdnhdfriday.com/mkv-bollywood/Bunty%20Aur%20Bubli%202%202021%20Hindi%20DVDRip%20HDFRiday.CoM.mkv'}
                                    thumbnailUrl={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_05/2732526/190128-exercise-gym-ac-556p.jpg'}
                                    mainStyle={styles.mainStyle} videoplyer={styles.videoplyer}
                                    title={val?.title} time={val?.time} name={val?.userName} views={val?.views} later={val?.postTiming}
                                    onPressTitle={() => props.navigation.navigate("Foot")}
                                />
                            )
                        })
                        }
                    </>
                )}

                {advanceButton && (
                    <>
                        {advanceData.map((val) => {
                            return (
                                <Vedio
                                    videoUrl={'http://mkv22.cdnhdfriday.com/mkv-bollywood/Bunty%20Aur%20Bubli%202%202021%20Hindi%20DVDRip%20HDFRiday.CoM.mkv'}
                                    thumbnailUrl={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_05/2732526/190128-exercise-gym-ac-556p.jpg'}
                                    TitleView={styles.TitleView}
                                    subTitleView={styles.subTitleView}
                                    mainStyle={styles.mainStyle}
                                    videoplyer={styles.videoplyer}
                                    title={val?.title} time={val?.time} name={val?.userName} views={val?.views} later={val?.postTiming}
                                />
                            )
                        })
                        }
                    </>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    child_1: {
        height: 70,
        flexDirection: "row",
        justifyContent: "flex-start",
        textAlign: "center",
        alignItems: "center"
    },
    btnViewStyle: {
        padding: 5,
        height: 40,
        marginLeft: 10,
        width: 120,
        backgroundColor: "#FF9B70"
    },
    btntxtstyle: {
        fontSize: 17,
        color: "#FFFFFF",
    },
    btnViewStyle_Active: {
        padding: 5,
        height: 40,
        marginLeft: 10,
        width: 120,
        backgroundColor: "#F8F6F9"
    },
    btntxtstyle_Active: {
        fontSize: 17,
        color: "#707070",
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
})

export default TrainingVideos;