import React from 'react';
import {Router} from "./src/navigation";
import {View , Text} from "react-native"
import SplashScreen from 'react-native-splash-screen';
import { store, persistor } from './src/Redux/store';
import { Provider } from 'react-redux';

const App = () => {
  SplashScreen.hide();
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  )
}
export default App;
