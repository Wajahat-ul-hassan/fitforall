import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

// import icon
import { star, profile, clipboard, twitter, whatsapp, facebook } from "../../assets/index"

// import components 
import { Button, Header, Vedio, Input } from "../../component";

// import model form native base 
// import { Modal, FormControl, NativeBaseProvider } from "native-base";

// import video player 
import VideoPlayer from 'react-native-video-player';


const ReviewsRatings = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Header title="Reviews & Ratings" lefticon />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: "#fff", flex: 1 }}>
                    <VideoPlayer
                        style={styles.videoplyr}
                        thumbnail={{ uri: 'https://www.brandsynario.com/wp-content/uploads/2020/11/gym1.jpg' }}
                        video={{ uri: 'https://media3.giphy.com/media/WsjvRxj8RRxYZgIzzI/giphy.gif' }}
                    />
                    <View style={styles.container}>



                        <View style={styles.meinView}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#707070", textTransform: "capitalize" }}>
                                    Push-Up
                                </Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 60 }}>
                               <Image style={styles.star} source={star} />
                                <Text style={{ fontSize: 11, color: "#707070", fontWeight: "bold", }}>
                                    3 min
                                </Text>
                            </View>
                        </View>

                        <View style={styles.views}>
                            <Text style={{ color: "#707070", marginRight: 5, fontSize: 13 }}>
                               Trainer Caroina  |
                            </Text>
                            <Text style={{ color: "#707070", marginRight: 5, fontSize: 13 }}>
                                225 views  |
                            </Text>
                            <Text style={{ color: "#707070", marginRight: 5, fontSize: 13 }}>
                                1 day ago
                            </Text>
                        </View>

                    </View>

                    <View style={styles.commentbox}>
                        <Image resizeMode='cover' style={styles.userimage} source={profile} />
                        <TextInput placeholderTextColor="#707070" style={styles.userinput} placeholder="Add a Comment...." />
                    </View>

                    <View style={styles.usercomment}>
                        <View style={styles.commentrow1}>
                            <Image resizeMode='cover' style={styles.commentuser} source={profile} />
                            <Text style={styles.username}>Alex </Text>
                            <Text style={styles.usertime}>|   2 hours ago</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.user_coment}>
                                Lorem ipsum Duis aute irure dolor in reprehen
                                rit inarcu cursus euismod. </Text>
                        </View>
                        <View style={styles.usercommenticon}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.usercommentbtn}>
                                <Icon
                                    name='like2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                /><Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.usercommentbtn}>
                                <Icon
                                    style={{ transform: [{ rotateY: '180deg' }] }}
                                    name='dislike2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                />
                                <Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.usercommentbtn}>
                                <Icon
                                    name='comment'
                                    type='MaterialIcons'
                                    color='#707070'
                                    size={18}
                                />
                                <Text style={styles.commentboxlike}>1</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={styles.user_comment}>
                        <View style={styles.commentrow1}>
                            <Image style={styles.commentuser} source={profile} />
                            <Text style={styles.username}>Alex |</Text>
                            <Text style={styles.usertime}>2 hours ago</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.user_coment}>
                                Lorem ipsum Duis aute irure dolor in reprehen
                                rit inarcu cursus euismod. </Text>
                        </View>
                        <View style={styles.usercommenticon}>

                            <TouchableOpacity activeOpacity={0.7} style={styles.usercommentbtn}>
                                <Icon
                                    name='like2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                /><Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.usercommentbtn}>
                                <Icon
                                    style={{ transform: [{ rotateY: '180deg' }] }}
                                    name='dislike2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                /><Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.usercommentbtn}>
                                <Icon
                                    name='comment'
                                    type='MaterialIcons'
                                    color='#707070'
                                    size={18}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Model area */}
              

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    views: {
        flexDirection: "row",
        marginBottom:10,
        marginHorizontal: 10,
    },
    meinView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-start',
        marginHorizontal: 10,
        height: 40,
        marginTop: 10,
        flexDirection: "row"
    },
    favview: {
        height: 300,
        backgroundColor: "gray",
    },
    child_1: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    child1_View1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 80,
        marginLeft: -8
    },
    child_2: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 70,
        marginRight: -10
    },
    container1: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    shareimg: {
        width: 20,
        height: 20,
    },
    star: {
        width: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    likeBtn: {
        fontSize: 10,
        color: "#707070",
    },
    child_3: {
        marginTop: 5,
    },
    child3_heading: {
        fontSize: 15,
        color: "#707070",
        fontWeight: "bold",
        paddingHorizontal: 10,
        lineHeight: 30,
    },
    subHeading: {
        color: "#707070",
        fontSize: 14,
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: 50,
        lineHeight: 20,
    },
    commentbox: {
        backgroundColor: "#EEECEC",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD"
    },
    userimage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FF9B70",
    },
    userinput: {
        color: '#707070',
        placeholderTextColor: '#707070',
        width: "80%",
    },
    usercomment: {
        padding: 10,
    },
    commentrow1: {
        flexDirection: "row",
        alignItems: "center",
    },
    commentuser: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FF9B70",
    },
    username: {
        fontSize: 14,
        color: "#707070",
        fontWeight: "bold",
        marginLeft: 10,
    },
    usertime: {
        marginLeft: 10,
        color: "#707070",
        fontSize: 14,
    },
    user_coment: {
        marginTop: 10,
        paddingHorizontal: 50,
        color: "#707070",
    },
    usercommenticon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: 140,
        marginLeft: 50,
        marginTop: 10,
    },
    usercommentbtn: {
        flexDirection: "row",
        alignItems: 'center'
    },
    commentboxlike: {
        marginLeft: 5,
        fontSize: 12
    },
    user_comment: {
        marginLeft: 40,
    },
    modelheader: {
        color: "#707070",
        fontSize: 18,
    },
    modelbody: {
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        padding: 10,
    },
    shareicon: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    modelcontiner: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center"
    },
    icontext: {
        color: "#707070",
        fontSize: 14,
        marginTop: 5,
        maxWidth: 70,
    },
    dislike_icon: {

        // backgroundColor: "#990000",
        fontSize: 28,
    },
})

export default ReviewsRatings
