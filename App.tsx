import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./components/BottomTabsGroup";
import FooterNavigation from "./components/BottomTabsGroup";
import TestNavigator from "./components/TestNavigator";
import DrawerNavigation from "./components/DrawerNavigator";
import TopTabsGroup from './components/TopTabsGroup';
import BottomTabsGroup from './components/BottomTabsGroup';
import Login from './components/Screens/Login';
import MainStack from './components/MainStack';
import KBLStack from './components/BottomTabsGroup';

 const App = () => {
  return (
//  <MainStack/>

  <NavigationContainer><MainStack/></NavigationContainer>
//  <Login/>
  )
}
export default App;