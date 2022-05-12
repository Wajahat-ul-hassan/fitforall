import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Subscription,
  TermsConditions,
  Home,
  Favorites,
  Contactus,
  WatchHistory,
  Help,
  Notification,
  Myprofile,
  Editprofile,
  Chats,
  Message,
  Traning,
  Animatedstories,
  Foot,
  NewPassword,
  AnimatedStories_2,
  Profile,
  Trainingvideo,
  HideChats,
  ReviewsRatingsVideos,
  Classess,
  Reviewrating,
  SchoolProfile
} from '../../containers';



const StackNavigator = createStackNavigator();
function AppStack({ navigation }) {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Profile" component={Profile} />
      <StackNavigator.Screen name="Trainingvideo" component={Trainingvideo} />
      <StackNavigator.Screen name="Subscription" component={Subscription} />
      <StackNavigator.Screen name="TermsConditions" component={TermsConditions} />
      <StackNavigator.Screen name="Favorites" component={Favorites} />
      <StackNavigator.Screen name="Contactus" component={Contactus} />
      <StackNavigator.Screen name="HideChats" component={HideChats} />
      <StackNavigator.Screen name="ReviewsRatingsVideos" component={ReviewsRatingsVideos} />
      <StackNavigator.Screen name="Classess" component={Classess} />
      <StackNavigator.Screen name="WatchHistory" component={WatchHistory} />
      <StackNavigator.Screen name="review&Rating" component={Reviewrating} />
      <StackNavigator.Screen name="Notification" component={Notification} />
      <StackNavigator.Screen name="Editprofile" component={Editprofile} />
      <StackNavigator.Screen name="Chats" component={Chats} />
      <StackNavigator.Screen name="Myprofile" component={Myprofile} />
      <StackNavigator.Screen name="Schoolprofile" component={SchoolProfile} />

      <StackNavigator.Screen name="Help" component={Help} />
      <StackNavigator.Screen name="Message" component={Message} />
      <StackNavigator.Screen name="Traning" component={Traning} />
      <StackNavigator.Screen name="Animatedstories" component={Animatedstories} />
      <StackNavigator.Screen name="Foot" component={Foot} />
      <StackNavigator.Screen name="NewPassword" component={NewPassword} />
      <StackNavigator.Screen name="AnimatedStories_2" component={AnimatedStories_2} />

    </StackNavigator.Navigator>
  );
}

export default AppStack;
