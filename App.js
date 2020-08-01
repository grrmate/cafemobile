import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useReducer} from 'react';
import {StyleSheet, Image, Text, Alert, ActivityIndicator, View } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import io from 'socket.io-client';

import RootStackScreen from './src/screens/RootStackScreen'
import CafeStackScreen from './src/screens/CafeStackScreen'
import LoginScreen from './src/screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen.jsx'

import Logo from './src/assets/logo.png'

import AsyncStorage from '@react-native-community/async-storage'
import I18n from './src/i18n/locales'

import {AuthContext} from './components/context';

const Stack = createStackNavigator();

import api from './src/services/api';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#161515',
    color: '#E3E3E3'
  },
};

export default function App() { 
  //const [socket, setSocket] = React.useState("")

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async (username, password) => {
     // setSocket(io('https://af80632d1ae0.ngrok.io'))

      let userToken;
      userToken = null;


      //const response = await api.post('/api/auth/login', {
      //  username: username,
      //  password: password
      //})

      if (username == "user" && password == "123") {
        try {
          userToken = "dadada"
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e)
        }
      } 
      dispatch({type: 'LOGIN', id: username, token: userToken})
    },
    
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e)
      }
      dispatch({type: 'LOGOUT'})
    },

    signUp: async (username, password) => {
      let userToken;
      userToken = null;
      if (/^[a-zA-Z0-9_]{1,15}$/.test(username)) {
       // const response = await api.post('/api/auth/register', {
        //  username: username,
        //  password: password
        //})
        if (username == "user123" && password == "user231") {
          try {
            userToken = 'dadada'
            await AsyncStorage.setItem('userToken', userToken);
          } catch(e) {
            console.log(e)
          } 
        } else {
          // Alert.alert("Error", I18n.t('error.' + response.data))
          console.log("oi")
        }
      } else {
        Alert.alert("Error", I18n.t('error.invalidcharacters'))
      }
      dispatch({type: 'REGISTER', id: username, token: userToken})
    }
  }))
  useEffect(() => {
    setTimeout( async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken', userToken);
        console.log(userToken)
      } catch(e) {
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 2000);
  }, [])

  if (loginState.isLoading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#080214'}}>
        <Image style={{width: 200, height: 200}} source={Logo} />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar style="light" />
      <NavigationContainer theme={theme}>
        {loginState.userToken == null ? (<RootStackScreen/>) : (<CafeStackScreen/>)}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
