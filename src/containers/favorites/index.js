import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header, Vedio } from "../../component";


const Favorites = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header lefticon={true} title="Favorites" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {arr.map(() => {
                    return (
                        <Vedio videoUrl={'http://mkv22.cdnhdfriday.com/mkv-bollywood/Bunty%20Aur%20Bubli%202%202021%20Hindi%20DVDRip%20HDFRiday.CoM.mkv'}
                            thumbnailUrl={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_05/2732526/190128-exercise-gym-ac-556p.jpg'}
                            TitleView={styles.TitleView}
                            subTitleView={styles.subTitleView}
                            mainStyle={styles.mainStyle}
                            videoplyer={styles.videoplyer}
                            title="Push-up"
                            time="3 min"
                            name="Trainer Caronia"
                            views="225"
                            later="2 day"
                            icon={true}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        backgroundColor: "#EEECEC",
        height: 5
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

export default Favorites;