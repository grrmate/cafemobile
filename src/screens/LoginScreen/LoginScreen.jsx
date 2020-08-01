import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {I18nManager, StyleSheet, Text, Alert, View, Image, TextInput, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import I18n from '../../i18n/locales'

import styles from './styles.jsx'
import Input from '../../components/Input'
import Logo from '../../assets/logo.png'

import {AuthContext} from '../../../components/context';

export default function LoginScreen({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    isValidUser: true,
    isValidPassword: true
  })

  const textInputChange = (val) => {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: true
      })
  }

  const handlePasswordChange = (val) => {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      })
  }

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        isValidUser: false
      })
    }
  }

  const handleValidPassword= (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidPassword: true
      })
    } else {
      setData({
        ...data,
        isValidPassword: false
      })
    }
  }

  const { signIn } = React.useContext(AuthContext);

  const loginHandle = (username, password) => {
    signIn(username, password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.footer}>
        <View><Text style={styles.title}>{I18n.t('loginscreen.title')} <Text style={{fontSize: 10, fontWeight: "500"}}>{data.isValidUser ? null : "Wrong info login"}</Text></Text></View>
        <Text style={{marginLeft: 20, fontSize: 8}}></Text>
        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Input placeholder={I18n.t('loginscreen.usernameInput')} onChangeText={(val) => textInputChange(val)} onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}/>
            <Input placeholder={I18n.t('loginscreen.passwordInput')} onChangeText={(val) => handlePasswordChange(val)} onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}  secureTextEntry/>
            <TouchableOpacity style={button.button} onPress={() => {loginHandle(data.username, data.password)}}>
              <Text style={{fontWeight: "700", color: '#0D3D12'}}>{I18n.t('loginscreen.buttonInput')}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{flex: 1, justifyContent: 'center', alignItems:'center', padding: 30}}
                onPress={() => {    
                  navigation.navigate('Register')
                }}
            >
                <Text>{I18n.t('loginscreen.signin')}</Text>
            </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
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