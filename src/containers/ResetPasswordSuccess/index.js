import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { Button, Header, Input, SuccessAlert } from "../../component";
import {useSelector} from "react-redux";
const ResetPasswordSuccess = (props) => {
  const typeResponse = useSelector(state => state.authReducers.type);
  console.log("🚀 ~ file: index.js ~ line 7 ~ ResetPasswordSuccess ~ typeResponse", typeResponse)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Header title="Password Reset" lefticon={true} />
            <View style={styles.continer1}>
                <SuccessAlert message="Password has been reset successfully" />
                <Button btnonpress={() => props.navigation.navigate('SignIn')} btnViewStyle={styles.btn} title="Sign In" />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer1: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    btn: {
        marginTop: 30,
    },
    emailicon: {
        width: 25,
        height: 18,
    },
})

export default ResetPasswordSuccess;
