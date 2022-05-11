import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { email, pass } from "../../assets/index";
import { Button, Header, Input } from "../../component";
import { updateUser } from '../../Redux/actions/authActions';

const SignIn = (props) => {
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const [userEmail, setUserEmail] = useState();
    const [emailError, setEmailError] = useState();

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(
            updateUser({
                email: 'fitforall@gmail.com',
                password: 'Fitforall@123',
            }),
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <Header title="Sign in" lefticon />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Fit For All</Text>

                    <Input ViewStyle={{ marginBottom: 7 }} iconStyle={styles.iconStyle1} icon={email} placaeholdertitle="Email" />
                    <Input ViewStyle={{ marginBottom: 7 }} iconStyle={styles.iconStyle} icon={pass} placaeholdertitle="Password" />

                    <View style={styles.child_2}>
                        <Text style={styles.child_2_Text_1}>Forgot Password?</Text>

                        <TouchableOpacity onPress={() => props.navigation.navigate('PasswordReset1')}>
                            <Text style={styles.child_2_Text_2}>/ Reset</Text>
                        </TouchableOpacity>
                    </View>

                    <Button btnViewStyle={styles.btn} btntxtstyle={styles.btntext} title="Sign in" btnonpress={() => onSubmit()} />

                    <View style={styles.child_3}>
                        <Text style={styles.child_3_Text_1}>Don’t have an account?</Text>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                            <Text style={styles.child_3_Text_2}> / Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 30,
        color: "#4B3F2F",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 30,
        marginVertical: 20,
    },
    child_2: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    child_2_Text_1: {
        color: "#707070",
        fontSize: 15,
    },
    child_2_Text_2: {
        color: "#F4A135",
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "bold"
    },
    child_3: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    child_3_Text_1: {
        color: "#707070",
        fontSize: 15,
    },
    child_3_Text_2: {
        color: "#F4A135",
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "#FF9B70",
        marginTop: 20,
    },
    btntext: {
        color: "#fff",
        fontSize: 20,
    },
    iconStyle: {
        width: 22,
        height: 23,
    },
    iconStyle1: {
        width: 25,
        height: 20,
    },
})

export default SignIn
