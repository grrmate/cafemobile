import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Image, Text, ActivityIndicator, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen/LoginScreen'
import RegisterScreen from './RegisterScreen/RegisterScreen'

const Stack = createStackNavigator();

export default function RootStack() {
  return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>  
    )
}

