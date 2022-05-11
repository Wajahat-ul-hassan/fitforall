import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux';

import { removeUser } from '../../Redux/actions/authActions';

import { profile, subscription, contact_us, favorites, logout } from '../../assets';

const CustomDrawer = props => {

  const dispatch = useDispatch();

  const handlLogout = () => {
    props.navigation.closeDrawer();
    dispatch(removeUser());
  };

  return (
    <View style={styles.menuView}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20, marginTop: 10 }}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name='close-circle-outline' color={"#404040"} size={25} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
          <Image source={profile} style={{ height: 90, width: 90, borderRadius: 100, borderWidth: 2, borderColor: "#FF9B70" }} />
        </View>
        <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontSize: 16, color: '#4B3F2F', marginTop: 10 }}>@alex99</Text>
      </View>

      <TouchableOpacity
        style={{ height: 55, backgroundColor: '#F1F1F1', borderBottomWidth: 0.5, borderBottomColor: "#9D9D9D", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        onPress={() => { props.navigation.navigate("Subscription") }}
      >
        <Image resizeMode='center' source={subscription} style={{ height: 20, width: 20, marginLeft: 20 }} />
        <Text style={{ color: '#404040', fontSize: 15, textTransform: 'capitalize', flex: 1, marginLeft: 15 }}>subscription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ height: 55, backgroundColor: '#ffffff', borderBottomWidth: 0.5, borderBottomColor: "#9D9D9D", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        onPress={() => { props.navigation.navigate("Favorites") }}
      >
        <Image resizeMode='center' source={favorites} style={{ height: 20, width: 20, marginLeft: 20 }} />
        <Text style={{ color: '#404040', fontSize: 15, textTransform: 'capitalize', flex: 1, marginLeft: 15 }}>favorites</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{ height: 55, backgroundColor: '#F1F1F1', borderBottomWidth: 0.5, borderBottomColor: "#9D9D9D", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        onPress={() => { props.navigation.navigate("Contactus") }}
      >
        <Image resizeMode='center' source={contact_us} style={{ height: 20, width: 20, marginLeft: 20 }} />
        <Text style={{ color: '#404040', fontSize: 15, textTransform: 'capitalize', flex: 1, marginLeft: 15 }}>contact us</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{ height: 55, backgroundColor: '#ffffff', borderBottomWidth: 0.5, borderBottomColor: "#9D9D9D", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        onPress={() => { handlLogout() }}
      >
        <Image resizeMode='center' source={logout} style={{ height: 20, width: 20, marginLeft: 20 }} />
        <Text style={{ color: '#404040', fontSize: 15, textTransform: 'capitalize', flex: 1, marginLeft: 15 }}>log out</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  menuView: {
    flex: 1,
  },

});

export default CustomDrawer;
