import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding, GetStartScreen, Login, SignIn, Register, PasswordReset1, VerifyCode, EmailVerifySuccess, NewPassword, ResetPasswordSuccess } from "../../containers"


const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthStack.Screen name="GetStartScreen" component={GetStartScreen} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="PasswordReset1" component={PasswordReset1} />
      <AuthStack.Screen name="VerifyCode" component={VerifyCode} />
      <AuthStack.Screen name="NewPassword" component={NewPassword} />
      <AuthStack.Screen name="EmailVerifySuccess" component={EmailVerifySuccess} />
      <AuthStack.Screen name="ResetPasswordSuccess" component={ResetPasswordSuccess} />

    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
