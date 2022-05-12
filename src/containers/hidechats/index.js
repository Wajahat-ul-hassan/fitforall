// import React, { useState } from "react";
// import { Dimensions, TouchableOpacity, View, ScrollView, StyleSheet, SafeAreaView, TextInput } from "react-native";
// // import { Modal, Box, Text, Pressable, Heading, IconButton, HStack, Avatar, VStack, Spacer, Center } from "native-base";
// import { SwipeListView } from "react-native-swipe-list-view";
// import { Icon } from 'react-native-elements';
// import { Header, Button } from "../../component";
// import { useNavigation } from '@react-navigation/native';


// const HideChatesData = [{
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     fullName: "Afreen Khan",
//     timeStamp: "12:47 PM",
//     massage: "1",
//     recentText: "Good Day!",
//     avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// }, {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     fullName: "Sujita Mathur",
//     timeStamp: "11:11 PM",
//     massage: "3",
//     recentText: "Cheer up, there!",
//     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
// }, {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     fullName: "Anci Barroco",
//     timeStamp: "6:22 PM",
//     recentText: "Good Day!",
//     massage: "1",
//     avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
// }, {
//     id: "68694a0f-3da1-431f-bd56-142371e29d72",
//     fullName: "Aniket Kumar",
//     timeStamp: "8:56 PM",
//     massage: "5",
//     recentText: "All the best",
//     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
// }];


// function HideChats() {
//     const [mode, setMode] = useState("Basic");

//     return (
//         <View style={{ width: '100%', flex: 1, backgroundColor: '#fff' }}>
//             <Header title="Hide Massages" lefticon />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <View style={{ paddingBottom: 100 }}>
//                     <View style={styles.child_1}>
//                         <TextInput style={styles.input} placeholderTextColor="#959595" placeholder="Search for message ...." />
//                         {/* <Icon name="search" type="FontAwesome" color={"#404040"} size={20} /> */}
//                     </View>
//                     <Basic />
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// function Basic() {

//     const [listData, setListData] = useState(HideChatesData);
//     const navigation = useNavigation();

//     const closeRow = (rowMap, rowKey) => {
//         if (rowMap[rowKey]) {
//             rowMap[rowKey].closeRow();
//         }
//     };

//     const deleteRow = (rowMap, rowKey) => {
//         closeRow(rowMap, rowKey);
//         const newData = [...listData];
//         const prevIndex = listData.findIndex(item => item.key === rowKey);
//         newData.splice(prevIndex, 1);
//         setListData(newData);
//     };

//     const onRowDidOpen = rowKey => {
//         console.log("This row opened", rowKey);
//     };

//     const renderItem = ({
//         item,
//         index,
//     }) =>
//         <Box>
//             <Pressable onPress={() => navigation.navigate("Message")} _dark={{
//                 bg: "coolGray.800"
//             }} _light={{
//                 bg: "white"
//             }}>
//                 <Box py="2">
//                     <HStack paddingY='2' paddingX='5' bgColor={index % 2 !== 0 ? "white" : "#F8F8F8"} alignItems="center" space={3}>
//                         <Avatar borderColor='#fff' borderWidth='1' size="48px" source={{
//                             uri: item.avatarUrl
//                         }} />
//                         <VStack>
//                             <Text color="#000" _dark={{
//                                 color: "warmGray.50"
//                             }}>
//                                 {item.fullName}
//                             </Text>
//                             <Text fontSize='12' color="coolGray.600" _dark={{
//                                 color: "warmGray.200"
//                             }}>
//                                 {item.recentText}
//                             </Text>
//                         </VStack>
//                         <Spacer />

//                         <View style={{ flexDirection: 'column', alignItems: 'center' }}>
//                             <Text fontSize='10' color="coolGray.800" _dark={{
//                                 color: "warmGray.50"
//                             }} alignSelf="flex-start">
//                                 {item.timeStamp}
//                             </Text>
//                             <View style={styles.countView}>
//                                 <Text style={styles.count}>
//                                     {item.massage}
//                                 </Text>
//                             </View>
//                         </View>

//                     </HStack>
//                 </Box>
//             </Pressable>
//         </Box >

//     const renderHiddenItem = (data, rowMap) =>
//         <HStack flex="1" pl="2">
//             <Pressable w="45" h='50' ml="auto" mt='1' mr='1' cursor="pointer" bg="#404040" borderRadius='5' justifyContent="center" onPress={() => navigation.navigate('Chats')} _pressed={{
//                 opacity: 0.5
//             }}>
//                 <VStack alignItems="center" space={2}>
//                     <Icon name='circle' type='feather' color='white' size={25} />
//                 </VStack>
//             </Pressable>
//             <Pressable w="45" h='50' mt='1' mr='1.5' cursor="pointer" bg="#FF9B70" borderRadius='5' justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
//                 opacity: 0.5
//             }}>
//                 <VStack alignItems="center" space={2}>
//                     <Icon name='delete' type='MaterialCommunityIcons' color='white' size={25} />
//                 </VStack>
//             </Pressable>
//         </HStack>

//     return (
//         <Box bg="white" safeArea flex="1">
//             <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} previewRowKey={"0"} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
//         </Box>
//     )
// }

// const styles = StyleSheet.create({
//     child_1: {
//         flexDirection: "row",
//         alignItems: "center",
//         borderRadius: 100,
//         marginTop: 10,
//         paddingHorizontal: 10,
//         marginHorizontal: 10,
//         backgroundColor: "#F7F7F7",
//         borderColor: '#707070',
//         borderWidth: 0.1,
//         marginBottom: 20,
//         marginHorizontal: 20
//     },
//     input: {
//         flex: 1,
//         height: 50,
//         padding: 10,
//         fontSize: 12,
//     },
//     count: {
//         fontSize: 8,
//         fontWeight: "bold",
//         color: "#fff",
//         textAlign: "center",
//         alignItems: 'center',
//         marginTop: -3
//     },
//     countView: {
//         backgroundColor: "#FF9B70",
//         width: 17,
//         height: 17,
//         borderRadius: 5,
//         alignSelf: 'flex-end',
//         alignItems: 'center',
//         marginTop: 10,
//         justifyContent: 'center'
//     },
// })

// export default HideChats

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const hidechats = () => {
  return (
    <View>
      <Text>hidechats</Text>
    </View>
  )
}

export default hidechats

const styles = StyleSheet.create({})