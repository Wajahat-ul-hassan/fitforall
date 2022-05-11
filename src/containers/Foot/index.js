import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

// import icon
import { Share, profile, clipboard, twitter, whatsapp, facebook } from "../../assets/index"

// import components 
import { Button, Header, Vedio, Input } from "../../component";

// import model form native base 

// import video player 
import VideoPlayer from 'react-native-video-player';


const Foot = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Header title="Foot" lefticon />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: "#fff", flex: 1 }}>
                    <VideoPlayer
                        style={styles.videoplyr}
                        thumbnail={{ uri: 'https://www.brandsynario.com/wp-content/uploads/2020/11/gym1.jpg' }}
                        video={{ uri: 'https://media3.giphy.com/media/WsjvRxj8RRxYZgIzzI/giphy.gif' }}
                    />
                    <View style={styles.container}>
                        <View style={styles.container1}>
                            <View style={styles.child1_View1}>
                                <TouchableOpacity style={styles.btn_Active}>
                                    <Icon
                                        name='like2'
                                        type='antdesign'
                                        color='#FF9B70'
                                        size={22}
                                    /><Text style={styles.likeBtn}>Likes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon
                                        style={{ transform: [{ rotateY: '180deg' }] }}
                                        name='dislike2'
                                        type='antdesign'
                                        color='#707070'
                                        size={22}
                                    /><Text style={styles.likeBtn}>Dislikes</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.child_2}>
                                <TouchableOpacity>
                                    <Icon
                                        name='hearto'
                                        type='antdesign'
                                        color='#707070'
                                        size={22}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setShowModal(true)}>
                                    <Image resizeMode='center' style={styles.shareimg} source={Share} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 8, }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#707070" }}>
                                Toe Excercise
                            </Text>
                        </View>
                        <View style={styles.views}>
                            <Text style={{ color: "#707070", marginRight: 5, }}>
                                Trainer Caronia  |
                            </Text>
                            <Text style={{ color: "#707070", marginRight: 5, }}>
                                225 views |
                            </Text>
                            <Text style={{ color: "#707070", marginRight: 5, }}>
                                1 day ago
                            </Text>
                        </View>

                        <View style={styles.child_3}>
                            <Text style={styles.child3_heading}>Lore ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do.
                            </Text>
                            <Text style={styles.subHeading}>eiusmod tempor incididunt ut labore et  dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum.m ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </Text>
                        </View>


                    </View>

                    <View style={styles.commentbox}>
                        <Image resizeMode='cover' style={styles.userimage} source={profile} />
                        <TextInput style={styles.userinput} placeholder="Add a Comment...." />
                    </View>

                    <View style={styles.usercomment}>
                        <View style={styles.commentrow1}>
                            <Image resizeMode='cover' style={styles.commentuser} source={profile} />
                            <Text style={styles.username}>Alex </Text>
                            <Text style={styles.usertime}>|   2 hours ago</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.usercomment1}>
                                Lorem ipsum Duis aute irure dolor in reprehen
                                rit inarcu cursus euismod. </Text>
                        </View>
                        <View style={styles.usercommenticon}>
                            <TouchableOpacity style={styles.usercommentbtn}>
                                <Icon
                                    name='like2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                /><Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.usercommentbtn}>
                                <Icon
                                    style={{ transform: [{ rotateY: '180deg' }] }}
                                    name='dislike2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                />
                                <Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.usercommentbtn}>
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



                    <View style={styles.usercomment1}>
                        <View style={styles.commentrow1}>
                            <Image style={styles.commentuser} source={profile} />
                            <Text style={styles.username}>Alex |</Text>
                            <Text style={styles.usertime}>2 hours ago</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.usercomment1}>
                                Lorem ipsum Duis aute irure dolor in reprehen
                                rit inarcu cursus euismod. </Text>
                        </View>
                        <View style={styles.usercommenticon}>

                            <TouchableOpacity style={styles.usercommentbtn}>
                                <Icon
                                    name='like2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                /><Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.usercommentbtn}>
                                <Icon
                                    style={{ transform: [{ rotateY: '180deg' }] }}
                                    name='dislike2'
                                    type='antdesign'
                                    color='#707070'
                                    size={18}
                                /><Text style={styles.commentboxlike}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.usercommentbtn}>
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
        marginHorizontal: 10,
        paddingVertical: 10,
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
    usercomment1: {
        marginTop: 10,
        paddingHorizontal: 50,
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
    usercomment1: {
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

export default Foot
