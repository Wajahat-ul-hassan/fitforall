import * as React from 'react';
import { View } from 'react-native'

import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerGestureContext } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import { AppStack, AuthStack, CustomDrawer } from '../index';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.2;

  return (
    <DrawerContentScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} {...props}>
      <CustomDrawer {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  const loginResponse = useSelector(state => state.authReducers.user);

  return (
    <Drawer.Navigator
      drawerContentContainerStyle={{ DrawerContentScrollView: false }}

      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEdgeWidth: 0,
        swipeEnabled: false,
        drawerStyle: {
          width: 170,
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        screenOptions={{
          headerShown: false,
        }}
        options={{
          swipeEnabled: !!loginResponse,
        }}
        name="Screen1"
        component={loginResponse ? AppStack : AuthStack}
      />
    </Drawer.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Router;
