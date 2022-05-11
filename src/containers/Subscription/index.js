import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

// import components 
import { Button, Header, Vedio, Input } from "../../component";

const Subscription = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Header title="Subscription" lefticon />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20, }}>
                    <View style={styles.card_1}>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text style={styles.Heading}>20$/ 3 Month</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                        </View>
                        <Button title="Subscribe To This Plan" btnViewStyle={styles.btnViewStyle} />
                    </View>

                    <View style={styles.card_1}>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text style={styles.Heading}>20$/ 3 Month</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                        </View>
                        <Button title="Subscribe To This Plan" btnViewStyle={styles.btnViewStyle} />
                    </View>

                    <View style={styles.card_1}>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text style={styles.Heading}>20$/ 3 Month</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                            <Text style={styles.subHeading}>Lorem Ipsum</Text>
                        </View>
                        <Button title="Subscribe To This Plan" btnViewStyle={styles.btnViewStyle} />
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    card_1: {
        backgroundColor: "#F1F1F1",
        borderRadius: 12,
        paddingTop: 10,
        marginVertical: 20
    },
    Heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5F5F5F",
        marginVertical: 10,
    },
    subHeading: {
        fontSize: 14,
        color: "#404040",
        marginBottom: 2
    },
    btnViewStyle: {
        marginTop: 15
    }
})

export default Subscription
