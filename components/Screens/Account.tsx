import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, ImageBackground, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
const Account = () => {
    return (
        <ScrollView>
            <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}><Text>Account</Text></View></ScrollView>)

}
export default Account;