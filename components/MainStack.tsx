import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import BottomTabsGroup from './BottomTabsGroup';
import KBLStack from './BottomTabsGroup';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  BottomTabsGroupHome:undefined
};

const MainStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="BottomTabsGroupHome" component={BottomTabsGroup} options={{headerShown:false}}/>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default MainStack;
