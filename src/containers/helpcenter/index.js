import React from "react";
import { View, Text, ScrollView, } from "react-native";
import { Header } from "../../component"


const Help = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <Header title="Help Center" lefticon={true} />

            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }} >
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "900" }}>
                        Support and Guildlines
                    </Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#707070", marginTop: 20 , borderRadius:10 }}>
                    <Text style={{ color: "#707070" , marginVertical:20 , paddingHorizontal:10 , fontSize:15 }}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book
                        
                    </Text>
                    <Text style={{ color: "#707070" , marginVertical:10 , paddingHorizontal:10 , fontSize:15 }}>
                    Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book
                        
                    </Text>
                    <Text style={{ color: "#707070" , marginVertical:10 , paddingHorizontal:10 , fontSize:15}}>
                    Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book
                       
                    </Text>
                    <Text style={{ color: "#707070" , marginVertical:10 , paddingHorizontal:10 , fontSize:15 }}>
                    Lorem Ipsum is simply dummy text of the
                        printing and typesetting  industry. Lorem
                        Ipsum has been the industry's standard
                        dummy  text ever since the 1500s, when an
                        unknown printer took a galley  of type and
                        scrambled it to make a type specimen book
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Help;