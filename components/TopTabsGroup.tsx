import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
 import DrawerNavigation from "./DrawerNavigator";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsGroup=()=>{
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarItemStyle:{backgroundColor:'#BDD646'},
        tabBarIndicatorStyle: {
          height: 0,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
        animationEnabled:false
      }}
    >
      <TopTabs.Screen
        name="main"
        component={DrawerNavigation}
        options={{
          tabBarLabel: "Feed",
        }}
      />
    </TopTabs.Navigator>
  );
}
export default TopTabsGroup;