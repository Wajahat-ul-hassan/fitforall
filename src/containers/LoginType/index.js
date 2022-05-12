import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { sign_in, FB, pin, } from "../../assets/index";
import { Button, Header } from "../../component";
const { height, width } = Dimensions.get('screen')
import { addType } from '../../Redux/actions/authActions';
import { useDispatch } from 'react-redux';

const LoginType = (props) => {
    const dispatch = useDispatch();

    const onSubmit = (type) => {
        dispatch(
            addType({

                type: type,
            }),
        );
        props.navigation.navigate('SignIn')

    };

    return (

        <View style={{ flex: 1, backgroundColor: "#ffffff", alignItems: 'center' }}>
            <StatusBar
                backgroundColor="#FF9B70" />
            <Header title="Login Type" lefticon />
            <View style={styles.container}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.child_3_Text_1}>For Student User  </Text>
                    <Button btnViewStyle={styles.btn} btntxtstyle={styles.btntext} title="Click Here" btnonpress={() => onSubmit('Student')
                    } />
                </View>

                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.child_3_Text_1}>For School  </Text>
                    <Button btnViewStyle={styles.btn} btntxtstyle={styles.btntext} title="Click Here" btnonpress={() => onSubmit('School')} />
                </View>

            </View>

        </View>
    )
}

export default LoginType

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#FF9B70",
        marginTop: 10,
    },
    btntext: {
        color: "#fff",
        fontSize: 20,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        width: width,
        marginTop: -20,
        justifyContent: 'center',


    },
    child_3_Text_1: {
        color: "#707070",
        fontSize: 15,
        alignSelf: 'center'
    },
})