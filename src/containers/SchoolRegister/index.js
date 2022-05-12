import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { user, location, email, pass, upload, mobile, school } from "../../assets/index";
import { Button, Header, Input, } from "../../component";
// import { RadioButton, Checkbox } from 'react-native-paper';
import { emailRegex, phoneNumberRegex, nameRegex, passwordRegex, validate } from '../../util/validation';
import CheckBox from 'react-native-check-box'
const { width, height } = Dimensions.get('screen');
let errors = {
    emailErr: 'Please Enter Your Email.',
    schoolname: 'Please Enter Your School Name',
    schooladdressErr: 'Please Enter Your School Address.',
    passwordErr: 'Password Must Be 8 Digit.',
    phoneNumErr: 'Please Enter Your Phone Number.',
};

const Register = (props) => {

    const [photo, setPhoto] = useState();
    const [checked, setChecked] = useState('first');
    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);
    const [useremail, setUserEmail] = useState();
    const [emailError, setEmailError] = useState();
    const [schoolnam, setSchoolNam] = useState('');
    const [schoolnamerror, setSchoolNamError] = useState();
    const [userpassword, setUserPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmuserpassword, setConfirmUserPassword] = useState();
    const [confirmpasswordError, setConfirmPasswordError] = useState();
    const [schooladdress, setSchoolAddress] = useState();
    const [schooladdresserror, setSchoolAddressError] = useState();
    const [phonenumber, setPhoneNumber] = useState('');
    const [phonenumbererror, setPhoneNumberError] = useState();

    const takephoto = async () => {
        let options = {
            mediaType: "photo"
        }
        try {
            await launchCamera(options, callback)
        }
        catch (error) {
            console.log("open camera", error)
        }
    };

    const callback = (resCamera) => {
        console.log("--", resCamera)
        setPhoto(resCamera.assets[0].uri);
    };

    const onChangeText = async (
        value,
        state,
        errorState,
        regex,
        errorMessage,
    ) => {
        let error = validate(value, regex, errorMessage);
        state(value);
        errorState(error);
    };

    const onSubmit = () => {
        if (!schoolnam) {
            setSchoolNamError("Enter School Address")
        }
        else if (!schooladdress) {
            setSchoolAddressError("Enter School Address")
        }
        else if (!useremail) {
            setEmailError("Enter School Email")
        }
        else if (!phonenumber) {
            setPhoneNumberError("Enter School Phone Number")
        }
        else if (!userpassword) {
            setPasswordError("Enter Your Password")
        }
        else if (!confirmuserpassword) {
            setConfirmPasswordError("Enter Your Password")
        }
        else {
            props.navigation.navigate('Register')
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>

            <Header title="Register" lefticon />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.continer_1}>
                    <Text style={styles.heading}>Fit For All</Text>

                    <Input value={schoolnam}
                        onChangeText={value => onChangeText(
                            value,
                            setSchoolNam,
                            setSchoolNamError,
                            nameRegex,
                            errors.schoolname)} error={schoolnamerror}
                        ViewStyle={{ marginBottom: 7, }}
                        iconStyle={styles.usericon} icon={school} placaeholdertitle="School Name" />

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <View style={styles.ViewStyle}>
                            <Text style={styles.school_text}>School Logo</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={takephoto} style={styles.uploadbtn}>
                            <Image resizeMode='stretch' style={{ width: 17, height: 20 }} source={upload} />
                            <Text style={{ fontSize: 15, color: "#F8F6F9" }}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 10, color: "#4B3F2F", marginLeft: 10, marginTop: 5, }}>Size 500 x 500 px | Max 2 MB</Text>

                    <Input value={schooladdress}
                        onChangeText={value => onChangeText(
                            value,
                            setSchoolAddress,
                            setSchoolAddressError,
                            nameRegex,
                            errors.schooladdressErr)} error={schooladdresserror} iconStyle={styles.calandericon} icon={location} placaeholdertitle="School Address" />
                    <Input iconStyle={styles.usericon} icon={user} placaeholdertitle="Role at School" />

                    <Input value={useremail}
                        onChangeText={value => onChangeText(
                            value,
                            setUserEmail,
                            setEmailError,
                            emailRegex,
                            errors.emailErr)} error={emailError} iconStyle={styles.emilicon} icon={email} placaeholdertitle="Email" />

                    <View style={styles.child_2}>
                        <Input
                            value={userpassword}
                            onChangeText={value => onChangeText(
                                value,
                                setUserPassword,
                                setPasswordError,
                                passwordRegex,
                                errors.passwordErr)}
                            ViewStyle={styles.inputViewStyle} inputStyle={styles.input}
                            iconStyle={styles.passwordicon} icon={pass} placaeholdertitle="Password" />

                        <Input
                            value={confirmuserpassword}
                            onChangeText={value => onChangeText(
                                value,
                                setConfirmUserPassword,
                                setConfirmPasswordError,
                                passwordRegex,
                                errors.passwordErr)}
                            ViewStyle={styles.inputViewStyle} inputStyle={styles.input} iconStyle={styles.passwordicon}
                            icon={pass} placaeholdertitle="Confirm Password" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                        <Text style={styles.error}>{passwordError}</Text>
                        <Text style={styles.error}>{confirmpasswordError}</Text>
                    </View>

                    <Input value={phonenumber}
                        onChangeText={value => onChangeText(
                            value,
                            setPhoneNumber,
                            setPhoneNumberError,
                            phoneNumberRegex,
                            errors.phoneNumErr)} error={phonenumbererror} inputStyle={styles.input} iconStyle={styles.mobileicon} icon={mobile} placaeholdertitle="Contact No" />



                    <View style={styles.chackboxarea}>
                        <View style={styles.checkBoxAndTextView}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }}
                                onClick={() => {
                                    setCheckBox1(!checkBox1)
                                }}
                                isChecked={checkBox1}
                                checkedCheckBoxColor="#FF9B70"
                                uncheckedCheckBoxColor="#000000"
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
                            <CheckBox
                                style={{ flex: 1, padding: 10 }}
                                onClick={() => {
                                    setCheckBox1(!checkBox1)
                                }}
                                isChecked={checkBox1}
                                checkedCheckBoxColor="#FF9B70"
                                uncheckedCheckBoxColor="#000000"
                                onPress={() => {
                                    setCheckBox1(!checkBox1);
                                }}
                            />

                            <Text style={styles.checkboxText}>
                                Accept <Text onPress={() => props.navigation.navigate('TermsConditions')} style={{ color: "#D40000" }}>‘Terms & Conditions’</Text> of using the
                                Application
                            </Text>
                        </View>
                    </View>

                    <Button btnonpress={() => onSubmit()} btnViewStyle={styles.btn} title="Sign Up" />

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
        width: 18,
        height: 20,
    },
    error: {
        fontSize: 10,
        color: 'red',
        marginLeft: 20
    },
    school_text: {
        color: "#707070",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    uploadbtn: {
        backgroundColor: "#FF9B70",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        height: 55,
        flex: 1,
    },
    ViewStyle: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: "65%",
        height: 55,
        backgroundColor: "rgba(185, 185, 185, 0.2)",
    },
    calandericon: {
        width: 16,
        height: 22,
    },
    emilicon: {
        width: 20,
        height: 16,
    },
    passwordicon: {
        width: 15,
        height: 21,
    },
    input: {
        width: 80,
        height: 80,
        paddingLeft: -20,
    },
    mobileicon: {
        width: 15,
        height: 23,
    },
    inputViewStyle: {
        width: width * 0.43
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
        // alignItems: 'flex-start'
    },
    checkboxText: {
        fontSize: 14,
        color: '#707070',
        marginRight: 30,
        marginTop: 5,
        lineHeight: 17
    },
})

export default Register
