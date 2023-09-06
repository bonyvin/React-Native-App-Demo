import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, ImageBackground, Pressable, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Home = () => {
    return (
        <ScrollView>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}><Text>Home</Text>
            <Text style={{fontSize:25}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi dolores nihil odio itaque saepe laborum, blanditiis voluptates in, voluptas sed officia molestiae quod culpa fugit eligendi facilis. In a vel dolor, illo, aperiam iusto ullam quas quod voluptas quibusdam vitae ea deleniti facere ab necessitatibus quam eos! Debitis similique sequi vel facilis fugiat impedit dolorum quidem, animi voluptatibus error recusandae necessitatibus, saepe dicta repudiandae qui. Veritatis perspiciatis eius illo? Commodi natus praesentium laboriosam tempore! Architecto veritatis, itaque sunt distinctio ut nesciunt numquam, ipsam et quae repudiandae commodi? Enim libero dignissimos magnam laborum impedit deserunt culpa quae, adipisci modi saepe velit? Aperiam inventore eum reiciendis cumque ullam doloribus ipsam perspiciatis perferendis culpa sequi aliquam minus, dolor atque velit mollitia commodi at, asperiores fugit?</Text></View></ScrollView>)

}
export default Home;