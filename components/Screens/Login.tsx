import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { View, Text, Animated, Dimensions, Image, TextInput, Pressable } from "react-native";
import { TabBarIndicator } from "react-native-tab-view";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { screen_height, screen_width } from "../Dimensions";
import DropdownComponent from "../Dropdown";
// import { RootStackParamList } from "./components/MainStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainStack";


type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>
const Login = ({ navigation }: LoginProps) => {
    const handleNavigation=()=>{
        navigation.navigate("BottomTabsGroupHome");
    }
    return (
        <SafeAreaView style={{ position: 'absolute', flex: 1 }}>
            <ImageBackground style={styles.image} source={require('kbl/components/images/KBLLoginBackground.png')}
            >
                <View style={{bottom:50}}><Image style={styles.kblLogo} source={require('kbl/components/images/KBL.png')}></Image>
                <Image style={styles.kblText} source={require('kbl/components/images/EnrichingLives.png')} /></View>
                {/* <Text>Enriching Lives</Text> */}
            </ImageBackground>
            <View style={styles.container}>
                <View style={{}}>
                    <Text style={styles.signInText}>Sign In</Text>
                    <Text style={{ color: 'black', fontSize: 15 }}>Sign In as</Text>
                    <View style={{ marginBottom: 10 }}><DropdownComponent /></View>

                    <Text style={{ color: 'black', fontSize: 15,margin: 8,marginLeft:0}}>Enter your mobile number<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={[, {
                        justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1,
                        borderColor: '#D9D9D9', alignItems: 'center', borderRadius: 8, paddingLeft: 10,paddingRight:10, marginBottom: 15,
                        marginRight:8, 
                    }]}>
                        <TextInput placeholder="Mobile Number"></TextInput>
                        <Ionicons name='phone-portrait-outline' size={23} style={{
                            color: 'gray',
                        }}></Ionicons>
                    </View>
                    <Text style={{fontSize:11,color:'gray'}}>will send OTP in your mobile number to verify</Text>
                    <Pressable style={styles.getOtpButton}><Text style={styles.getOtpButtonText}>Get OTP</Text></Pressable>
                    <Text style={{ color: 'black', fontSize: 13,alignSelf:'center' }}>To <Text style={{ color: 'rgba(46, 139, 247, 1)' }}>Sign Up</Text> please click below</Text>
                    <Pressable style={styles.SignInButton} onPress={handleNavigation}><Text style={styles.SignInButtonText}>Sign Up</Text></Pressable>

                </View>
            </View>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    image: {
        height: screen_height * 0.5,
        width: screen_width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    kblLogo: {
        height: screen_height * 0.15,
        width: screen_width * 0.25,
        marginBottom: 20,
        alignSelf:'center'
    },
    kblText: {
        height: screen_height * 0.038,
        width: screen_width * 0.5
    },

    container: {
        flex: 1.5,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        bottom: 90,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'center',
        width: screen_width * 1
    },
    signInText: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        paddingBottom: 20
    },
    textField: {
        padding: 10,
        flexDirection: 'row',
        height: screen_height * 0.055,
        width: 340,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    getOtpButton: {
        padding: 10,
        // flexDirection: 'row',
        height: screen_height * 0.055,
        width: 340,
        borderRadius: 8,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingHorizontal: 10,
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15

    },
    getOtpButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    SignInButton: {
        padding: 10,
        // flexDirection: 'row',
        height: screen_height * 0.055,
        width: 340,
        borderRadius: 8,
        backgroundColor: 'rgba(46, 139, 247, 1)',
        alignItems: 'center',
        paddingHorizontal: 10,
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15
    },
    SignInButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    HousekeepingCodeTile: {
        backgroundColor: 'white',
        // borderRadius: 20,
        height: 70,
        // margin: 10,
        // paddingRight:20,
        // justifyContent: 'center',
        flexDirection: 'row',
        padding: 18,

        // paddingTop: 20,
    }, HousekeepingNumbers: {
        // margin: 10,
        marginRight: 5,
        color: 'white',

    },
    HousekeepingCodeText: {
        color: 'gray',
        fontSize: 15,
        // marginTop: 10,
        // marginLeft: 0,
        // marginRight: 5,
        textAlign: 'center',
        paddingRight: 10,
        paddingLeft: 5

    },

})
export default Login;