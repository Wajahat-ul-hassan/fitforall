import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';


import { user, calender, email, pass, mobile } from "../../assets/index";
import { Button, Header, Input, } from "../../component";
import { RadioButton, Checkbox } from 'react-native-paper';


const Register = (props) => {

    const [checked, setChecked] = useState('first');
    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>

            <Header title="Register" lefticon />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.continer_1}>
                    <Text style={styles.heading}>Fit For All</Text>

                    <Input iconStyle={styles.usericon} icon={user} placaeholdertitle="Username" />
                    <Input iconStyle={styles.calandericon} icon={calender} placaeholdertitle="Date Of Birth" />
                    <Input iconStyle={styles.emilicon} icon={email} placaeholdertitle="Email" />

                    <View style={styles.child_2}>
                        <Input ViewStyle={styles.inputViewStyle} inputStyle={styles.input} iconStyle={styles.passwordicon} icon={pass} placaeholdertitle="Password" />
                        <Input ViewStyle={styles.inputViewStyle} inputStyle={styles.input} iconStyle={styles.passwordicon} icon={pass} placaeholdertitle="Confirm Password" />
                    </View>

                    <Input inputStyle={styles.input} iconStyle={styles.mobileicon} icon={mobile} placaeholdertitle="Contact No" />

                    <View style={styles.child_3}>
                        <Text style={styles.child3_text1}>Do you have a disability ?</Text>
                        <RadioButton
                            uncheckedColor='#FF9B70'
                            color='#FF9B70'
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <RadioButton
                            uncheckedColor='#FF9B70'
                            color='#FF9B70'
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                    </View>

                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Please Provides in Details"
                            placeholderTextColor="#707070"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>

                    <View style={styles.chackboxarea}>
                        <View style={styles.checkBoxAndTextView}>
                            <Checkbox
                                uncheckedColor="#000000"
                                color="#FF9B70"
                                status={checkBox1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckBox1(!checkBox1);
                                }}
                            />
                            <Text style={styles.checkboxText}>
                                I assure you that the above mentioned
                                information is correct
                            </Text>
                        </View>
                        <View style={styles.checkBoxAndTextView}>
                            <Checkbox
                                uncheckedColor="#000000"
                                color="#FF9B70"
                                status={checkBox2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckBox2(!checkBox2);
                                }}
                            />
                            <Text style={styles.checkboxText}>
                                Accept <Text style={{ color: "#D40000" }}>‘Terms & Conditions’</Text> of using the
                                Application
                            </Text>
                        </View>
                    </View>

                    <Button btnViewStyle={styles.btn} title="Sign Up" />

                    <View style={styles.footer}>
                        <Text style={styles.footertext1}>Already User ?</Text>
                        <Text onPress={() => props.navigation.navigate('SignIn')} style={styles.footertext2}>Sign in</Text>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer_1: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#4B3F2F",
        textAlign: "center",
        marginVertical: 20,
    },
    child_2: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    usericon: {
        width: 22,
        height: 22,
    },
    calandericon: {
        width: 22,
        height: 22,
    },
    emilicon: {
        width: 25,
        height: 18,
    },
    passwordicon: {
        width: 15,
        height: 22,
    },
    input: {
        width: 100,
        height: 50,
        paddingLeft: -20,
        flexDirection: "column"
    },
    mobileicon: {
        width: 20,
        height: 23,
    },
    inputViewStyle: {
        width: 158
    },
    child_3: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-around",
        alignItems: 'center',
        marginRight: 5
    },
    child3_text1: {
        color: "#4B3F2F",
        fontSize: 14,
        textAlign: 'right',
        flex: 1,
        fontWeight: 'bold',
        marginRight: 50
    },
    radiobtn: {
        marginLeft: 10,
        colorScheme: "#ff9470"
    },
    textArea: {
        backgroundColor: "#EEECEC",
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
        textAlignVertical: 'top',
        color: "#404040"
    },
    chackboxarea: {
        flexDirection: "column",
        textAlign: "center",
        padding: 10,
        justifyContent: "flex-start"
    },
    chackbox: {
        borderRadius: 0,
        marginTop: 5,
        width: 18,
        height: 18,
        tintColor: 'yellow',
    },
    chackboxtext: {
        color: "#4B3F2F",
        fontSize: 14,
        padding: 5,
        marginTop: 5,
    },
    accept: {
        color: "#D40000",
        fontSize: 14,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },
    footertext1: {
        fontSize: 15,
        color: "#4B3F2F",
    },
    footertext2: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FF9B70",
        marginLeft: 5,
    },
    btn: {
        marginTop: 15,
    },
    checkBoxAndTextView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'flex-start'
    },
    checkboxText: {
        fontSize: 14,
        color: '#4B3F2F',
        marginRight: 25,
        marginTop: 10,
        lineHeight: 17
    },
})

export default Register
