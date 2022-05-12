import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TextInput, Image } from "react-native";
import { Header, Vedio, Button } from "../../component";
import { Favorities, upload } from "../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";
import { Icon } from "react-native-elements"

const TrainingVideos = (props) => {
    const htitle=props.route.params.htitle
    // const { begineerVideos, advanceVideo } = props.route.params
    const loginResponse = useSelector(state => state.authReducers.user);
    const [BeginnerButton, setBeginnerButton] = useState(true)
    const [advanceButton, setAdvanceButton] = useState()
    const [showModal, setShowModal] = useState(false)

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

    // useEffect(() => {
    //     setBeginnerButton(begineerVideos)
    //     setAdvanceButton(advanceVideo)
    // }, [])


    return (
        <View style={{ flex: 1, backgroundColor: "#fff", }}>
            <Header lefticon={true} title={htitle} />

            <View style={styles.child_1}>
                <Button title="Beginner" btnViewStyle={[styles.btnViewStyle_Active, { backgroundColor: BeginnerButton ? "#FF9B70" : "#ffffff" }]} btntxtstyle={[styles.btntxtstyle_Active, { color: BeginnerButton ? "#ffffff" : "#707070" }]} btnonpress={() => { setBeginnerButton(true), setAdvanceButton(false) }} />
                <Button title="Advanced" btnViewStyle={[styles.btnViewStyle_Active, { backgroundColor: advanceButton ? "#FF9B70" : "#ffffff" }]} btntxtstyle={[styles.btntxtstyle_Active, { color: advanceButton ? "#ffffff" : "#707070" }]} btnonpress={() => { setAdvanceButton(true), setBeginnerButton(false) }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {BeginnerButton && (
                    <View>
                        {beginnerData.map((val) => {
                            return (
                                <TouchableOpacity onPress={() => props.navigation.navigate("Foot" , {htitle:htitle}  )}>

                                    <Vedio
                                        videoUrl={'http://mkv22.cdnhdfriday.com/mkv-bollywood/Bunty%20Aur%20Bubli%202%202021%20Hindi%20DVDRip%20HDFRiday.CoM.mkv'}
                                        thumbnailUrl={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_05/2732526/190128-exercise-gym-ac-556p.jpg'}
                                        mainStyle={styles.mainStyle} videoplyer={styles.videoplyer}
                                        title={val?.title} time={val?.time} name={val?.userName} views={val?.views} later={val?.postTiming}
                                        onPressTitle={() => props.navigation.navigate("Foot")}
                                    />
                                </TouchableOpacity>
                            )
                        })
                        }
                    </View>
                )}

                {advanceButton && (
                    <View>
                        {advanceData.map((val) => {
                            return (
                                <TouchableOpacity onPress={() => props.navigation.navigate("Foot" , {htitle:htitle})}>
                                    <Vedio
                                        videoUrl={'http://mkv22.cdnhdfriday.com/mkv-bollywood/Bunty%20Aur%20Bubli%202%202021%20Hindi%20DVDRip%20HDFRiday.CoM.mkv'}
                                        thumbnailUrl={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_05/2732526/190128-exercise-gym-ac-556p.jpg'}
                                        TitleView={styles.TitleView}
                                        subTitleView={styles.subTitleView}
                                        mainStyle={styles.mainStyle}
                                        videoplyer={styles.videoplyer}
                                        title={val?.title} time={val?.time} name={val?.userName} views={val?.views} later={val?.postTiming}
                                    />
                                </TouchableOpacity>
                            )
                        })
                        }
                    </View>
                )}
                {loginResponse?.type === 'School' &&
                    <View style={styles.footer_area}>
                        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.add_VideoBn}>
                            <Text style={styles.PlusIcon}> + </Text>
                            <Text style={styles.addVideo}>Add New Video </Text>
                        </TouchableOpacity>
                    </View>
                }
                <Modal isVisible={showModal}>
                    <View style={styles.modelcontiner}>
                        <View style={{ marginHorizontal: 20 }}>
                            <View style={{ marginBottom: 20 ,flexDirection:"row"  ,justifyContent:"space-between" }}>
                                <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "bold", color: "#404040" }}>Add New Video</Text>
                                <TouchableOpacity onPress={() => setShowModal(false)} style={{marginTop:10}}>
                                    <Icon type="antdesign" name="closecircleo" color={"#000"} size={23} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ paddingLeft: 10, fontSize: 12, color: "#404040", marginBottom: 5 }}>
                                    Video Tite
                                </Text>
                                <TextInput style={{ borderWidth: 1, borderColor: "#FF9B70", borderRadius: 12, height: 50, backgroundColor: "#ffffff", paddingLeft: 10, color: "#000" }} />
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ paddingLeft: 10, fontSize: 12, color: "#404040", marginBottom: 5 }}>
                                    Upload Video
                                </Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.ViewStyle}>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => { }} style={styles.uploadbtn}>
                                        <Image resizeMode='stretch' style={{ width: 17, height: 20, marginRight: 10 }} source={upload} />
                                        <Text style={{ fontSize: 15, color: "#F8F6F9", }}>Upload</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{ paddingLeft: 10, fontSize: 12, color: "#404040", marginBottom: 5 }}>
                                Max File Size 16 MB
                            </Text>
                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, marginHorizontal: 25, }}>
                            <Button btnonpress={() => { setShowModal(false) }} btntxtstyle={styles.btntxtstyle} btnViewStyle={styles.create_Btn} title="Cancel" />
                            <Button btnonpress={() => { setShowModal(false) }} btntxtstyle={styles.btntxtstyle} btnViewStyle={styles.cancel_Btn} title="Add" />
                        </View>
                    </View>
                </Modal>
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
    footer_area: {
        backgroundColor: "#EEECEC",
        height: 50,
        alignItems: "center",
        flex: 1
    },
    add_VideoBn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    PlusIcon: {
        color: "#FF9B70",
        fontSize: 20,
        fontWeight: "bold",
    },
    addVideo: {
        color: "#707070",
        fontSize: 17,
        textAlign: "center",
        alignItems: "center"
    },
    modelcontiner: {
        backgroundColor: "#EAEAEA",
        borderRadius: 15
    },
    uploadbtn: {
        backgroundColor: "#FF9B70",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        height: 50,
        paddingHorizontal: 15,
    },
    ViewStyle: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: "65%",
        borderWidth: 1,
        borderColor: "#FF9B70",
        height: 50,
        backgroundColor: "#fff",
    },
    btntxtstyle: {
        fontSize: 17,
        color: "#FFFFFF",
    },
    create_Btn: {
        flex: 1,
        backgroundColor: "#707070",
        marginHorizontal: 5,
        height: 47,
        borderRadius: 15,
    },
    cancel_Btn: {
        flex: 1,
        backgroundColor: "#FF9B70",
        marginHorizontal: 5,
        height: 47,
        borderRadius: 15,
    },
})

export default TrainingVideos;