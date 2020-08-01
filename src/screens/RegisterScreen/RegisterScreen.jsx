import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import I18n from '../../i18n/locales'

import styles from './styles.jsx'
import Input from '../../components/Input'

import Logo from '../../assets/logo.png'

import {AuthContext} from '../../../components/context';

export default function RegisterScreen({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  })

  const textInputChange = (val) => {
    if(val.length != 0) {
      setData({
        ...data,
        username: val,
      })
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }
  const { signUp } = React.useContext(AuthContext);

  const registerHandle = (username, password) => {
    signUp(username, password)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>{I18n.t('registerscreen.title')}</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, margin: 20}} onPress={() => {navigation.pop()}}><Text style={{color: '#676565', fontWeight: "bold"}}>{I18n.t('registerscreen.back')}</Text></TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <Input placeholder={I18n.t('registerscreen.usernameInput')} onChangeText={(val) => textInputChange(val)} />
                <Input placeholder={I18n.t('registerscreen.passwordInput')} onChangeText={(val) => handlePasswordChange(val)} secureTextEntry/>
                <TouchableOpacity style={button.button} onPress={() => {registerHandle(data.username, data.password)}}>
                  <Text style={{fontWeight: "700", color: '#0D3D12'}}>{I18n.t('registerscreen.buttonInput')}</Text>
                </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const button = StyleSheet.create({
  button: {
      backgroundColor: '#FFB800',
      width: '90%',
      padding: 12,
      borderRadius: 10,
      alignItems: 'center'
  }
});