import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity ,StatusBar } from "react-native"
import { arrow, Share, searchicon, searchlogo } from "../../assets";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const { lefticon, righticon, leftIconPress, rightIconPress, title, searchicon } = props
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
        <StatusBar
        backgroundColor="#FF9B70"/>
            {lefticon ? (
                <View style={styles.iconview}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name='keyboard-backspace'
                            type='material-community'
                            color='white'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>) : <View style={styles.iconview}></View>
            }
            <View style={styles.textview}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
            {righticon && (
                <View style={styles.iconview}>
                    <TouchableOpacity onPress={rightIconPress}>
                        <Icon
                            name='md-arrow-back'
                            type='ionicon'
                            color='white'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>)
            }
            {searchicon ? (
                <View style={styles.iconview}>
                    <TouchableOpacity onPress={rightIconPress}>
                        <Icon
                            name='search'
                            type='font-awesome'
                            color='white'
                            size={22}
                        />
                    </TouchableOpacity>
                </View>) : <View style={styles.iconview2}></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#FF9B70",
        height: 80,
        paddingHorizontal: 20
    },
    iconview: {
        justifyContent: "center",
    },
    iconview2: {
        width: 25,
        height: 25,
        justifyContent: "center",
    },
    textview: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },
    icon: {
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        letterSpacing: 1,
        fontSize: 20,
        fontWeight: "bold",
    }
})
export default Header;