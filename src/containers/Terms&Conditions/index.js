import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import { Header, Button } from "../../component"


const TermsConditions = () => {
    return (
        <SafeAreaView>
            <Header title="Terms & Conditions" lefticon={true} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, backgroundColor: "#fff" }} >
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book.
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        color: "#5F5F5F",
        fontSize: 13,
        paddingHorizontal: 40,
        lineHeight: 23,
        paddingVertical: 20,
    },
})

export default TermsConditions
