import React, { useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import A from "./Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { View, Text, Animated, Dimensions } from "react-native";
import { TabBarIndicator } from "react-native-tab-view";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DrawerNavigation from "./DrawerNavigator";
import TopTabsGroup from "./TopTabsGroup";
import EWarranty from "./Screens/EWarranty";
import Products from "./Screens/Products";
import Dashboard from "./Screens/Dashboard";
import Account from "./Screens/Account";


// import About from "../screens/About";

const Tab = createBottomTabNavigator();

 function B(){
  return(<View><Text>B</Text></View>)
 }   
 function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}
const BottomTabsGroup = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
     <Tab.Navigator
    initialRouteName="BottomHome"

    screenOptions={{
      tabBarStyle: {
        display: 'flex',
        position: 'absolute',
        // paddingTop: 8,
        // paddingBottom: 10,
        elevation: 5,
        // borderRadius: 30,
        // borderBottomRightRadius: 0,
        // borderBottomLeftRadius: 0,
        height: 90,
        alignItems: 'center',
      },
      // tabBarStyle: { height:'10%' },
      // tabBarActiveTintColor: '#BDD646',
      // tabBarBadgeStyle: { color: '#BDD646' },
      tabBarActiveTintColor: '#7CA733',
      tabBarBadgeStyle: { color: '#7CA733' },
      tabBarLabelStyle: { fontSize: 12, paddingBottom: 0 },
      // tabBarIconStyle:{paddingTop:15},
      tabBarItemStyle: { marginVertical: 15 },
      


    }}
  >
     <Tab.Screen
      name="BottomHome"
      component={TopTabsGroup}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      })}
    />
    
        <Tab.Screen
      name="EWarranty"
      component={EWarranty}
      options={{
        headerShown: false,
        tabBarLabel: 'EWarranty',
        tabBarIcon: ({ focused,color }) => (
          <Icon name="file" color={color} size={23} />
        )
      }}listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth()*1.15,
            useNativeDriver: true
          }).start();
        }
      })}
    />
    <Tab.Screen
      name="Products"
      component={Products}
      options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="shopping-cart" color={color} size={size} />
        ), headerShown: false,
      }}listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 2.4,
            useNativeDriver: true
          }).start();
        }
      })}
    />
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <Foundation name="wrench" color={color} size={size} />
        ), headerShown: false,
      }}listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 3.7,
            useNativeDriver: true
          }).start();
        }
      })}
    /><Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Icon name="account" color={color} size={size} />
        ), headerShown: false,
      }}listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 5,
            useNativeDriver: true
          }).start();
        }
      })}
    />
    {/* <Animated.View style={{
        width: getWidth() - 15,
        height: 4,
        backgroundColor: '#7CA733',
        position: 'absolute',
        bottom: 0,
        // Horizontal Padding = 20...
        left: 20,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View> */}
  </Tab.Navigator>
  
   );
}

export default  BottomTabsGroup;







// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Octicons from 'react-native-vector-icons/Octicons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { View, ImageBackground, Pressable,Text, StyleSheet } from 'react-native';
// import A from './A';
// // function Ewarranty() {
// //     return (
// //         <View style={{ marginTop: 30, }}>
// //             <View style={[styles.container]}>
// //                 <Text>Ewarranty</Text>
// //                 </View>

// //         </View>
// //     );
// // }
// // function Products() {
// //     return (
// //         <View style={{ marginTop: 30, }}>
// //             <View style={[styles.container]}>
// //                 <Text>Products</Text>
// //                 </View>

// //         </View>
// //     );
// // }function Home() {
// //     return (
// //         <View style={{ marginTop: 30, }}>
// //             <View style={[styles.container]}>
// //                 <Text>Home</Text>
// //                 </View>

// //         </View>
// //     );
// // }function Account() {
// //     return (
// //         <View style={{ marginTop: 30, }}>
// //             <View style={[styles.container]}>
// //                 <Text>Account</Text>
// //                 </View>

// //         </View>
// //     );
// // }function Installation() {
// //     return (
// //         <View style={{ marginTop: 30, }}>
// //             <View style={[styles.container]}>
// //                 <Text>Installation</Text>
// //                 </View>

// //         </View>
// //     );
// // }


// const BottomTab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator<RootStackParamList>();

// const FooterNavigation = () => {
//   <NavigationContainer>
//     <BottomTab.Navigator
//     initialRouteName="A"

//       screenOptions={{
//         tabBarStyle: {
//           display: 'flex',
//           position: 'absolute',
//         //   paddingTop: 8,
//         //   paddingBottom: 10,
//         //   elevation: 5,
//         //   borderRadius: 30,
//         //   borderBottomRightRadius: 0,
//         //   borderBottomLeftRadius: 0,
//         //   height: 90,
//           alignItems: 'center',
//         },
//         // tabBarStyle: { height:'10%' },
//         tabBarActiveTintColor: '#BDD646',
//         tabBarBadgeStyle: { color: '#BDD646' },
//         tabBarLabelStyle: { fontSize: 13, paddingBottom: 5 },
//         // tabBarIconStyle:{paddingTop:15},
//         tabBarItemStyle: { marginVertical: 12 },


//       }}
//     >
//       <BottomTab.Screen
//         name="A"
//         component={A}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//         {/* <BottomTab.Screen
//         name="Ewarranty"
//         component={Ewarranty}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="Products"
//         component={Products}
//         options={{
//           tabBarLabel: 'Checklist',
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="checklist" color={color} size={size} />
//           ), headerShown: false,
//         }}
//       />
//       <BottomTab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Dashboard',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="view-dashboard-outline" color={color} size={size} />
//           ), headerShown: false,
//         }}
//       /><BottomTab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           tabBarLabel: 'Account',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="account-circle-outline" color={color} size={size} />
//           ), headerShown: false,
//         }}
//       />
//       <BottomTab.Screen
//         name="Installation"
//         component={Installation}
//         options={{
//           tabBarLabel: 'Account',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="account-circle-outline" color={color} size={size} />
//           ), headerShown: false,
//         }}
//       /> */}
//     </BottomTab.Navigator></NavigationContainer>

// }
// const styles=StyleSheet.create({
//   container:{
//     // backgroundColor:'white'
//   }
// })
// export default FooterNavigation;