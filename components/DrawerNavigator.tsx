import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
 import { NavigationContainer } from "@react-navigation/native";
import C from "./C";
import { Dimensions, Text, View } from "react-native";
import { screen_height } from "./Dimensions";
import A from "./Screens/Home";
import Home from "./Screens/Home";



const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      // drawerContentStyle:{backgroundColor:'#BDD646'},
      // drawerContentContainerStyle:{backgroundColor:'#BDD646',},
      // drawerContentStyle:{marginTop:250},
      drawerContentStyle:{marginTop:20},
      // drawerItemStyle:{backgroundColor:'#BDD646'},
      drawerActiveTintColor:'#BDD646',

      drawerLabelStyle:{color:'black'},
      headerStyle:{backgroundColor:'#BDD646',height:0.04*screen_height},
      drawerStyle:{ flex: 1, },
      headerTitleStyle:{fontSize:15}
      
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />

    </Drawer.Navigator>
  );
}

const Profile=()=>{
  return(
  <View style={{    flex: 1,
      justifyContent: "center",
      alignItems: "center",}}><Text>Profile</Text></View>)

}


export default DrawerNavigation;